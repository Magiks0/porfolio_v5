import { useState, type FormEvent } from "react";
import { Linkedin, Mail, Send } from "lucide-react";
import supabase from "../../../../services/supabaseClient";

export default function Contact() {
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    setStatus("sending");

    const { error } = await supabase
      .from("contacts")
      .insert({ id: crypto.randomUUID(), subject, email, content });

    if (error) {
      setStatus("error");
      return;
    }

    setSubject("");
    setEmail("");
    setContent("");
  }

  const inputClass =
    "rounded-lg border border-gray-300 px-4 py-3 bg-white focus:outline-none focus:border-gray-500";

  return (
    <section
      id="contact"
      className="flex justify-center items-center py-24 px-5"
    >
      <div className="grid max-w-275 w-full gap-20 grid-cols-1 lg:grid-cols-[1fr_1.2fr]">
        <div className="flex flex-col gap-6 text-gray-800">
          <h2 className="text-4xl font-semibold">À votre écoute</h2>
          <p className="text-gray-600 leading-relaxed">
            Je suis disponible pour écouter vos idées et vous accompagner dans
            leur réalisation, que ce soit en développement web ou en
            modélisation 3D. N’hésitez pas à me contacter pour en discuter.
          </p>
          <div className="flex flex-col gap-4">
            <a
              href="mailto:lucas.dupas.pro@email.com"
              className="flex items-center gap-2 text-gray-800 hover:underline"
            >
              <Mail /> Email
            </a>
            <a
              href="https://linkedin.com/in/lucasdupas"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-800 hover:underline"
            >
              <Linkedin /> LinkedIn
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white/70 backdrop-blur-md p-10 rounded-2xl shadow-lg flex flex-col gap-5"
        >
          <label className="flex flex-col gap-1.5 text-sm font-medium text-gray-700">
            Nom
            <input
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className={inputClass}
            />
          </label>

          <label className="flex flex-col gap-1.5 text-sm font-medium text-gray-700">
            Email
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputClass}
            />
          </label>

          <label className="flex flex-col gap-1.5 text-sm font-medium text-gray-700">
            Message
            <textarea
              required
              rows={5}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className={inputClass}
            />
          </label>

          {status === "sent" && (
            <p className="text-sm text-green-700">
              Merci ! Votre message a bien été envoyé.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-600">
              Une erreur est survenue. Veuillez réessayer.
            </p>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex justify-center items-center gap-2 rounded-full bg-[#2C2C2C] text-white font-semibold px-6 py-3 transition-colors hover:bg-black disabled:opacity-50"
          >
            <Send size={16} />
            {status === "sending" ? "Envoi..." : "Envoyer"}
          </button>
        </form>
      </div>
    </section>
  );
}
