import { aiProjects } from "../data/portfolioData";
import { Cpu, Mic, Building2 } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  cpu: <Cpu size={24} className="text-indigo-400" />,
  mic: <Mic size={24} className="text-indigo-400" />,
  building: <Building2 size={24} className="text-indigo-400" />,
};

export default function AIWorkSection() {
  return (
    <section id="ai-work" className="py-24 px-6 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">
            Ambition at Scale
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-2 mb-4">
            AI & Production Systems
          </h2>
          <p className="text-slate-400 max-w-2xl text-base leading-relaxed">
            From GPU cloud inference to FinTech payment infrastructure — these are
            production systems running at real scale, not side projects.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {aiProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-slate-900/80 border border-slate-800 hover:border-indigo-500/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/5 flex flex-col"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-5">
                {iconMap[project.icon] ?? <Cpu size={24} className="text-indigo-400" />}
              </div>

              {/* Title */}
              <h3 className="text-white font-bold text-base leading-snug mb-1">
                {project.title}
              </h3>
              <p className="text-indigo-400/80 text-xs font-semibold uppercase tracking-wide mb-3">
                {project.subtitle}
              </p>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">
                {project.description}
              </p>

              {/* Highlight */}
              <div className="inline-flex items-center gap-1.5 bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs px-3 py-1.5 rounded-full mb-4 self-start">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 inline-block" />
                {project.highlight}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
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
      </div>
    </section>
  );
}
