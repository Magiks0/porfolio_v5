import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../features/theme/useTheme";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Activer le mode clair" : "Activer le mode sombre"}
      title={isDark ? "Mode clair" : "Mode sombre"}
      className="flex size-10 items-center justify-center rounded-full border border-black/15 text-ink transition-colors duration-200 hover:bg-black/5"
    >
      {isDark ? <Sun size={17} className="text-white" /> : <Moon size={17} />}
    </button>
  );
}