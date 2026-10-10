import { ReactNode } from "react";

export function Card({ title, description, tag, icon }: { title: string; description: string; tag?: string; icon: ReactNode }) {
  return (
    <article className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-indigo-50 text-xl">{icon}</div>
      <div className="flex items-center gap-2">
        <h3 className="font-semibold text-slate-900">{title}</h3>
        {tag && <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700">{tag}</span>}
      </div>
      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
      <a href="#" className="mt-4 inline-block text-sm font-medium text-indigo-600 group-hover:underline">Learn more →</a>
    </article>
  );
}
