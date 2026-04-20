import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsPage() {
  const projects = [1, 2, 3, 4, 5];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-40 pb-20 px-8">
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-red-600 font-bold text-3xl mb-4">Project Archives</h2>
          <h1 className="text-4xl lg:text-5xl font-bold text-zinc-900 leading-tight mb-8">
            Explore our archive of high-performance digital products, crafted to solve real-world problems with precision and design.
          </h1>
          <Link href="#" className="inline-block px-6 py-2 border border-red-200 text-red-500 rounded-md font-medium hover:bg-red-50 transition-colors">
            Contact Us
          </Link>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {projects.map((p) => (
            <div key={p} className="relative group">
              <div className="aspect-[21/9] w-full bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl relative">
                <Image 
                  src="/project-esim.png" 
                  alt="Project Banner" 
                  fill
                  className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Downward arrow button matching the purple style */}
                <div className="absolute bottom-[-24px] left-1/2 -translate-x-1/2 z-20">
                  <div className="w-12 h-12 bg-gradient-to-b from-violet-400 to-purple-600 rounded-full flex items-center justify-center text-white shadow-xl cursor-pointer hover:scale-110 transition-transform">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
