import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/cafe/Navbar";
import { Hero } from "@/components/cafe/Hero";
import { About } from "@/components/cafe/About";
import { Menu } from "@/components/cafe/Menu";
import { Gallery } from "@/components/cafe/Gallery";
import { Offers } from "@/components/cafe/Offers";
import { Reviews } from "@/components/cafe/Reviews";
import { Contact } from "@/components/cafe/Contact";
import { Footer } from "@/components/cafe/Footer";
import { Chatbot } from "@/components/cafe/Chatbot";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Café D — Guntur | Specialty Coffee, Pizza, Burgers & More" },
      {
        name: "description",
        content:
          "Café D Guntur — cozy modern cafe in Gorantla serving specialty coffee, artisanal pizza, fried chicken, burgers, pasta & desserts. Open 8 AM – 10 PM daily.",
      },
      { property: "og:title", content: "Café D — Guntur" },
      { property: "og:description", content: "Your perfect place for coffee, food & good moments." },
      { property: "og:type", content: "restaurant" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Gallery />
        <Offers />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
