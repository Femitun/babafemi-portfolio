import { impactProjects } from "../data/portfolioData";
import { Users, Globe, Briefcase } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  accessibility: <Globe size={24} className="text-emerald-400" />,
  briefcase: <Briefcase size={24} className="text-emerald-400" />,
  users: <Users size={24} className="text-emerald-400" />,
};

export default function ImpactSection() {
  return (
    <section id="impact" className="py-24 px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="mb-14">
        <span className="text-emerald-400 text-sm font-semibold uppercase tracking-widest">
          Altruistic Focus
        </span>
        <h2 className="text-4xl sm:text-5xl font-black text-white mt-2 mb-4">
          Building for Others
        </h2>
        <p className="text-slate-400 max-w-2xl text-base leading-relaxed">
          Every line of code here solves a real problem for someone underserved — whether
          that's a visually impaired user locked out of a website, or an entrepreneur who
          can't afford a business consultant.
        </p>
      </div>

      {/* Project Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {impactProjects.map((project) => (
          <div
            key={project.id}
            className="group relative bg-slate-900/70 border border-slate-800 hover:border-emerald-500/50 rounded-2xl p-7 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/5"
          >
            {/* Icon */}
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-5">
              {iconMap[project.icon] ?? <Globe size={24} className="text-emerald-400" />}
            </div>

            {/* Title & subtitle */}
            <div className="mb-3">
              <h3 className="text-white font-bold text-lg leading-snug">
                {project.title}
              </h3>
              <p className="text-emerald-400/80 text-sm font-medium mt-0.5">
                {project.subtitle}
              </p>
            </div>

            {/* Description */}
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              {project.description}
            </p>

            {/* Highlight pill */}
            <div className="inline-flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs px-3 py-1.5 rounded-full mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
              {project.highlight}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-slate-800 text-slate-400 text-xs px-2.5 py-1 rounded-lg"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
