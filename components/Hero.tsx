import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="z-10">
          <h1 className="text-5xl lg:text-6xl font-extrabold text-zinc-900 leading-tight mb-6">
            The best commerce platform for developers and agents
          </h1>
          <p className="text-lg text-zinc-500 mb-8 max-w-lg">
            The most popular open-source platform for commerce. Built to be customized by developers and AI.
          </p>
          <button className="bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition-all shadow-lg shadow-red-200">
            View Projects
          </button>
        </div>
        
        <div className="relative h-[400px] lg:h-[500px] w-full">
          <Image 
            src="/hero-illustration.png" 
            alt="Commerce Platform Illustration" 
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
