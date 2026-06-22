import { useMemo, useState } from "react";
import { menu, type MenuItem } from "@/data/menu";

function VegDot({ type }: { type: MenuItem["type"] }) {
  const color = type === "veg" ? "var(--veg)" : "var(--nonveg)";
  return (
    <span
      aria-label={type}
      className="inline-grid h-4 w-4 shrink-0 place-items-center border"
      style={{ borderColor: color }}
    >
      <span className="h-2 w-2 rounded-full" style={{ backgroundColor: color }} />
    </span>
  );
}

export function Menu() {
  const [active, setActive] = useState<string>("all");
  const [filter, setFilter] = useState<"all" | "veg" | "nonveg">("all");

  const categories = useMemo(
    () => [{ id: "all", name: "All" }, ...menu.map((c) => ({ id: c.id, name: c.name }))],
    [],
  );

  const visible = useMemo(() => {
    return menu
      .filter((c) => active === "all" || c.id === active)
      .map((c) => ({
        ...c,
        items: c.items.filter((i) => filter === "all" || i.type === filter),
      }))
      .filter((c) => c.items.length > 0);
  }, [active, filter]);

  return (
    <section id="menu" className="relative py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.4em] text-gold">Digital Menu</p>
          <h2 className="font-display text-4xl font-bold sm:text-5xl">
            Crafted with love, <span className="text-gradient-gold">served fresh</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            From single-origin espresso to wood-fired pizzas — discover your new favourite.
          </p>
        </div>

        <div className="mb-6 flex flex-wrap items-center justify-center gap-2">
          <button
            onClick={() => setFilter("all")}
            className={`rounded-full border px-4 py-1.5 text-xs font-medium transition ${
              filter === "all" ? "border-white/30 bg-white/10" : "border-white/10 text-muted-foreground hover:bg-white/5"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("veg")}
            className={`flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium transition ${
              filter === "veg" ? "border-[color:var(--veg)]/60 bg-[color:var(--veg)]/15" : "border-white/10 text-muted-foreground hover:bg-white/5"
            }`}
          >
            <VegDot type="veg" /> Pure Veg
          </button>
          <button
            onClick={() => setFilter("nonveg")}
            className={`flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium transition ${
              filter === "nonveg" ? "border-[color:var(--nonveg)]/60 bg-[color:var(--nonveg)]/15" : "border-white/10 text-muted-foreground hover:bg-white/5"
            }`}
          >
            <VegDot type="nonveg" /> Non-Veg
          </button>
        </div>

        <div className="mx-auto mb-12 flex max-w-5xl flex-wrap items-center justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`rounded-full px-4 py-1.5 text-xs transition ${
                active === c.id
                  ? "gradient-gold text-primary-foreground shadow-gold"
                  : "border border-white/10 text-muted-foreground hover:bg-white/5 hover:text-foreground"
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>

        <div className="space-y-14">
          {visible.map((cat) => (
            <div key={cat.id}>
              <div className="mb-6 flex items-end justify-between gap-4 border-b border-white/10 pb-3">
                <h3 className="font-display text-2xl font-semibold sm:text-3xl">{cat.name}</h3>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">
                  {cat.items.length} items
                </span>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {cat.items.map((item) => (
                  <article
                    key={item.name}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-surface p-5 transition hover:-translate-y-1 hover:border-[color:var(--gold)]/40 hover:bg-surface-2"
                  >
                    <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[color:var(--gold)]/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <VegDot type={item.type} />
                          <h4 className="truncate font-display text-base font-semibold">{item.name}</h4>
                        </div>
                        {item.desc && (
                          <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                            {item.desc}
                          </p>
                        )}
                      </div>
                      <span className="shrink-0 font-display text-base font-semibold text-gold">
                        {item.price}
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
