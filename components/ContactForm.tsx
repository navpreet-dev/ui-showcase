"use client";
import { FormEvent, useState } from "react";
import { Button } from "./Button";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = String(data.get("email") || "");
    if (!/^\S+@\S+\.\S+$/.test(email)) return setError("Please enter a valid email.");
    setError("");
    setSent(true);
  }

  const input = "mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100";

  if (sent) return <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-emerald-800">Thanks! Your message has been received (demo only).</div>;

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-slate-700">Name<input name="name" className={input} placeholder="Your name" /></label>
        <label className="block text-sm font-medium text-slate-700">Email<input name="email" type="email" className={input} placeholder="you@example.com" /></label>
      </div>
      <label className="block text-sm font-medium text-slate-700">Topic
        <select name="topic" className={input}><option>Website</option><option>App</option><option>Design</option></select>
      </label>
      <label className="block text-sm font-medium text-slate-700">Message<textarea name="message" rows={4} className={input} placeholder="Tell me a bit about it..." /></label>
      {error && <p className="text-sm text-rose-600">{error}</p>}
      <label className="flex items-center gap-2 text-sm text-slate-600"><input type="checkbox" className="accent-indigo-600" /> Send me a copy</label>
      <Button type="submit" className="w-full">Send message</Button>
    </form>
  );
}
