import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function StorefrontsPage() {
  const storefronts = [
    {
      id: "fashion",
      title: "ERYX_FASHION_V1",
      description: "High-performance fashion retail starter with advanced filtering, lookbooks, and size guides.",
      image: "/fashion-preview.png",
      tags: ["Visual Search", "Size Guide", "Lookbook"]
    },
    {
      id: "b2b",
      title: "ERYX_B2B_STARTER",
      description: "Optimized B2B storefront with bulk ordering, customer groups, and negotiated pricing logic.",
      image: "/b2b-preview.png",
      tags: ["Bulk Order", "Pricing", "Auth"]
    }
  ];

  return (
    <div className="min-h-screen bg-background font-inter">
      <Navbar />

      <main className="pt-32">
        <h1 className="text-[36px] font-bold text-center mb-12  uppercase bg-gradient-to-r from-[#EE1F23] to-[#881214] bg-clip-text text-transparent h-[44px] w-[441px] mx-auto  whitespace-nowrap overflow-hidden">Starter Storefronts</h1>

        {/* Banner Section */}
        <section className="bg-[#FF7C82] p-8 flex flex-col lg:row items-center gap-12 text-white">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-8 bg-gradient-to-r from-[#EE1F23] to-[#881214] bg-clip-text text-transparent">
                Production-ready storefront starters built for performance, scale, and design.
              </h2>
            </div>
            <div className="flex-1 w-full max-w-lg bg-zinc-100 shadow-2xl p-8 rounded-xl">
              <div className="relative aspect-[4/3] w-full overflow-hidden shadow-inner">
                <Image
                  src="/about-manifesto.png"
                  alt="Storefront Platform"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Catalog Section */}
        <section className="py-32 px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            {storefronts.map((s) => (
              <div key={s.id} className="bg-white rounded-lg overflow-hidden shadow-2xl border border-zinc-100 flex flex-col transition-all duration-300 hover:shadow-[0_0_40px_rgba(229,9,20,0.5)]  hover:-translate-y-1">
                <div className="p-6 pb-0">
                  <div className="relative aspect-video w-full border border-zinc-100 rounded-lg overflow-hidden shadow-sm">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="p-10 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold mb-6 font-mono bg-gradient-to-r from-[#EE1F23] to-[#881214] bg-clip-text text-transparent w-fit">{s.title}</h3>
                  <p className="text-sm mb-10 leading-relaxed bg-gradient-to-r from-[#EE1F23] to-[#881214] bg-clip-text text-transparent">
                    {s.description}
                  </p>

                  {s.tags && (
                    <div className="flex flex-wrap gap-2 mb-12">
                      {s.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 border border-red-200 text-red-500 text-[10px] font-bold uppercase tracking-widest rounded-sm hover:bg-[#E50914] hover:text-white hover:border-[#E50914] transition-all duration-300 cursor-default">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="mt-auto grid grid-cols-2 gap-4 border-t border-zinc-50 pt-2">
                    <button className="group flex items-center justify-center gap-2 text-[10px] font-bold text-zinc-900 border border-zinc-200 py-3 hover:bg-[#E50914] active:bg-[#E50914] hover:text-white active:text-white hover:border-[#E50914] active:border-[#E50914] transition-all duration-300 uppercase tracking-widest">
                      <Image src="/vector.png" alt="Demo icon" width={14} height={14} className="brightness-0 group-hover:invert group-active:invert transition-all duration-300" />
                      Live Demo
                    </button>
                    <button className="flex items-center justify-center gap-2 text-[10px] font-bold text-zinc-900 border border-zinc-200 py-3 hover:bg-[#69BD45] active:bg-[#69BD45] hover:text-white active:text-white hover:border-[#69BD45] active:border-[#69BD45] transition-all duration-300 uppercase tracking-widest">
                      Code&lt;/&gt;
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
