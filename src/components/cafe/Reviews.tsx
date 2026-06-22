const reviews = [
  { text: "Great ambience and tasty food. Perfect place to hangout with friends.", name: "Pranay K." },
  { text: "Coffee and burgers were amazing. Loved the experience.", name: "Sneha R." },
  { text: "Affordable prices with good quality food.", name: "Vamsi T." },
  { text: "The brownie with ice cream is a must-try. Cozy interiors too!", name: "Lakshmi P." },
  { text: "Best fried chicken in Guntur, hands down.", name: "Arjun M." },
];

function Stars() {
  return (
    <div className="flex gap-0.5 text-gold">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
  );
}

export function Reviews() {
  const doubled = [...reviews, ...reviews];
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container mx-auto px-6 text-center">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.4em] text-gold">Reviews</p>
        <h2 className="font-display text-4xl font-bold sm:text-5xl">
          Loved by <span className="text-gradient-gold">Guntur</span>
        </h2>
      </div>

      <div className="relative mt-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="animate-marquee flex w-max gap-5">
          {doubled.map((r, i) => (
            <article
              key={i}
              className="w-[340px] shrink-0 rounded-2xl border border-white/10 bg-surface p-6 sm:w-[420px]"
            >
              <Stars />
              <p className="mt-4 text-sm leading-relaxed text-foreground/90">"{r.text}"</p>
              <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">— {r.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
