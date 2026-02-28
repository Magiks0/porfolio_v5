import { Linkedin, Mail } from "lucide-react";

export default function Contact(){
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

          {/* Contact Form */}
          <form className="bg-white/70 backdrop-blur-md p-10 rounded-2xl shadow-lg flex flex-col gap-6"></form>
        </div>
      </section>
    );
}