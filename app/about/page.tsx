import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function AboutPage() {
  const stats = [
    { label: "Open Source Commits", value: "100+", icon: "✨" },
    { label: "Systems Deployed", value: "50+", icon: "🚀" },
    { label: "Systems Deployed", value: "25+", icon: "🛠️" },
    { label: "Years Experience", value: "10+", icon: "📅" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-20 px-8 max-w-7xl mx-auto">
        {/* Manifesto Section */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
          <div className="flex-1">
            <h2 className="text-red-600 font-bold text-3xl mb-12 tracking-widest uppercase text-center lg:text-left">The Manifesto</h2>
            <h1 className="text-4xl lg:text-5xl font-bold text-zinc-900 leading-tight">
              We believe software is the infrastructure of the modern world. It should be transparent, resilient, and open.
            </h1>
          </div>
          <div className="flex-1 w-full bg-zinc-50 p-4 rounded-3xl shadow-2xl border border-zinc-100">
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden">
               <Image 
                src="/about-manifesto.png" 
                alt="Manifesto UI" 
                fill
                className="object-cover"
               />
            </div>
          </div>
        </div>

        {/* Core Directive Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h3 className="text-3xl font-bold text-zinc-900 mb-8">Core Directive</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-4 text-red-600 font-bold tracking-wide">
                <span className="text-xl">✦</span> BUILD PUBLIC GOODS
              </li>
              <li className="flex items-center gap-4 text-red-600 font-bold tracking-wide">
                <span className="text-xl">✦</span> EMPOWER DEVELOPERS
              </li>
              <li className="flex items-center gap-4 text-red-600 font-bold tracking-wide">
                <span className="text-xl">✦</span> SHIP FAST BREAK NOTHING
              </li>
            </ul>
            
            <p className="mt-12 text-lg text-zinc-700 leading-relaxed max-w-xl font-medium">
              Eryx was founded on the principle that the best code is the code that is shared. We are not just an agency; we are a collective of engineers, designers, and open source maintainers dedicated to pushing the web forward. We don't hide behind black boxes. We build with the garage door open.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((s, i) => (
              <div key={i} className="p-8 bg-white border border-zinc-100 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow flex flex-col justify-between">
                <div>
                   <span className="text-red-500 text-xl block mb-4">{s.icon}</span>
                   <div className="text-3xl font-bold text-zinc-900 mb-2">{s.value}</div>
                   <div className="text-xs text-zinc-500 uppercase tracking-widest font-bold">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
