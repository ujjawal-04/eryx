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
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      
      <main className="pt-32">
        <h1 className="text-3xl font-bold text-center text-red-600 mb-12 tracking-widest uppercase">Starter Storefronts</h1>
        
        {/* Banner Section */}
        <section className="bg-red-400 p-12 lg:p-20 flex flex-col lg:row items-center gap-12 text-white">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-8">
                Production-ready storefront starters built for performance, scale, and design.
              </h2>
            </div>
            <div className="flex-1 w-full max-w-2xl bg-zinc-100 p-4 rounded-3xl shadow-2xl">
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-inner">
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
              <div key={s.id} className="bg-white rounded-2xl overflow-hidden shadow-2xl border border-zinc-100 flex flex-col">
                <div className="relative aspect-video w-full border-b border-zinc-100">
                  <Image 
                    src={s.image} 
                    alt={s.title} 
                    fill 
                    className="object-cover" 
                  />
                </div>
                
                <div className="p-10 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold text-red-600 mb-6 font-mono">{s.title}</h3>
                  <p className="text-zinc-500 text-sm mb-10 leading-relaxed">
                    {s.description}
                  </p>
                  
                  {s.tags && (
                    <div className="flex flex-wrap gap-2 mb-12">
                      {s.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 border border-red-200 text-red-500 text-[10px] font-bold uppercase tracking-widest rounded-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="mt-auto grid grid-cols-2 border-t border-zinc-50 pt-8">
                    <button className="flex items-center justify-center gap-2 text-xs font-bold text-zinc-900 border-r border-zinc-100 hover:text-red-500 transition-colors uppercase tracking-widest">
                      live Demo (--)
                    </button>
                    <button className="flex items-center justify-center gap-2 text-xs font-bold text-zinc-900 hover:text-red-500 transition-colors uppercase tracking-widest">
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
