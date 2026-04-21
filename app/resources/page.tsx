import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function ResourcesPage() {
  const resourceCards = [
    {
      title: "Open Source Plugins",
      icon: "/catppuccin_folder-plugins.png",
      description: "Our collection of open source Medusa plugins, free to use and contribute to.",
      items: ["PAYMENT INTEGRATIONS", "SEARCH & ANALYTICS", "MARKETING TOOLS"],
      link: "/plugins",
      btnText: "View All Plugins"
    },
    {
      title: "Starter Storefront",
      icon: "/nimbus_store.png",
      description: "Production-ready storefront templates to jumpstart your e-commerce project.",
      items: ["B2B & WHOLESALE", "FASHION & RETAIL", "DIGITAL PRODUCTS"],
      link: "/storefronts",
      btnText: "View All Storefronts"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-32 pb-20 px-8 max-w-[1000px] mx-auto mb-30">
        <h1 className="text-4xl lg:text-5xl font-bold uppercase text-center mb-20 tracking-tight bg-gradient-to-r from-[#3853A3] to-[#151F3D] bg-clip-text text-transparent">Resources</h1>

        <div className="flex flex-wrap justify-center gap-20">
          {resourceCards.map((card, i) => (
            <div key={i} className="bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] p-5 border border-zinc-100 flex flex-col hover:shadow-[0_25px_70px_-10px_rgba(56,83,163,0.8)] hover:-translate-y-2 transition-all duration-500 w-[400px] h-[430px] relative">
              <div className="flex items-center justify-between mb-8 pt-5">
                <h2 className="text-xl font-bold bg-gradient-to-r from-[#3853A3] to-[#151F3D] bg-clip-text text-transparent uppercase tracking-tight">
                  {card.title}
                </h2>
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>

              <p className="text-zinc-500 text-sm mb-8 leading-relaxed">
                {card.description}
              </p>

              <ul className="space-y-4 mb-10 flex-1">
                {card.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-zinc-800">
                    <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link href={card.link} className="w-full py-4 border border-zinc-200 text-zinc-900 rounded-md text-sm font-bold hover:bg-gradient-to-r hover:from-[#EE1F23] hover:to-[#881214] hover:text-white hover:border-transparent transition-all duration-300 block text-center uppercase tracking-wide shadow-sm">
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
