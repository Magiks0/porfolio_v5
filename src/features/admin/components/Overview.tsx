import { useEffect, useState } from "react";
import { FolderKanban, Inbox, MailOpen } from "lucide-react";
import supabase from "../../../services/supabaseClient";

interface Stats {
  projects: number | null;
  messages: number | null;
  unread: number | null;
}

export default function Overview() {
  const [stats, setStats] = useState<Stats>({
    projects: null,
    messages: null,
    unread: null,
  });

  useEffect(() => {
    Promise.all([
      supabase
        .from("projects")
        .select("*", { count: "exact", head: true })
        .then(({ count }) => count),
      supabase
        .from("contacts")
        .select("*", { count: "exact", head: true })
        .then(({ count }) => count),
      supabase
        .from("contacts")
        .select("*", { count: "exact", head: true })
        .eq("is_read", false)
        .then(({ count }) => count),
    ]).then(([projects, messages, unread]) =>
      setStats({ projects, messages, unread })
    );
  }, []);

  const cards = [
    {
      label: "Projets",
      value: stats.projects,
      icon: FolderKanban,
      href: "#projects",
    },
    {
      label: "Messages",
      value: stats.messages,
      icon: Inbox,
      href: "#messages",
    },
    {
      label: "Non lus",
      value: stats.unread,
      icon: MailOpen,
      href: "#messages",
    },
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {cards.map(({ label, value, icon: Icon, href }) => (
        <a
          key={label}
          href={href}
          className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 flex items-center justify-between transition-transform duration-200 hover:-translate-y-1 hover:shadow-md"
        >
          <div>
            <p className="text-sm text-gray-500 font-medium">{label}</p>
            <p className="text-4xl font-bold text-gray-800 mt-1">
              {value ?? "–"}
            </p>
          </div>
          <div className="bg-gray-100 rounded-full p-3 text-gray-600">
            <Icon size={22} />
          </div>
        </a>
      ))}
    </div>
  );
}
