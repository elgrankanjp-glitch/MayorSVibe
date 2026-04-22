import type { NextApiRequest, NextApiResponse } from "next";
import { getSupabaseServerClient } from "@/lib/supabaseServer";

const emails = new Set<string>();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ ok: false, error: "Method not allowed" });
    return;
  }

  const email = String(req.body?.email ?? "").trim().toLowerCase();

  if (!email || !email.includes("@")) {
    res.status(400).json({ ok: false, error: "Email no valido." });
    return;
  }

  const supabase = getSupabaseServerClient();

  if (supabase) {
    const { error } = await supabase.from("newsletter_subscribers").upsert(
      {
        email,
        source: "website",
        created_at: new Date().toISOString(),
      },
      { onConflict: "email" },
    );

    if (!error) {
      res.status(201).json({ ok: true, storage: "supabase" });
      return;
    }
  }

  emails.add(email);
  res.status(201).json({ ok: true, total: emails.size, storage: "memory" });
}