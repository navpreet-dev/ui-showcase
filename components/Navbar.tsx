"use client";
import { useState } from "react";
import { Button } from "./Button";

const links = ["Buttons", "Cards", "Pricing", "Form"];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2 font-semibold text-slate-900">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-indigo-600 text-white">UI</span>
          UI Showcase
        </a>
        <ul className="hidden gap-8 text-sm text-slate-600 md:flex">
          {links.map((l) => (
            <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-slate-900">{l}</a></li>
          ))}
        </ul>
        <div className="hidden md:block"><Button size="sm">Get started</Button></div>
        <button aria-label="Toggle menu" className="md:hidden rounded p-2 hover:bg-slate-100" onClick={() => setOpen(!open)}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><path d="M3 5h14v2H3zM3 9h14v2H3zM3 13h14v2H3z" /></svg>
        </button>
      </nav>
      {open && (
        <ul className="border-t border-slate-200 px-6 py-3 md:hidden">
          {links.map((l) => (
            <li key={l}><a href={`#${l.toLowerCase()}`} className="block py-2 text-slate-700" onClick={() => setOpen(false)}>{l}</a></li>
          ))}
        </ul>
      )}
    </header>
  );
}
