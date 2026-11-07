import { fullStackProjects } from "../data/portfolioData";
import { Zap, ShoppingCart } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { FadeIn, StaggerContainer, StaggerItem } from "./AnimationWrappers";

const iconMap: Record<string, React.ReactNode> = {
  zap: <Zap size={24} className="text-yellow-400" />,
  "shopping-cart": <ShoppingCart size={24} className="text-yellow-400" />,
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <FadeIn>
        <div className="mb-14">
          <span className="text-yellow-400 text-sm font-semibold uppercase tracking-widest">
            Shipping Velocity
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-2 mb-4">
            Full-Stack Projects
          </h2>
          <p className="text-slate-400 max-w-2xl text-base leading-relaxed">
            Proof that I can go from idea to deployed product — real-time multiplayer
            systems, transactional commerce, and everything in between.
          </p>
        </div>
      </FadeIn>

      {/* Cards */}
      <StaggerContainer className="grid md:grid-cols-2 gap-6">
        {fullStackProjects.map((project) => (
          <StaggerItem key={project.id}>
            <div className="group relative bg-slate-900/70 border border-slate-800 hover:border-yellow-500/40 rounded-2xl p-7 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/5 h-full">
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center mb-5">
                {iconMap[project.icon] ?? <Zap size={24} className="text-yellow-400" />}
              </div>

              {/* Title */}
              <h3 className="text-white font-bold text-lg leading-snug mb-1">
                {project.title}
              </h3>
              <p className="text-yellow-400/80 text-sm font-medium mb-3">
                {project.subtitle}
              </p>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed mb-5">
                {project.description}
              </p>

              {/* Highlight */}
              <div className="inline-flex items-center gap-1.5 bg-yellow-500/10 border border-yellow-500/20 text-yellow-300 text-xs px-3 py-1.5 rounded-full mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 inline-block" />
                {project.highlight}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-slate-800 text-slate-400 text-xs px-2.5 py-1 rounded-lg"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* GitHub Link (if present) */}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-xs transition-colors"
                >
                  <FaGithub size={14} />
                  View on GitHub
                </a>
              )}
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
