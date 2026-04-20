import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import StatusSection from "@/components/StatusSection";
import Modules from "@/components/Modules";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <ProjectsShowcase />
        <StatusSection />
        <Modules />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
