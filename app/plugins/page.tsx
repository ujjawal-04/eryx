import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function PluginsPage() {
  const modules = [
    {
      title: "Medusa-Plugin-Sendgrid-Templates",
      description: "Dynamic email templates for SendGrid, allowing for easy customization of transactional emails.",
      theme: "hover:shadow-[0_20px_50px_-8px_rgba(56,83,163,0.7)]",
      accentBorder: "border-[#3853A3]/30",
      image: "/logos_medusa-icon.png",
      link: "https://github.com/eryxco/medusa-plugin-sendgrid-templates"
    },
    {
      title: "Medusa-Search-Meilisearch-Extended",
      description: "Advanced search capabilities using MeiliSearch, including faceted search and typo tolerance.",
      theme: "hover:shadow-[0_20px_50px_-8px_rgba(255,124,130,0.7)]",
      accentBorder: "border-[#FF7C82]/30",
      image: "/logos_medusa-icon (1).png",
      link: "https://github.com/eryxco/medusa-search-meilisearch-extended"
    },
    {
      title: "Medusa-Payment-Stripe-Custom",
      description: "Enhanced Stripe integration with support for complex subscription models and split payments.",
      theme: "hover:shadow-[0_20px_50px_-8px_rgba(105,189,69,0.7)]",
      accentBorder: "border-[#69BD45]/30",
      image: "/logos_medusa-icon (2).png",
      link: "https://github.com/eryxco/medusa-payment-stripe-custom"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-32 pb-20 px-8 max-w-[1350px] mx-auto mb-30">
        <h1 className="text-3xl lg:text-5xl font-bold text-center mb-20 tracking-tight bg-gradient-to-r from-[#3853A3] to-[#151F3D] bg-clip-text uppercase text-transparent">Open Source Modules</h1>

        <div className="flex flex-wrap md:flex-nowrap justify-center gap-6">
          {modules.map((m, i) => (
            <div key={i} className={`bg-white p-5 border ${m.accentBorder} shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] ${m.theme} hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center group w-[406px] h-[407px] flex-shrink-0`}>
              <div className="w-25 h-25 mb-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <Image
                  src={m.image}
                  alt={m.title}
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>

              <h2 className="text-xl font-extrabold text-zinc-900 mb-4 leading-tight min-h-[56px] flex items-center">
                {m.title}
              </h2>

              <p className="text-zinc-500 text-sm mb-8 leading-relaxed line-clamp-3">
                {m.description}
              </p>

              <div className="mt-auto w-full">
                <Link href={m.link} target="_blank" rel="noopener noreferrer" className="block">
                  <button className="w-full py-4 bg-white border border-zinc-200 text-zinc-900 rounded-md font-bold text-sm hover:bg-gradient-to-r hover:from-[#EE1F23] hover:to-[#881214] hover:text-white hover:border-transparent transition-all duration-300 shadow-md active:scale-95 uppercase tracking-wider">
                    View Repo
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
