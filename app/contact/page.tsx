import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-32 pb-12 px-8 max-w-[1400px] mx-auto mb-30">
        <h1 className="text-4xl lg:text-5xl font-bold text-center uppercase mb-16 tracking-tight bg-gradient-to-r from-[#3853A3] to-[#151F3D] bg-clip-text text-transparent">Contact Us</h1>

        <div className="bg-white overflow-hidden shadow-2xl flex flex-col lg:flex-row min-h-[500px] border border-zinc-100">
          {/* Left Panel */}
          <div className="flex-1 lg:flex-[0.8] bg-gradient-to-br from-[#1140CA] to-[#557CF2] p-12 flex flex-col justify-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
              Have an idea, a product, or a problem worth solving? We design and build high-performance digital experiences tailored to your needs. Tell us about your project — we'll handle the rest.
            </h2>
          </div>

          {/* Right Panel - Form */}
          <div className="flex-1 lg:flex-[1.2] p-12 bg-white">
            <form className="space-y-8 mx-auto lg:mx-0">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Image src="/Group.png" alt="Name" width={20} height={20} className="opacity-80" />
                </div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 bg-[#F4F4F4] border border-zinc-200 rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-400 transition-all font-medium placeholder:text-zinc-400 text-zinc-900"
                />
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Image src="/ic_outline-email.png" alt="Email" width={20} height={20} className="opacity-80" />
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 bg-[#F4F4F4] border border-zinc-200 rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-400 transition-all font-medium placeholder:text-zinc-400 text-zinc-900"
                />
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Image src="/tabler_message.png" alt="Message" width={20} height={20} className="opacity-80" />
                </div>
                <textarea
                  placeholder="Message"
                  rows={6}
                  className="w-full px-4 py-3 bg-[#F4F4F4] border border-zinc-200 rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-400 transition-all font-medium resize-none text-zinc-900 placeholder:text-zinc-400"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-[#658AF7] to-[#1140CA] text-white rounded-sm font-medium text-sm hover:opacity-90 active:scale-[0.99] transition-all"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
