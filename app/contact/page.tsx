import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-20 px-8 max-w-7xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-bold text-center text-blue-900 mb-16 tracking-tight">Contact Us</h1>
        
        <div className="bg-white rounded-[40px] overflow-hidden shadow-2xl flex flex-col lg:flex-row min-h-[600px] border border-zinc-100">
          {/* Left Panel */}
          <div className="flex-1 bg-blue-600 p-12 lg:p-20 flex flex-col justify-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold leading-tight mb-8">
              Have an idea, a product, or a problem worth solving? We design and build high-performance digital experiences tailored to your needs. Tell us about your project â€” we'll handle the rest.
            </h2>
          </div>
          
          {/* Right Panel - Form */}
          <div className="flex-1 p-12 lg:p-20 bg-white">
            <form className="space-y-8">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-red-500 mb-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <input 
                  type="text" 
                  placeholder="Name" 
                  className="w-full px-6 py-4 bg-background border border-zinc-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all font-medium"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-blue-500 mb-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002 -2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full px-6 py-4 bg-background border border-zinc-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all font-medium"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-green-500 mb-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <textarea 
                  placeholder="Message" 
                  rows={6}
                  className="w-full px-6 py-4 bg-background border border-zinc-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all font-medium resize-none"
                />
              </div>

              <button className="w-full py-4 bg-blue-600 text-white rounded-lg font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 mt-4 active:scale-95">
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
