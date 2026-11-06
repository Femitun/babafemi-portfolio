import { personal } from "../data/portfolioData";
import { Mail, BookOpen, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        {/* Header */}
        <span className="text-emerald-400 text-sm font-semibold uppercase tracking-widest">
          Let's Connect
        </span>
        <h2 className="text-4xl sm:text-5xl font-black text-white mt-2 mb-4">
          Get in Touch
        </h2>
        <p className="text-slate-400 text-base leading-relaxed mb-10">
          Whether it's a fellowship conversation, a collaboration, or just a good
          engineering discussion — my inbox is always open.
        </p>

        {/* Primary CTA */}
        <a
          href={personal.links.email}
          className="inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-8 py-4 rounded-2xl transition-colors duration-200 text-lg mb-12"
        >
          <Mail size={20} />
          Send me an Email
          <ArrowUpRight size={18} />
        </a>

        {/* Social Row */}
        <div className="flex justify-center gap-6">
          {[
            {
              href: personal.links.github,
              icon: <FaGithub size={20} />,
              label: "GitHub",
              hoverColor: "hover:text-white hover:border-white/30",
            },
            {
              href: personal.links.linkedin,
              icon: <FaLinkedin size={20} />,
              label: "LinkedIn",
              hoverColor: "hover:text-blue-400 hover:border-blue-400/30",
            },
            {
              href: personal.links.medium,
              icon: <BookOpen size={20} />,
              label: "Medium",
              hoverColor: "hover:text-green-400 hover:border-green-400/30",
            },
          ].map(({ href, icon, label, hoverColor }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col items-center gap-2 text-slate-500 border border-slate-800 rounded-xl px-6 py-4 transition-all duration-200 ${hoverColor}`}
            >
              {icon}
              <span className="text-xs font-medium">{label}</span>
            </a>
          ))}
        </div>

        {/* Footer */}
        <p className="text-slate-700 text-xs mt-16">
          Built with React + Vite + Tailwind CSS · {new Date().getFullYear()}
        </p>
      </div>
    </section>
  );
}
