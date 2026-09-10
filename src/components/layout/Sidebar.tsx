import { Github, Linkedin, Mail } from "lucide-react";
import ThemeToggle from "../ui/ThemeToggle";

const QUICK_NAV = [
  { index: "01.", label: "Projets", href: "#projets" },
  { index: "02.", label: "Compétences", href: "#competences" },
  { index: "03.", label: "Formation", href: "#formation" },
  { index: "04.", label: "Contact", href: "#contact" },
];

export default function Sidebar({ className = "" }: { className?: string }) {
  return (
    <aside
      id="top"
      className={`relative overflow-hidden px-6 py-10 sm:px-10 lg:px-14 ${className}`}
    >
      <div className="mx-auto flex max-w-130 flex-col gap-10 lg:h-full lg:justify-center">
        <div className="flex items-center justify-between font-semibold text-xl tracking-wide text-ink uppercase dark:text-dark-ink">
          <a href="#top">LD</a>
          <ThemeToggle />
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-4xl nowrap font-bold leading-[0.92] text-ink uppercase dark:text-dark-ink">
            Développeur Full-Stack
          </h1>
          <p className="text-[0.95rem] leading-relaxed text-ink-muted dark:text-dark-ink-muted">
            En 5e année de Mastère Ingénierie du Web à l'ESGI, je conçois des
            applications web complètes, de l'architecture back-end à
            l'expérience front-end, avec une spécialisation sur l'écosystème
            Symfony et React.
          </p>
        </div>

        <div className="relative mx-auto flex h-90 w-full items-center justify-center">
          <div className="size-72 rounded-4xl -rotate-15 border-4 border-white/40 shadow-xl bg-white/30">
            <div className="absolute bottom-0 w-full h-[200%] rounded-4xl overflow-hidden flex items-end">
              <img
                src="/assets/profile_picture.png"
                alt="profil_picture"
                className="h-1/2 object-cover scale-[1.4] rotate-15 brightness-125 contrast-110"
              />
            </div>
          </div>
          <div className="absolute w-56 h-20 rounded-[20px] rotate-10 translate-x-8 translate-y-16 border border-white/40 shadow-xl bg-white/50 backdrop-blur-lg flex items-center px-8">
            <ul className="flex justify-between items-center w-full text-[#3a3a3a]">
              <li>
                <a
                  href="https://www.linkedin.com/in/lucas-dupas-1b122b260/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-150 hover:bg-[#595959] hover:text-white"
                >
                  <Linkedin size={18} />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Magiks0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-150 hover:bg-[#595959] hover:text-white"
                >
                  <Github size={18} />
                </a>
              </li>
              <li>
                <a
                  href="mailto:dupaslucas8@gmail.com"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-150 hover:bg-[#595959] hover:text-white"
                >
                  <Mail size={18} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#projets"
              className="px-7 py-3.5 rounded-full font-semibold text-sm text-white bg-ink transition-all duration-300 hover:bg-black hover:-translate-y-1 hover:shadow-lg dark:bg-dark-ink dark:text-ink dark:hover:bg-white/85"
            >
              Voir mes projets
            </a>
            <a
              href="https://epsnutoxnccwpmyjohms.supabase.co/storage/v1/object/public/uploads/documents/cv_lucas_dupas.pdf"
              target="_blank"
              download
              className="px-7 py-3.5 rounded-full font-semibold text-sm text-ink shadow-[inset_0_0_0_1px_#ccc] transition-all duration-300 hover:bg-black/5 hover:-translate-y-1 dark:text-dark-ink dark:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)] dark:hover:bg-white/5"
            >
              Télécharger mon CV
            </a>
          </div>

          <nav aria-label="Navigation rapide">
            <ul className="grid grid-cols-2 xl:flex lg:justify-between gap-4">
              {QUICK_NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="flex gap-1 text-ink-muted transition-colors hover:text-ink dark:text-dark-ink-muted dark:hover:text-dark-ink"
                  >
                    <span className="text-[0.7rem] font-semibold tracking-widest">
                      {item.index}
                    </span>
                    <span className="text-[0.72rem] font-bold uppercase tracking-widest">
                      {item.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </aside>
  );
}
