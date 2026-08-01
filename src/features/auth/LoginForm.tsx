import { useState, type FormEvent } from "react";
import { useAuth } from "./AuthContext";

export default function LoginForm() {
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setError(null);
    setLoading(true);

    const result = await signIn(email, password)

    if (result) {
      setError(result);
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary px-5">
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
            {loading && (
              <span className="animate-spin">🔄</span>
            )}
            {loading
              ? "Chargement..."
              : "Se connecter"
             }
          </button>
        </form>
      </div>
    </div>
  );
}
