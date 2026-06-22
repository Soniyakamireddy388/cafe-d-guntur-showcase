const offers = [
  {
    tag: "Student Perks",
    title: "10% off with student ID",
    desc: "Show your valid student ID at the counter and enjoy a flat 10% discount on the entire bill.",
  },
  {
    tag: "Weekend Combos",
    title: "Pizza + Garlic Bread + Ice Tea",
    desc: "Every Saturday & Sunday — our signature combos starting at just ₹399. Made for sharing.",
  },
  {
    tag: "Birthday Specials",
    title: "Complimentary brownie & coffee",
    desc: "Celebrating your birthday with us? A sizzling brownie and hot coffee — on the house.",
  },
];

export function Offers() {
  return (
    <section id="offers" className="relative py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.4em] text-gold">Offers</p>
          <h2 className="font-display text-4xl font-bold sm:text-5xl">
            Little things, <span className="text-gradient-gold">big smiles</span>
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {offers.map((o) => (
            <article
              key={o.tag}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-surface p-7 transition hover:-translate-y-2 hover:border-[color:var(--gold)]/40"
            >
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[color:var(--gold)]/10 blur-3xl transition group-hover:bg-[color:var(--gold)]/20" />
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold">{o.tag}</p>
              <h3 className="mt-4 font-display text-2xl font-semibold">{o.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{o.desc}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm text-gold transition group-hover:gap-3">
                Claim in-store <span>→</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
