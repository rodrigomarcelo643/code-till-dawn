import { useState } from "react";
import { Menu, X } from "lucide-react";
import spartanShield from "/code_till_dawn_logo.svg";

const links = [
  { label: "Rules", href: "#rules" },
  { label: "Timeline", href: "#timeline" },
  { label: "FAQ", href: "#faq" },
  { label: "Judges", href: "#judges" },
  { label: "Mentors", href: "#mentors" },
  { label: "Winners", href: "#winners" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <a href="#" className="font-display text-sm font-bold text-primary tracking-wider flex items-center gap-2">
          <img src={spartanShield} alt="Code Till Dawn Logo" className="w-6 h-6" />
          CTD 2026
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-xs text-muted-foreground hover:text-primary transition-colors tracking-wider font-display">
              {l.label.toUpperCase()}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 text-sm text-muted-foreground hover:text-primary font-display tracking-wider border-b border-border/30"
            >
              {l.label.toUpperCase()}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
