import { useEffect, useState } from "react";
import { Mail, MailOpen, Trash2 } from "lucide-react";
import supabase from "../../../services/supabaseClient";

interface Message {
  id: string;
  name: string;
  email: string;
  subject: string;
  content: string;
  is_read: boolean;
  created_at: string;
}

export default function MessagesManager() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function fetchMessages() {
    const { data, error } = await supabase
      .from("contacts")
      .select()
      .order("created_at", { ascending: false });
    if (error) setError(error.message);
    else setMessages(data ?? []);
    setLoading(false);
  }

  useEffect(() => {
    fetchMessages();
  }, []);

  async function toggleRead(message: Message) {
    const { error } = await supabase
      .from("contacts")
      .update({ is_read: !message.is_read })
      .eq("id", message.id);
    if (error) {
      setError(error.message);
      return;
    }
    fetchMessages();
  }

  async function handleDelete(message: Message) {
    if (!window.confirm(`Supprimer le message de ${message.name} ?`)) return;
    const { error } = await supabase
      .from("contacts")
      .delete()
      .eq("id", message.id);
    if (error) {
      setError(error.message);
      return;
    }
    fetchMessages();
  }

  function formatDate(iso: string) {
    return new Date(iso).toLocaleString("fr-FR");
  }

  if (loading) {
    return <p className="text-gray-500">Chargement...</p>;
  }

  if (error) {
    return <p className="text-red-600">{error}</p>;
  }

  if (messages.length === 0) {
    return <p className="text-gray-500">Aucun message reçu.</p>;
  }

  const unread = messages.filter((m) => !m.is_read).length;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">Messages</h2>
        <span className="text-sm text-gray-500">
          {unread > 0
            ? `${unread} non lu${unread > 1 ? "s" : ""}`
            : "Tout est lu"}
        </span>
      </div>

      {messages.map((message) => (
        <div
          key={message.id}
          className={`rounded-2xl border p-5 flex flex-col gap-3 transition-colors ${
            message.is_read
              ? "bg-white border-gray-200 shadow-sm"
              : "bg-white border-gray-300 shadow-md"
          }`}
        >
          <div className="flex justify-between items-start gap-4">
            <div className="flex items-center gap-3">
              <div
                className={`rounded-full p-2.5 ${
                  message.is_read
                    ? "bg-gray-100 text-gray-400"
                    : "bg-gray-800 text-white"
                }`}
              >
                {message.is_read ? <MailOpen size={16} /> : <Mail size={16} />}
              </div>
              <div>
                <p className="font-semibold text-gray-800">
                  {message.subject}
                  {!message.is_read && (
                    <span className="ml-2 inline-block rounded-full bg-gray-800 text-white text-xs px-2 py-0.5 font-medium">
                      Nouveau
                    </span>
                  )}
                </p>
                <a
                  href={`mailto:${message.email}`}
                  className="text-sm text-gray-500 hover:underline"
                >
                  {message.email}
                </a>
              </div>
            </div>
            <span className="text-xs text-gray-400 whitespace-nowrap">
              {formatDate(message.created_at)}
            </span>
          </div>

          <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">
            {message.content}
          </p>

          <div className="flex gap-2">
            <button
              onClick={() => toggleRead(message)}
              className="rounded-full border border-gray-300 text-gray-700 text-sm font-medium px-4 py-2 hover:bg-gray-100"
            >
              {message.is_read ? "Marquer non lu" : "Marquer lu"}
            </button>
            <button
              onClick={() => handleDelete(message)}
              className="rounded-full p-2 text-gray-500 hover:bg-red-50 hover:text-red-600"
              aria-label="Supprimer"
            >
              <Trash2 size={16} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
