import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PluginsPage() {
  const modules = [
    {
      title: "Medusa-Plugin-Sendgrid-Templates",
      description: "Dynamic email templates for SendGrid, allowing for easy customization of transactional emails.",
      theme: "shadow-purple-200/50 hover:shadow-purple-300/50",
      iconColor: "bg-purple-600",
      accentBorder: "border-purple-100",
      icon: "ðŸ”Œ"
    },
    {
      title: "Medusa-Search-Meilisearch-Extended",
      description: "Advanced search capabilities using MeiliSearch, including faceted search and typo tolerance.",
      theme: "shadow-pink-200/50 hover:shadow-pink-300/50",
      iconColor: "bg-pink-500",
      accentBorder: "border-pink-100",
      icon: "ðŸ”"
    },
    {
      title: "Medusa-Payment-Stripe-Custom",
      description: "Enhanced Stripe integration with support for complex subscription models and split payments.",
      theme: "shadow-green-200/50 hover:shadow-green-300/50",
      iconColor: "bg-green-600",
      accentBorder: "border-green-100",
      icon: "ðŸ’³"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-20 px-8 max-w-7xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-bold text-center text-zinc-900 mb-20 tracking-tight">Open Source Modules</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {modules.map((m, i) => (
            <div key={i} className={`bg-white rounded-3xl p-10 border ${m.accentBorder} shadow-2xl ${m.theme} transition-all duration-500 flex flex-col items-center text-center group`}>
              {/* Hexagon style icon container */}
              <div className={`w-24 h-24 ${m.iconColor} mb-8 flex items-center justify-center rounded-[30%] rotate-[15deg] group-hover:rotate-[0deg] transition-transform duration-500 shadow-xl`}>
                <span className="text-3xl text-white -rotate-[15deg] group-hover:rotate-[0deg] transition-transform duration-500">{m.icon}</span>
              </div>
              
              <h2 className="text-xl font-extrabold text-zinc-900 mb-4 leading-tight">
                {m.title}
              </h2>
              
              <p className="text-zinc-500 text-sm mb-10 leading-relaxed flex-1">
                {m.description}
              </p>
              
              <button className="w-full py-3 bg-white border border-zinc-200 text-zinc-900 rounded-xl font-bold text-sm hover:bg-background transition-all shadow-sm active:scale-95">
                View Repo
              </button>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
