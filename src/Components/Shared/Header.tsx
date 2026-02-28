import { useNavigate } from "react-router";
import Button from "./Button";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="fixed left-1/2 transform -translate-x-1/2 p-5 w-full z-100">
      <nav className="justify-between items-center px-6 py-3 bg-white/60 backdrop-blur-lg border border-white/20 rounded-full shadow-md hidden md:flex">
        <a
          href="/"
          className="font-semibold text-[1.4rem] text-[#2C2C2C] transition-transform duration-300 hover:scale-105"
        >
          LD
        </a>
        <ul className="flex list-none gap-8">
          {["Projets", "À propos", "Compétences"].map((item) => (
            <li key={item} className="relative group">
              <a
                href={`#${item}`}
                className="font-semibold text-[0.95rem] text-[#3a3a3a] relative px-1 py-1 transition-colors duration-300 hover:text-black"
              >
                {item}
                <span className="absolute left-1/2 bottom-0 w-0 h-[1.5px] bg-[#2C2C2C] transition-all duration-300 group-hover:w-full -translate-x-1/2 transform"></span>
              </a>
            </li>
          ))}
        </ul>

        <Button text="Contact" action={() => navigate("/#contact")} />
      </nav>
    </header>
  );
}
