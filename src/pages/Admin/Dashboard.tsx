import { useState } from "react";
import { LayoutDashboard, FolderKanban, Inbox, LogOut } from "lucide-react";
import { useAuth } from "../../features/auth/AuthContext";
import LoginForm from "../../features/auth/LoginForm";
import Overview from "../../features/admin/components/Overview";
import ProjectsManager from "../../features/admin/components/ProjectsManager";
import MessagesManager from "../../features/admin/components/MessagesManager";

type Tab = "overview" | "projects" | "messages";

const TABS: { id: Tab; label: string; icon: typeof LayoutDashboard }[] = [
  { id: "overview", label: "Vue d'ensemble", icon: LayoutDashboard },
  { id: "projects", label: "Projets", icon: FolderKanban },
  { id: "messages", label: "Messages", icon: Inbox },
];

export default function Dashboard() {
  const { session, loading, signOut } = useAuth();
  const [tab, setTab] = useState<Tab>("overview");

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#DBDBD5]">
        <p className="text-gray-500">Chargement...</p>
      </div>
    );
  }

  if (!session) {
    return <LoginForm />;
  }

  return (
    <div className="min-h-screen bg-[#DBDBD5]">
      <header className="bg-white/70 backdrop-blur-md border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-5 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-lg font-bold text-gray-800">Administration</h1>
            <p className="text-xs text-gray-500">{session.user.email}</p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="/"
              className="rounded-full border border-gray-300 text-gray-700 text-sm font-semibold px-4 py-2 hover:bg-gray-100"
            >
              Voir le site
            </a>
            <button
              onClick={signOut}
              className="inline-flex items-center gap-2 rounded-full bg-[#2C2C2C] text-white text-sm font-semibold px-4 py-2 hover:bg-black"
            >
              <LogOut size={15} /> Déconnexion
            </button>
          </div>
        </div>

        <nav className="max-w-6xl mx-auto px-5 flex gap-1 pb-3">
          {TABS.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setTab(id)}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                tab === id
                  ? "bg-gray-800 text-white"
                  : "text-gray-600 hover:bg-gray-200/60"
              }`}
            >
              <Icon size={15} /> {label}
            </button>
          ))}
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-5 py-8" id={tab === "projects" ? "projects" : "messages"}>
        {tab === "overview" && <Overview />}
        {tab === "projects" && <ProjectsManager />}
        {tab === "messages" && <MessagesManager />}
      </main>
    </div>
  );
}
