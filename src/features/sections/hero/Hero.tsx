import { Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="flex items-center justify-center min-h-screen px-5 py-16 overflow-hidden">
      <div className="flex flex-col-reverse items-center w-full max-w-300 gap-16 lg:flex-row ">
        <div className="flex flex-col gap-6 lg:items-start items-center text-center lg:text-left w-1/2">
          <h1 className="text-[clamp(2.5rem,5vw,3.5rem)] font-semibold leading-tight text-[#2C2C2C]">
            Code & création,
            <span className="bg-linear-to-r from-[#3a3a3a] to-[#5a5a5a] bg-clip-text text-transparent">
              {" "}
              développement web et impression 3D.
            </span>
          </h1>

          <p className="text-[1.1rem] leading-relaxed text-[#5a5a5a] max-w-125">
            Je suis Lucas Dupas, un créateur numérique polyvalent : développeur
            web junior de formation, passionné par l’impression 3D. J’aime
            construire des solutions — qu’elles soient interactives ou
            tangibles.
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
            <a
              href="#projets"
              className="px-7 py-3.5 rounded-full font-medium bg-[#2C2C2C] text-white transition-all duration-300 hover:bg-black hover:-translate-y-1 hover:shadow-lg w-full lg:w-auto"
            >
              Voir mes projets
            </a>

            <a
              href="https://epsnutoxnccwpmyjohms.supabase.co/storage/v1/object/public/uploads/documents/cv_lucas_dupas.pdf"
              target="_blank"
              download
              className="px-7 py-3.5 rounded-full font-medium text-[#2C2C2C] shadow-[inset_0_0_0_1px_#ccc] transition-all duration-300 hover:bg-[#e9e9e9] hover:shadow-[inset_0_0_0_1px_#e9e9e9] hover:-translate-y-1 w-full lg:w-auto"
            >
              Télécharger mon CV
            </a>
          </div>
        </div>

        <div className="relative flex items-center justify-center h-100 mt-12 lg:mt-0 w-1/2">
          <div className="size-90 rounded-4xl -rotate-15 border-4 border-white/40 shadow-xl bg-white/30">
            <div className="absolute bottom-0 w-full h-[200%] rounded-4xl overflow-hidden flex items-end">
              <img
                src="/assets/profile_picture.png"
                alt="profil_picture"
                className="h-1/2 object-cover scale-[1.4] rotate-15 brightness-125 contrast-110"
              />
            </div>
          </div>
          <div className="absolute w-62.5 h-20 rounded-[20px] rotate-10 translate-x-10 translate-y-20 border border-white/40 shadow-xl bg-white/50 backdrop-blur-lg flex items-center px-8">
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
      </div>
    </section>
  );
}
