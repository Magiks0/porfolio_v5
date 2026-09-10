import { useState, type FormEvent } from "react";
import { Github, Linkedin, Mail, Send } from "lucide-react";
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

    setStatus("sent");
    setSubject("");
    setEmail("");
    setContent("");
  }

  const inputClass =
    "rounded-lg border border-white/15 px-4 py-3 bg-white/5 text-white placeholder:text-white/30 focus:outline-none focus:border-white/40";

  return (
    <section id="contact" className="px-6 py-14 sm:px-10 lg:px-14">
      <div className="mx-auto max-w-330">
        <div className="rounded-3xl bg-ink px-6 py-14 sm:px-14 dark:bg-dark-card">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Un projet ou une opportunité ? Échangeons.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/60">
              Je suis disponible pour écouter vos idées et vous accompagner
              dans leur réalisation, du premier échange à la mise en
              production.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-10 flex max-w-xl flex-col gap-4"
          >
            <div className="flex flex-col gap-4 sm:flex-row">
              <label className="flex flex-1 flex-col gap-1.5 text-sm font-medium text-white/70">
                Nom
                <input
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className={inputClass}
                />
              </label>

              <label className="flex flex-1 flex-col gap-1.5 text-sm font-medium text-white/70">
                Email
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={inputClass}
                />
              </label>
            </div>

            <label className="flex flex-col gap-1.5 text-sm font-medium text-white/70">
              Message
              <textarea
                required
                rows={4}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className={inputClass}
              />
            </label>

            {status === "sent" && (
              <p className="text-sm text-green-400">
                Merci ! Votre message a bien été envoyé.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-400">
                Une erreur est survenue. Veuillez réessayer.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-ink transition-colors hover:bg-white/85 disabled:opacity-50"
            >
              <Send size={16} />
              {status === "sending" ? "Envoi..." : "Me contacter"}
            </button>
          </form>

          <ul className="mt-10 flex justify-center gap-4">
            <li>
              <a
                href="mailto:dupaslucas8@gmail.com"
                aria-label="Email"
                className="flex size-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-white/40 hover:text-white"
              >
                <Mail size={17} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/lucas-dupas-1b122b260/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex size-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-white/40 hover:text-white"
              >
                <Linkedin size={17} />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Magiks0"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex size-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-white/40 hover:text-white"
              >
                <Github size={17} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
