import exterior from "@/assets/cafe/exterior-front.jpg";
import exteriorNight from "@/assets/cafe/exterior-night.jpg";
import mural from "@/assets/cafe/interior-mural.jpg";
import dining from "@/assets/cafe/interior-dining.jpg";

const items = [
  { src: exterior, label: "Café D Storefront", span: "row-span-2" },
  { src: dining, label: "Dining Lounge", span: "" },
  { src: mural, label: "Pure Coffee Corner", span: "row-span-2" },
  { src: exteriorNight, label: "Evening Vibes", span: "" },
];

export function Gallery() {
  return (
    <section id="gallery" className="relative py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.4em] text-gold">Gallery</p>
          <h2 className="font-display text-4xl font-bold sm:text-5xl">
            Step <span className="text-gradient-gold">inside</span>
          </h2>
          <p className="mt-4 text-muted-foreground">A peek into our world of warmth, aroma & flavour.</p>
        </div>

        <div className="grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] sm:grid-cols-4 sm:gap-4">
          {items.map((it, i) => (
            <figure
              key={i}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 ${it.span}`}
            >
              <img
                src={it.src}
                alt={it.label}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
              <figcaption className="absolute inset-x-0 bottom-0 p-4">
                <p className="font-display text-sm font-semibold text-foreground sm:text-base">{it.label}</p>
                <p className="text-[10px] uppercase tracking-widest text-gold">@cafed_guntur</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
