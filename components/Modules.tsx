export default function Modules() {
  const modules = [
    {
      id: 1,
      title: "Decentralized Core",
      color: "from-red-50 to-white",
      border: "border-red-100",
      accent: "bg-red-500",
      tag: "Module 1",
      description: "The Decentralized Core is designed for privacy-centric, distributed computing, ensuring that data stays in your control while providing enterprise-grade performance."
    },
    {
      id: 2,
      title: "Secure API Gateway",
      color: "from-green-50 to-white",
      border: "border-green-100",
      accent: "bg-green-500",
      tag: "Module 2",
      description: "The Secure API Gateway provides industry-leading encryption and low-latency API management, enabling seamless integrations with your existing infrastructure."
    },
    {
      id: 3,
      title: "Modular UI Kit",
      color: "from-blue-50 to-white",
      border: "border-blue-100",
      accent: "bg-blue-500",
      tag: "Module 3",
      description: "The Modular UI Kit offers beautiful, accessible components that allow you to build consistent, premium interfaces with minimal effort and maximal flexibility."
    }
  ];

  return (
    <section className="py-20 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {modules.map((m) => (
          <div key={m.id} className={`p-8 rounded-3xl border ${m.border} bg-gradient-to-b ${m.color} h-full flex flex-col justify-between hover:shadow-lg transition-all`}>
            <div>
              <span className={`text-xs font-bold uppercase tracking-widest ${m.accent.replace('bg-', 'text-')} mb-4 block`}>{m.tag}</span>
              <h3 className="text-2xl font-bold text-zinc-900 mb-4 flex items-center gap-2">
                {m.title}
                <span className="w-5 h-5 opacity-50">✨</span>
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                {m.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
