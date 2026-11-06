import { useState, useEffect } from "react";
import { personal } from "../data/portfolioData";
import { Menu, X, Download } from "lucide-react";

const navLinks = [
  { label: "Impact", href: "#impact" },
  { label: "AI Work", href: "#ai-work" },
  { label: "Projects", href: "#projects" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/90 backdrop-blur-md border-b border-slate-800/60"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="text-white font-black text-xl tracking-tight hover:text-emerald-400 transition-colors"
        >
          {personal.name}
          <span className="text-emerald-400">.</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="text-slate-400 hover:text-white text-sm font-medium transition-colors duration-200"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Resume button */}
        <a
          href={personal.links.resume}
          download
          className="hidden md:inline-flex items-center gap-2 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-sm font-semibold px-4 py-2 rounded-xl transition-all duration-200"
        >
          <Download size={14} />
          Resume
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen((o) => !o)}
          className="md:hidden text-slate-400 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-md border-b border-slate-800 px-6 pb-6">
          <ul className="flex flex-col gap-4 pt-4">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="text-slate-300 hover:text-emerald-400 text-base font-medium transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={personal.links.resume}
                download
                className="inline-flex items-center gap-2 text-emerald-400 text-sm font-semibold"
              >
                <Download size={14} />
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
