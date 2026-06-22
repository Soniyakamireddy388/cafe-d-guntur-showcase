import logo from "@/assets/cafe/logo.png";
import bg from "@/assets/cafe/exterior-night.jpg";

export function Hero() {
  return (
    <section id="home" className="relative isolate flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src={bg} alt="Café D Guntur storefront" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/70 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.7)_100%)]" />
      </div>

      <div className="container mx-auto px-6 pt-28 pb-16 text-center sm:pt-32">
        <div className="animate-float-up mx-auto mb-6 inline-flex">
          <img
            src={logo}
            alt="Café D logo"
            className="h-28 w-28 rounded-full bg-white object-contain p-1 shadow-gold ring-2 ring-[color:var(--gold)]/40 sm:h-36 sm:w-36"
          />
        </div>
        <p className="animate-float-up mb-3 text-xs font-medium uppercase tracking-[0.4em] text-gold" style={{ animationDelay: "0.1s" }}>
          Guntur · Since 2024
        </p>
        <h1 className="animate-float-up mx-auto max-w-4xl font-display text-5xl font-bold leading-[1.05] sm:text-7xl lg:text-8xl" style={{ animationDelay: "0.2s" }}>
          <span className="text-gradient-gold">Café D</span>
          <span className="block text-foreground">— Guntur</span>
        </h1>
        <p className="animate-float-up mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg" style={{ animationDelay: "0.3s" }}>
          Your perfect place for coffee, food & good moments. Start your day right.
        </p>
        <div className="animate-float-up mt-9 flex flex-wrap items-center justify-center gap-3" style={{ animationDelay: "0.4s" }}>
          <a
            href="#menu"
            className="rounded-full gradient-gold px-7 py-3 text-sm font-semibold text-primary-foreground shadow-gold transition hover:scale-105"
          >
            View Menu
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/20 bg-white/5 px-7 py-3 text-sm font-semibold text-foreground backdrop-blur transition hover:bg-white/10"
          >
            Order Now
          </a>
          <a
            href="https://wa.me/919493419944"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[color:var(--veg)]/40 bg-[color:var(--veg)]/15 px-7 py-3 text-sm font-semibold text-foreground transition hover:bg-[color:var(--veg)]/25"
          >
            WhatsApp
          </a>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs uppercase tracking-widest text-muted-foreground">
          <span>Specialty Coffee</span>
          <span className="text-gold">•</span>
          <span>Artisanal Pizza</span>
          <span className="text-gold">•</span>
          <span>Fried Chicken</span>
          <span className="text-gold">•</span>
          <span>Open 8 AM – 10 PM</span>
        </div>
      </div>
    </section>
  );
}
