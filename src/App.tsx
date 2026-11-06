import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ImpactSection from "./components/ImpactSection";
import AIWorkSection from "./components/AIWorkSection";
import ProjectsSection from "./components/ProjectsSection";
import LeadershipSection from "./components/LeadershipSection";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <ImpactSection />
        <AIWorkSection />
        <ProjectsSection />
        <LeadershipSection />
        <Contact />
      </main>
    </div>
  );
}
