import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function MethodologyPage() {
  const protocols = [
    { title: "FULL_STACK_DEV", tags: ["API Development", "Database Design"] },
    { title: "SYSTEM_ARCHITECTURE", tags: ["API Development", "Database Design"] },
    { title: "OPEN_SOURCE_STRATEGY", tags: ["API Development", "Database Design"] },
    { title: "PERFORMANCE_ENG", tags: ["API Development", "Database Design"] },
    { title: "MEDUSA_COMMERCE", tags: ["API Development", "Database Design"] },
  ];

  const description = "End-to-end web application development using Next.js, React, and Node.js. We build scalable, high-performance systems.";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-20 px-8 max-w-5xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-bold text-center text-green-700 mb-16 tracking-tight">Core Protocols</h1>
        
        <div className="space-y-6">
          {protocols.map((p, i) => (
            <div key={i} className="bg-white rounded-xl shadow-lg shadow-zinc-200/50 p-8 border border-zinc-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:shadow-xl transition-shadow">
              <div className="flex-1">
                <h2 className="text-xl font-bold text-green-600 mb-2">
                  <span className="mr-2 opacity-50">{i + 1}.</span> {p.title}
                </h2>
                <p className="text-zinc-500 text-sm mb-6 leading-relaxed max-w-2xl">
                  {description}
                </p>
                <div className="flex gap-8">
                  {p.tags.map((tag, j) => (
                    <span key={j} className="text-[10px] font-bold uppercase tracking-widest text-zinc-900">{tag}</span>
                  ))}
                </div>
              </div>
              
              <button className="px-10 py-3 border border-red-500 text-red-500 rounded-lg text-sm font-bold hover:bg-red-50 transition-colors whitespace-nowrap">
                Inquire
              </button>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
