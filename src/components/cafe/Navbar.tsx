import { useEffect, useState } from "react";
import logo from "@/assets/cafe/logo.png";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#menu", label: "Menu" },
  { href: "#gallery", label: "Gallery" },
  { href: "#offers", label: "Offers" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:pt-5">
      <nav
        className={`flex w-full max-w-6xl items-center justify-between rounded-full border border-white/10 px-3 py-2 transition-all duration-500 sm:px-5 ${
          scrolled
            ? "bg-background/80 shadow-2xl backdrop-blur-xl"
            : "bg-background/40 backdrop-blur-md"
        }`}
      >
        <a href="#home" className="flex items-center gap-2 pl-1">
          <img src={logo} alt="Café D Guntur" className="h-9 w-9 rounded-full object-cover ring-1 ring-white/20" />
          <span className="hidden font-display text-lg font-semibold tracking-wide text-gradient-gold sm:inline">
            Café D
          </span>
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-4 py-2 text-sm text-muted-foreground transition hover:bg-white/5 hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <a
            href="https://wa.me/919493419944"
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full gradient-gold px-4 py-2 text-sm font-medium text-primary-foreground shadow-gold transition hover:opacity-90 sm:inline-flex"
          >
            Order Now
          </a>
          <button
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
            className="grid h-9 w-9 place-items-center rounded-full border border-white/10 md:hidden"
          >
            <span className="text-lg">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </nav>
      {open && (
        <div className="absolute top-20 w-[calc(100%-1.5rem)] max-w-6xl rounded-2xl border border-white/10 bg-background/95 p-3 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  onClick={() => setOpen(false)}
                  href={l.href}
                  className="block rounded-xl px-4 py-3 text-sm hover:bg-white/5"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://wa.me/919493419944"
                target="_blank"
                rel="noreferrer"
                className="mt-1 block rounded-xl gradient-gold px-4 py-3 text-center text-sm font-medium text-primary-foreground"
              >
                Order on WhatsApp
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
