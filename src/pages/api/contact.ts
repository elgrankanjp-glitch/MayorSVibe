import type { NextApiRequest, NextApiResponse } from "next";
import { getSupabaseServerClient } from "@/lib/supabaseServer";

type ContactEntry = {
  id: string;
  name: string;
  email: string;
  focus: string;
  message: string;
  createdAt: string;
};

const entries: ContactEntry[] = [];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ ok: false, error: "Method not allowed" });
    return;
  }

  const { name, email, focus, message } = req.body ?? {};

  if (!name || !email || !message) {
    res.status(400).json({ ok: false, error: "Faltan campos obligatorios." });
    return;
  }

  const entry: ContactEntry = {
    id: Date.now().toString(),
    name: String(name),
    email: String(email),
    focus: String(focus ?? "general"),
    message: String(message),
    createdAt: new Date().toISOString(),
  };

  const supabase = getSupabaseServerClient();

  if (!supabase) {
    entries.unshift(entry);
    res.status(201).json({ ok: true, entry, storage: "memory" });
    return;
  }

  const { data, error } = await supabase
    .from("contact_leads")
    .insert({
      name: entry.name,
      email: entry.email,
      focus: entry.focus,
      message: entry.message,
      source: "website",
      created_at: entry.createdAt,
    })
    .select("id,name,email,focus,message,created_at")
    .single();

  if (error) {
    // Fallback keeps forms operational even if Supabase is temporarily unavailable.
    entries.unshift(entry);
    res.status(201).json({ ok: true, entry, storage: "memory" });
    return;
  }

  res.status(201).json({ ok: true, entry: data, storage: "supabase" });
}