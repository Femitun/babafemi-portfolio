import { experience, skills } from "../data/portfolioData";
import { Shield, BookOpen, GraduationCap } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  shield: <Shield size={20} className="text-purple-400" />,
  "book-open": <BookOpen size={20} className="text-purple-400" />,
  "graduation-cap": <GraduationCap size={20} className="text-purple-400" />,
};

const skillCategories = [
  { label: "AI & ML", key: "ai" as const, color: "emerald" },
  { label: "Backend", key: "backend" as const, color: "indigo" },
  { label: "Frontend", key: "frontend" as const, color: "blue" },
  { label: "Data", key: "data" as const, color: "yellow" },
  { label: "Tools", key: "tools" as const, color: "slate" },
  { label: "Hardware", key: "hardware" as const, color: "pink" },
];

const colorMap: Record<string, string> = {
  emerald: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
  indigo: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",
  blue: "bg-blue-500/10 text-blue-300 border-blue-500/20",
  yellow: "bg-yellow-500/10 text-yellow-300 border-yellow-500/20",
  slate: "bg-slate-700/50 text-slate-300 border-slate-600",
  pink: "bg-pink-500/10 text-pink-300 border-pink-500/20",
};

export default function LeadershipSection() {
  return (
    <section id="leadership" className="py-24 px-6 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-purple-400 text-sm font-semibold uppercase tracking-widest">
            Generosity & Humble Beginnings
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-2 mb-4">
            Leadership & Excellence
          </h2>
          <p className="text-slate-400 max-w-2xl text-base leading-relaxed">
            Academic rigour, earned opportunities, and giving back — consistently.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-5 mb-16">
          {experience.map((item) => (
            <div
              key={item.id}
              className="group bg-slate-900/80 border border-slate-800 hover:border-purple-500/40 rounded-2xl p-6 transition-all duration-300 flex gap-5"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center shrink-0 mt-0.5">
                {iconMap[item.icon] ?? <Shield size={20} className="text-purple-400" />}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                  <div>
                    <h3 className="text-white font-bold text-base">{item.role}</h3>
                    <p className="text-purple-400/80 text-sm font-medium">{item.org}</p>
                  </div>
                  <span className="text-slate-500 text-xs font-mono bg-slate-800 px-2.5 py-1 rounded-full shrink-0">
                    {item.period}
                  </span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mt-2 mb-3">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-slate-800 text-slate-400 text-xs px-2.5 py-1 rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Grid */}
        <div>
          <h3 className="text-white font-bold text-xl mb-6">Technical Arsenal</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillCategories.map(({ label, key, color }) => (
              <div
                key={key}
                className="bg-slate-900/80 border border-slate-800 rounded-xl p-4"
              >
                <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-3">
                  {label}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {skills[key].map((skill) => (
                    <span
                      key={skill}
                      className={`text-xs px-2.5 py-1 rounded-lg border ${colorMap[color]}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
