import { useEffect, useRef, useState } from "react";

type Msg = { role: "bot" | "user"; text: string };

const intents: { match: RegExp; reply: string }[] = [
  { match: /(hour|open|close|time|timing)/i, reply: "We're open every day from 8:00 AM to 10:00 PM. ☕" },
  { match: /(location|address|where|direction|reach)/i, reply: "Find us at 8CMW+F46, Sainagar Colony, Inner Ring Road, Gorantla, Guntur 522034. Tap Contact for live map directions." },
  { match: /(phone|call|contact|number|whatsapp)/i, reply: "Call or WhatsApp us at 094934 19944 — we'd love to hear from you." },
  { match: /(menu|food|eat|dish)/i, reply: "Our menu has pizzas, burgers, fried chicken, pasta, momos, brownies, mojitos & specialty coffee. Scroll to the Menu section to explore." },
  { match: /(pizza)/i, reply: "Veg pizzas start at ₹219 (Margherita) and non-veg start at ₹349. Combos with garlic bread + ice tea from ₹399." },
  { match: /(burger)/i, reply: "Veggie Burger ₹129, Paneer ₹139. Chicken burgers from ₹149 up to our signature No Bun Burger at ₹209." },
  { match: /(chicken|fried)/i, reply: "Fried Chicken: 2pc ₹165 · 4pc ₹310 · 8pc ₹609. Add Korean/Nashville/Buffalo sauce for ₹30." },
  { match: /(coffee|tea|beverage|drink)/i, reply: "Tea/Coffee just ₹25. We also serve hot chocolate, mojitos, smoothies & fresh juices." },
  { match: /(price|cost|cheap|expens)/i, reply: "Prices range from ₹25 (tea) to ₹799 (8pc fried chicken combo). Check the Menu section for full pricing." },
  { match: /(offer|deal|discount|student|birthday)/i, reply: "Students get 10% off. Weekend combos start ₹399. Birthday? Complimentary brownie + coffee on us." },
  { match: /(veg|vegetarian)/i, reply: "Plenty of pure-veg options! Use the Veg filter on our menu to see them all." },
  { match: /(book|reserve|table)/i, reply: "We're walk-in friendly! For groups, please call 094934 19944 ahead." },
  { match: /(hi|hello|hey|hola)/i, reply: "Hello! Welcome to Café D Guntur. ☕ How can I help — menu, hours, location, or offers?" },
];

const greet: Msg = {
  role: "bot",
  text: "Hi! I'm your Café D Assistant. Ask me about our menu, prices, hours, or location.",
};

function reply(input: string): string {
  for (const i of intents) if (i.match.test(input)) return i.reply;
  return "I can help with menu, prices, hours, location & contact. Try asking 'pizza prices' or 'opening hours'.";
}

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([greet]);
  const [input, setInput] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  const send = (text: string) => {
    const t = text.trim();
    if (!t) return;
    setMessages((m) => [...m, { role: "user", text: t }]);
    setInput("");
    setTimeout(() => {
      setMessages((m) => [...m, { role: "bot", text: reply(t) }]);
    }, 400);
  };

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Open Café D Assistant"
        className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full gradient-gold text-2xl text-primary-foreground shadow-gold transition hover:scale-110"
      >
        {open ? "✕" : "☕"}
      </button>

      {open && (
        <div className="fixed bottom-24 right-5 z-50 flex h-[520px] w-[min(92vw,380px)] flex-col overflow-hidden rounded-3xl border border-white/10 bg-surface shadow-2xl">
          <header className="flex items-center gap-3 border-b border-white/10 bg-surface-2 px-4 py-3">
            <div className="grid h-9 w-9 place-items-center rounded-full gradient-gold text-primary-foreground">☕</div>
            <div className="min-w-0">
              <p className="font-display text-sm font-semibold">Café D Assistant</p>
              <p className="text-[10px] uppercase tracking-widest text-[color:var(--veg)]">● Online</p>
            </div>
          </header>

          <div className="flex-1 space-y-3 overflow-y-auto p-4">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-3.5 py-2 text-sm ${
                    m.role === "user"
                      ? "gradient-gold text-primary-foreground"
                      : "bg-surface-2 text-foreground"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            <div ref={endRef} />
          </div>

          <div className="border-t border-white/10 bg-surface-2 p-3">
            <div className="mb-2 flex flex-wrap gap-1.5">
              {["Menu", "Hours", "Location", "Offers"].map((q) => (
                <button
                  key={q}
                  onClick={() => send(q)}
                  className="rounded-full border border-white/10 px-3 py-1 text-[11px] text-muted-foreground hover:bg-white/5"
                >
                  {q}
                </button>
              ))}
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="flex gap-2"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-1 rounded-full border border-white/10 bg-background px-4 py-2 text-sm outline-none focus:border-[color:var(--gold)]/50"
              />
              <button
                type="submit"
                className="rounded-full gradient-gold px-4 py-2 text-sm font-semibold text-primary-foreground"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
