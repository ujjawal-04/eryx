import Image from 'next/image';

export default function StatusSection() {
  return (
    <section className="py-20 px-8">
      <div className="max-w-7xl mx-auto bg-gradient-to-br from-zinc-50 to-blue-50 rounded-[40px] p-12 lg:p-20 relative overflow-hidden flex flex-col lg:flex-row items-center gap-12 border border-zinc-100 shadow-2xl shadow-blue-100/50">
        {/* Abstract background blobs as seen in screenshot */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-red-200/40 blur-3xl rounded-full" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-200/40 blur-3xl rounded-full" />
        
        <div className="flex-1 z-10 text-center lg:text-left">
          <h2 className="text-4xl lg:text-5xl font-bold text-zinc-900 leading-tight">
            Current Status: Building. Deploying Raw Functionality.
          </h2>
        </div>
        
        <div className="flex-1 w-full max-w-md z-10">
          <div className="bg-white rounded-3xl p-2 shadow-2xl shadow-zinc-200/50 overflow-hidden transform hover:-translate-y-2 transition-transform duration-500">
            <Image 
              src="/status-illustration.png" 
              alt="Status Card" 
              width={500}
              height={300}
              className="rounded-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
