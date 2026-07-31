import supabase from "./supabaseClient";

export const uploadFile = async (file, path) => {
  const { data, error } = await supabase.storage
    .from("uploads")
    .upload(path, file);

  if (error) throw error;
  return data;
};

export const getPublicUrl = (path) => {
  const { data } = supabase.storage.from("uploads").getPublicUrl(path);

  return data.publicUrl;
};