import Link from "next/link";

export default function ProjectsShowcase() {
  const projects = [1, 2, 3];
  
  return (
    <section className="py-20 px-8 bg-zinc-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((i) => (
          <Link key={i} href="/projects" className="bg-white rounded-2xl overflow-hidden shadow-sm border border-zinc-100 hover:shadow-xl transition-shadow group">
            <div className="aspect-[16/9] bg-zinc-100 relative">
               {/* Simplified representation of the image gallery in the screenshot */}
               <div className="absolute inset-0 flex items-center justify-center p-4">
                  <div className="w-full h-full bg-zinc-200 rounded-lg overflow-hidden relative">
                    <div className="absolute top-2 left-2 w-12 h-2 bg-white rounded-sm opacity-50" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-zinc-400 font-bold opacity-30 select-none">PREVIEW {i}</div>
                  </div>
               </div>
            </div>
          </Link>
        ))}
        
      </div>
    </section>
  );
}
