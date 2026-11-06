import { personal } from "../data/portfolioData";
import { BookOpen, Mail, Download, ExternalLink } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20 pb-16 relative overflow-hidden"
    >
      {/* Background glow blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />

      {/* Status badge */}
      <span className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium px-4 py-1.5 rounded-full mb-6 animate-pulse">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
        {personal.status}
      </span>

      {/* Name */}
      <h1 className="text-5xl sm:text-7xl font-black tracking-tight text-white mb-4">
        {personal.name}
      </h1>

      {/* Title */}
      <p className="text-xl sm:text-2xl font-semibold text-emerald-400 mb-3">
        {personal.title}
      </p>

      {/* Tagline */}
      <p className="text-slate-400 max-w-2xl text-base sm:text-lg leading-relaxed mb-4">
        {personal.tagline}
      </p>

      {/* Bio */}
      <p className="text-slate-500 max-w-xl text-sm sm:text-base leading-relaxed mb-8">
        {personal.bio}
      </p>

      {/* CGPA badge */}
      <div className="flex items-center gap-2 bg-slate-800/60 border border-slate-700 rounded-full px-5 py-2 mb-10">
        <span className="text-yellow-400 text-lg">🏅</span>
        <span className="text-slate-300 text-sm font-medium">
          {personal.cgpa} CGPA · {personal.university} · {personal.degree}
        </span>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-wrap gap-3 justify-center mb-10">
        <a
          href={personal.links.resume}
          download
          className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold px-6 py-3 rounded-xl transition-colors duration-200"
        >
          <Download size={16} />
          Download Resume
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 border border-slate-600 hover:border-emerald-500 text-slate-300 hover:text-emerald-400 font-medium px-6 py-3 rounded-xl transition-colors duration-200"
        >
          <ExternalLink size={16} />
          Get in Touch
        </a>
      </div>

      {/* Social Links */}
      <div className="flex gap-5 text-slate-500">
        <a
          href={personal.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors duration-200"
          aria-label="GitHub"
        >
          <FaGithub size={22} />
        </a>
        <a
          href={personal.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-colors duration-200"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={22} />
        </a>
        <a
          href={personal.links.medium}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-400 transition-colors duration-200"
          aria-label="Medium"
        >
          <BookOpen size={22} />
        </a>
        <a
          href={personal.links.email}
          className="hover:text-emerald-400 transition-colors duration-200"
          aria-label="Email"
        >
          <Mail size={22} />
        </a>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-600 text-xs">
        <span>scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent" />
      </div>
    </section>
  );
}
