import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { ContactForm } from "@/components/ContactForm";
import { Navbar } from "@/components/Navbar";
import { Pricing } from "@/components/Pricing";

function Section({ id, title, subtitle, children }: { id: string; title: string; subtitle: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl scroll-mt-20 px-6 py-16">
      <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
      <p className="mt-1 mb-8 text-slate-600">{subtitle}</p>
      {children}
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <div className="bg-gradient-to-b from-indigo-50 to-white">
          <div className="mx-auto max-w-6xl px-6 py-20 text-center">
            <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-indigo-700 shadow-sm">Next.js · TypeScript · Tailwind</span>
            <h1 className="mx-auto mt-6 max-w-2xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">A small gallery of clean, reusable UI components</h1>
            <p className="mx-auto mt-4 max-w-xl text-slate-600">Buttons, cards, pricing, navigation and forms — built to be copied into real projects.</p>
            <div className="mt-8 flex justify-center gap-3"><Button size="lg">Browse components</Button><Button size="lg" variant="outline">View source</Button></div>
          </div>
        </div>
        <Section id="buttons" title="Buttons" subtitle="Five variants and three sizes.">
          <div className="flex flex-wrap items-center gap-3">
            <Button>Primary</Button><Button variant="secondary">Secondary</Button><Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button><Button variant="danger">Delete</Button><Button disabled>Disabled</Button>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-3"><Button size="sm">Small</Button><Button size="md">Medium</Button><Button size="lg">Large</Button></div>
        </Section>
        <Section id="cards" title="Cards" subtitle="Feature cards with a subtle hover lift.">
          <div className="grid gap-6 md:grid-cols-3">
            <Card icon="⚡" title="Fast by default" tag="New" description="Static rendering and tiny bundles keep pages snappy on any connection." />
            <Card icon="🎨" title="Easy to theme" description="Every style is a Tailwind class, so changing colours takes seconds." />
            <Card icon="📱" title="Responsive" description="Layouts adapt from small phones up to wide desktop screens." />
          </div>
        </Section>
        <Section id="pricing" title="Pricing table" subtitle="Three tiers with a highlighted plan."><Pricing /></Section>
        <Section id="form" title="Form" subtitle="Contact form with simple client-side validation."><div className="max-w-2xl"><ContactForm /></div></Section>
      </main>
      <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-500">Built by Navpreet Singh</footer>
    </>
  );
}
