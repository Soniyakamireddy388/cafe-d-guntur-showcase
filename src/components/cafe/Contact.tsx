export function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.4em] text-gold">Visit Us</p>
          <h2 className="font-display text-4xl font-bold sm:text-5xl">
            Come <span className="text-gradient-gold">say hi</span>
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-between rounded-3xl border border-white/10 bg-surface p-8 sm:p-10">
            <div>
              <p className="text-xs uppercase tracking-widest text-gold">Address</p>
              <p className="mt-3 font-display text-xl leading-relaxed">
                8CMW+F46, Sainagar Colony,<br />
                Inner Ring Road, Gorantla,<br />
                Guntur, Andhra Pradesh 522034
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-widest text-gold">Hours</p>
                  <p className="mt-2 text-sm text-muted-foreground">Open daily</p>
                  <p className="font-display text-lg">8:00 AM – 10:00 PM</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gold">Phone</p>
                  <p className="mt-2 text-sm text-muted-foreground">Call or WhatsApp</p>
                  <p className="font-display text-lg">094934 19944</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="tel:+919493419944"
                className="rounded-full gradient-gold px-6 py-3 text-sm font-semibold text-primary-foreground shadow-gold transition hover:scale-105"
              >
                Call Now
              </a>
              <a
                href="https://wa.me/919493419944"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[color:var(--veg)]/40 bg-[color:var(--veg)]/15 px-6 py-3 text-sm font-semibold transition hover:bg-[color:var(--veg)]/25"
              >
                WhatsApp
              </a>
              <a
                href="https://www.instagram.com/cafed_guntur"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold transition hover:bg-white/10"
              >
                Instagram
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-surface">
            <iframe
              title="Café D - Guntur location"
              src="https://www.google.com/maps?q=Cafe+D+Gorantla+Inner+Ring+Road+Guntur+522034&output=embed"
              className="h-full min-h-[420px] w-full"
              style={{ filter: "invert(0.9) hue-rotate(180deg) saturate(0.6) brightness(0.95)" }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
