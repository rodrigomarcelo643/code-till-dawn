const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-display text-sm font-semibold text-foreground">
            CODE TIL DAWN 2026
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Organized by the CIT Student Council
          </p>
        </div>
        <div className="flex items-center gap-6">
          <a href="#rules" className="text-xs text-muted-foreground hover:text-primary transition-colors">Rules</a>
          <a href="#timeline" className="text-xs text-muted-foreground hover:text-primary transition-colors">Timeline</a>
          <a href="#faq" className="text-xs text-muted-foreground hover:text-primary transition-colors">FAQ</a>
          <a href="#judges" className="text-xs text-muted-foreground hover:text-primary transition-colors">Judges</a>
        </div>
        <p className="text-xs text-muted-foreground/50">
          © 2026 All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
