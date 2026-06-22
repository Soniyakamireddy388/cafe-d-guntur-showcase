import interior from "@/assets/cafe/interior-dining.jpg";

const features = [
  { title: "Quality Food", desc: "Handcrafted recipes from our chef's heart." },
  { title: "Comfortable Ambience", desc: "Cozy seating, warm lighting, your second home." },
  { title: "Fresh Ingredients", desc: "Sourced daily — never compromised on taste." },
  { title: "Great Hospitality", desc: "Every guest treated like family." },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="container mx-auto grid gap-14 px-6 lg:grid-cols-2 lg:items-center">
        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
            <img src={interior} alt="Café D interior" className="aspect-[3/4] w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden rounded-2xl border border-white/10 bg-surface px-6 py-4 shadow-gold sm:block">
            <p className="font-display text-3xl text-gradient-gold">100+</p>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Signature dishes</p>
          </div>
        </div>

        <div>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-gold">About Us</p>
          <h2 className="font-display text-4xl font-bold leading-tight sm:text-5xl">
            A cozy modern cafe where every visit feels <span className="text-gradient-gold">special</span>.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Café D — Guntur is a cozy modern cafe offering delicious food, freshly brewed beverages,
            burgers, pizzas, pasta, fried chicken, desserts and quick bites. A perfect place for
            friends, families and food lovers.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {features.map((f) => (
              <div
                key={f.title}
                className="group rounded-2xl border border-white/10 bg-surface p-5 transition hover:-translate-y-1 hover:border-[color:var(--gold)]/40 hover:bg-surface-2"
              >
                <div className="mb-3 h-px w-10 gradient-gold transition-all group-hover:w-16" />
                <h3 className="font-display text-lg font-semibold">{f.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
