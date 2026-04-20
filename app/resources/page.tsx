import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function ResourcesPage() {
  const resourceCards = [
    {
      title: "Open Source Plugins",
      icon: "ðŸ“",
      description: "Our collection of open source Medusa plugins, free to use and contribute to.",
      items: ["payment integrations", "payment integrations", "payment integrations"],
      link: "/plugins",
      btnText: "View All Plugins"
    },
    {
      title: "Starter Storefront",
      icon: "ðŸª",
      description: "Production-ready storefront templates to jumpstart your e-commerce project.",
      items: ["payment integrations", "payment integrations", "payment integrations"],
      link: "/storefronts",
      btnText: "View All Storefronts"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-20 px-8 max-w-6xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-bold text-center text-blue-900 mb-20 tracking-tight">Resources</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {resourceCards.map((card, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-2xl shadow-zinc-200/50 p-12 border border-zinc-100 flex flex-col hover:shadow-3xl transition-all">
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-2xl font-bold text-blue-900">{card.title}</h2>
                <span className="text-xl">{card.icon}</span>
              </div>
              
              <p className="text-zinc-500 text-sm mb-8 leading-relaxed max-w-sm">
                {card.description}
              </p>
              
              <ul className="space-y-4 mb-12 flex-1">
                {card.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-zinc-800">
                    <span className="w-1 h-1 bg-zinc-900 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
              
              <Link href={card.link} className="w-full py-4 border border-zinc-200 text-zinc-900 rounded-lg text-sm font-bold hover:bg-background transition-colors block text-center">
                {card.btnText}
              </Link>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
