export default function Testimonials() {
  const testimonials = [1, 2, 3];

  return (
    <section className="py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-zinc-900 mb-12">Trusted by businesses that expect more.</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((i) => (
            <div key={i} className="p-8 rounded-2xl border border-zinc-100 bg-white flex flex-col gap-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-zinc-200" />
                <div>
                   <div className="w-20 h-3 bg-zinc-100 rounded-full mb-2" />
                   <div className="w-12 h-2 bg-zinc-50 rounded-full" />
                </div>
              </div>
              <div className="flex gap-1 text-blue-500 font-serif text-3xl opacity-20">“ “</div>
              <div className="flex flex-col gap-2">
                <div className="h-3 bg-zinc-50 rounded-full w-full" />
                <div className="h-3 bg-zinc-50 rounded-full w-[80%]" />
                <div className="h-3 bg-zinc-50 rounded-full w-[90%]" />
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-32">
          <h2 className="text-4xl font-bold text-zinc-900 mb-12">FAQ</h2>
          <div className="border-t border-zinc-100" />
        </div>
      </div>
    </section>
  );
}
