import logo from "@/assets/cafe/logo.png";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background py-14">
      <div className="container mx-auto grid gap-10 px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="Café D" className="h-12 w-12 rounded-full bg-white object-contain p-0.5 ring-1 ring-white/20" />
            <div>
              <p className="font-display text-xl font-semibold text-gradient-gold">Café D — Guntur</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Start your day right</p>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm text-muted-foreground">
            Your perfect place for coffee, food & good moments — in the heart of Gorantla.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-gold">Explore</p>
          <ul className="mt-4 space-y-2 text-sm">
            {["Home", "Menu", "Gallery", "Contact"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="text-muted-foreground transition hover:text-gold">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-gold">Connect</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="tel:+919493419944" className="text-muted-foreground hover:text-gold">094934 19944</a></li>
            <li><a href="https://wa.me/919493419944" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-gold">WhatsApp</a></li>
            <li><a href="https://www.instagram.com/cafed_guntur" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-gold">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-10 border-t border-white/5 px-6 pt-6 text-center text-xs text-muted-foreground">
        © 2026 Café D — Guntur. Start your day right.
      </div>
    </footer>
  );
}
