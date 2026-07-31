import { useEffect, useState, type FormEvent } from "react";
import { Pencil, Plus, Trash2, X } from "lucide-react";
import supabase from "../../../services/supabaseClient";
import type { Project } from "../../sections/projects/types";
import { uploadFile, getPublicUrl } from "../../../services/storage";


interface ProjectForm {
  title: string;
  slug: string;
  description: string;
  category: string;
  github_link: string;
  preview_link: string;
  files?: File[];
}

const EMPTY_FORM: ProjectForm = {
  title: "",
  slug: "",
  description: "",
  category: "",
  github_link: "",
  preview_link: "",
  files: [],
};

export default function ProjectsManager() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<ProjectForm>(EMPTY_FORM);

  async function fetchProjects() {
    const { data, error } = await supabase
      .from("projects")
      .select("*, files (id, size, mime_type, url)")
      .order("created_at", { ascending: false });
    if (error) setError(error.message);
    else setProjects(data ?? []);
    setLoading(false);
  }

  useEffect(() => {
    fetchProjects();
  }, []);

  function setField<K extends keyof ProjectForm>(key: K, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function startCreate() {
    setEditingId(null);
    setForm(EMPTY_FORM);
    setShowForm(true);
  }

  function startEdit(project: Project) {
    setEditingId(project.id);
    setForm({
      title: project.title,
      slug: project.slug,
      description: project.description,
      category: project.category ?? "",
      github_link: project.github_link ?? "",
      preview_link: project.preview_link ?? "",
      files: [...project.files],
    });
    setShowForm(true);
  }

  function cancelEdit() {
    setEditingId(null);
    setForm(EMPTY_FORM);
    setShowForm(false);
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setSaving(true);
    setError(null);

    const payload = {
      title: form.title,
      slug: form.slug,
      description: form.description,
      category: form.category || null,
      github_link: form.github_link || null,
      preview_link: form.preview_link || null,
    };

    const result = editingId
      ? await supabase
          .from("projects")
          .update(payload)
          .eq("id", editingId)
          .select()
          .single()
      : await supabase.from("projects").insert(payload).select().single();
    
      const savedProject = result.data;

    if (form.files) {
      form.files.forEach(async (file) => { 
        const filePath = `projects/${Date.now()}/${crypto.randomUUID()}`;
        await uploadFile(file, filePath);
        const publicUrl = getPublicUrl(filePath);
        const { error: fileError } = await supabase.from("files").insert({
          size: file.size,
          mime_type: file.type,
          url: publicUrl,
          project_id: savedProject.id,
        });

        if (fileError) {
          console.error("Erreur d'insertion du fichier :", fileError.message);
        }
      });
    }

    setSaving(false);
    if (result.error) {
      setError(result.error.message);
      return;
    }
    cancelEdit();
    fetchProjects();
  }

  async function handleDelete(project: Project) {
    if (!window.confirm(`Supprimer le projet "${project.title}" ?`)) return;
    const { error } = await supabase
      .from("projects")
      .delete()
      .eq("id", project.id);
    if (error) {
      setError(error.message);
      return;
    }
    fetchProjects();
  }

  function formatDate(iso: string) {
    return new Date(iso).toLocaleDateString("fr-FR");
  }

  const inputClass =
    "rounded-lg border border-gray-300 px-3 py-2.5 focus:outline-none focus:border-gray-500";

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">Projets</h2>
        <button
          onClick={startCreate}
          className="inline-flex items-center gap-2 rounded-full bg-[#2C2C2C] text-white font-semibold px-5 py-2.5 text-sm transition-colors hover:bg-black"
        >
          <Plus size={16} /> Nouveau projet
        </button>
      </div>

      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 flex flex-col gap-4"
        >
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-gray-800">
              {editingId ? "Modifier le projet" : "Nouveau projet"}
            </h3>
            <button
              type="button"
              onClick={cancelEdit}
              className="text-gray-400 hover:text-gray-700"
            >
              <X size={18} />
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-1 text-sm font-medium text-gray-700">
              Titre
              <input
                required
                value={form.title}
                onChange={(e) => setField("title", e.target.value)}
                className={inputClass}
              />
            </label>
            <label className="flex flex-col gap-1 text-sm font-medium text-gray-700">
              Slug (URL)
              <input
                required
                value={form.slug}
                onChange={(e) => setField("slug", e.target.value)}
                className={inputClass}
                placeholder="mon-projet"
              />
            </label>
            <label className="flex flex-col gap-1 text-sm font-medium text-gray-700 sm:col-span-2">
              Description
              <textarea
                rows={4}
                required
                value={form.description}
                onChange={(e) => setField("description", e.target.value)}
                className={inputClass}
              />
            </label>
            <label className="flex flex-col gap-1 text-sm font-medium text-gray-700">
              Catégorie
              <input
                value={form.category}
                onChange={(e) => setField("category", e.target.value)}
                className={inputClass}
                placeholder="personal / work / 3d"
                list="category-options"
              />
              <datalist id="category-options">
                <option value="personal" />
                <option value="work" />
                <option value="3d" />
              </datalist>
            </label>
            <label className="flex flex-col gap-1 text-sm font-medium text-gray-700">
              Lien GitHub
              <input
                value={form.github_link}
                onChange={(e) => setField("github_link", e.target.value)}
                className={inputClass}
                placeholder="https://github.com/..."
              />
            </label>
            <label className="flex flex-col gap-1 text-sm font-medium text-gray-700 sm:col-span-2">
              Lien de démo
              <input
                value={form.preview_link}
                onChange={(e) => setField("preview_link", e.target.value)}
                className={inputClass}
                placeholder="https://..."
              />
            </label>
            <label className="flex flex-col gap-1 text-sm font-medium text-gray-700 sm:col-span-2">
              Images
              <input
                type="file"
                onChange={(e) =>
                  setField("files", Array.from(e.target.files || []))
                }
                className={inputClass}
                multiple
              />
            </label>

            {form.files && (
              <ul className="mt-2">
                {form.files.map((file) => (
                  <li key={file.id} className="flex justify-between">
                    <img
                      src={file.url}
                      className="w-16 h-16 object-cover rounded"
                    />
                  </li>
                ))}
              </ul>
            )}
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <div className="flex gap-3 justify-end">
            <button
              type="button"
              onClick={cancelEdit}
              className="rounded-full border border-gray-300 text-gray-700 font-semibold px-5 py-2.5 text-sm hover:bg-gray-100"
            >
              Annuler
            </button>
            <button
              type="submit"
              disabled={saving}
              className="rounded-full bg-[#2C2C2C] text-white font-semibold px-5 py-2.5 text-sm hover:bg-black disabled:opacity-50"
            >
              {saving ? "Enregistrement..." : "Enregistrer"}
            </button>
          </div>
        </form>
      )}

      {loading ? (
        <p className="text-gray-500">Chargement...</p>
      ) : error && projects.length === 0 ? (
        <p className="text-red-600">{error}</p>
      ) : projects.length === 0 ? (
        <p className="text-gray-500">Aucun projet pour le moment.</p>
      ) : (
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-gray-200 text-gray-500">
              <tr>
                <th className="px-5 py-3 font-medium">Titre</th>
                <th className="px-5 py-3 font-medium">Catégorie</th>
                <th className="px-5 py-3 font-medium">Créé le</th>
                <th className="px-5 py-3 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {projects.map((project) => (
                <tr key={project.id} className="hover:bg-gray-50">
                  <td className="px-5 py-3">
                    <p className="font-semibold text-gray-800">
                      {project.title}
                    </p>
                    <p className="text-gray-400 text-xs">/{project.slug}</p>
                  </td>
                  <td className="px-5 py-3">
                    <span className="inline-block rounded-full bg-gray-100 text-gray-700 px-3 py-1 text-xs font-medium">
                      {project.category ?? "—"}
                    </span>
                  </td>
                  <td className="px-5 py-3 text-gray-600">
                    {formatDate(project.created_at)}
                  </td>
                  <td className="px-5 py-3">
                    <div className="flex justify-end gap-2">
                      <button
                        onClick={() => startEdit(project)}
                        className="rounded-full p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                        aria-label="Modifier"
                      >
                        <Pencil size={16} />
                      </button>
                      <button
                        onClick={() => handleDelete(project)}
                        className="rounded-full p-2 text-gray-500 hover:bg-red-50 hover:text-red-600"
                        aria-label="Supprimer"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
