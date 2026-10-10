import { Button } from "./Button";

const plans = [
  { name: "Starter", price: "₹0", desc: "For trying things out.", features: ["1 project", "Basic components", "Community support"] },
  { name: "Pro", price: "₹499", desc: "For freelancers and small teams.", features: ["Unlimited projects", "All components", "Dark mode", "Email support"], featured: true },
  { name: "Team", price: "₹1,499", desc: "For growing teams.", features: ["Everything in Pro", "5 seats", "Priority support"] },
];

export function Pricing() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {plans.map((p) => (
        <div key={p.name} className={`relative rounded-2xl border p-8 ${p.featured ? "border-indigo-600 bg-indigo-600 text-white shadow-xl" : "border-slate-200 bg-white"}`}>
          {p.featured && <span className="absolute -top-3 left-8 rounded-full bg-amber-400 px-3 py-0.5 text-xs font-semibold text-slate-900">Most popular</span>}
          <h3 className="font-semibold">{p.name}</h3>
          <p className={`mt-1 text-sm ${p.featured ? "text-indigo-100" : "text-slate-500"}`}>{p.desc}</p>
          <p className="mt-6 text-4xl font-bold">{p.price}<span className="text-base font-normal opacity-70">/mo</span></p>
          <ul className="mt-6 space-y-2 text-sm">
            {p.features.map((f) => (<li key={f} className="flex gap-2"><span>✓</span>{f}</li>))}
          </ul>
          <Button variant={p.featured ? "secondary" : "outline"} className="mt-8 w-full">Choose {p.name}</Button>
        </div>
      ))}
    </div>
  );
}
