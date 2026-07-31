import { useState, type FormEvent } from "react";
import { useAuth } from "./AuthContext";

export default function LoginForm() {
  const { signIn, signUp } = useAuth();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setError(null);
    setLoading(true);

    const result =
      mode === "signin"
        ? await signIn(email, password)
        : await signUp(email, password);

    if (result) {
      setError(result);
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#DBDBD5] px-5">
      <div className="w-full max-w-md bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-10 flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-semibold text-gray-800">Administration</h1>
          <p className="text-gray-500 mt-1">
            Connectez-vous pour accéder au tableau de bord
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label className="flex flex-col gap-1 text-sm font-medium text-gray-700">
            Email
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-lg border border-gray-300 px-3 py-2.5 focus:outline-none focus:border-gray-500"
            />
          </label>

          <label className="flex flex-col gap-1 text-sm font-medium text-gray-700">
            Mot de passe
            <input
              type="password"
              required
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="rounded-lg border border-gray-300 px-3 py-2.5 focus:outline-none focus:border-gray-500"
            />
          </label>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="mt-2 rounded-full bg-[#2C2C2C] text-white font-semibold py-3 transition-colors hover:bg-black disabled:opacity-50"
          >
            {loading
              ? "Chargement..."
              : mode === "signin"
                ? "Se connecter"
                : "Créer un compte"}
          </button>
        </form>

        <p className="text-sm text-gray-600 text-center">
          {mode === "signin" ? "Pas encore de compte ?" : "Déjà un compte ?"}{" "}
          <button
            type="button"
            onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
            className="font-semibold text-gray-800 underline hover:text-black"
          >
            {mode === "signin" ? "Créer un compte" : "Se connecter"}
          </button>
        </p>

        {mode === "signup" && (
          <p className="text-xs text-gray-500 text-center">
            Si la confirmation par email est activée, vérifiez votre boîte de
            réception avant de vous connecter.
          </p>
        )}
      </div>
    </div>
  );
}
