import spartanShield from "@/assets/spartan-shield.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid">
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(198_100%_47%/0.08)_0%,_transparent_70%)]" />
      
      <div className="relative z-10 flex flex-col items-center text-center px-4 py-20">
        {/* Shield logo */}
        <div className="mb-8 animate-float">
          <img 
            src={spartanShield} 
            alt="CITE Spartan Shield" 
            className="w-40 h-40 md:w-56 md:h-56 object-contain drop-shadow-[0_0_30px_hsl(198_100%_47%/0.4)]"
          />
        </div>

        {/* Main headline */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-glow text-primary mb-4">
          CODE TIL DAWN
        </h1>
        <p className="font-display text-xl md:text-2xl font-medium text-primary/70 tracking-widest mb-6">
          2 0 2 6
        </p>

        {/* Sub-headline */}
        <p className="text-lg md:text-xl text-foreground/80 max-w-xl mb-4 font-light">
          24 Hours. Infinite Innovation. One Winning Solution.
        </p>

        {/* Date */}
        <div className="inline-flex items-center gap-3 border border-primary/20 rounded-full px-6 py-3 box-glow mt-4">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
          <span className="font-display text-sm md:text-base tracking-widest text-primary">
            FEBRUARY 15–16, 2026
          </span>
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <a
            href="#timeline"
            className="px-8 py-3 bg-primary text-primary-foreground font-display font-semibold text-sm tracking-wider rounded-md hover:bg-primary/90 transition-all box-glow-strong hover:scale-105"
          >
            VIEW SCHEDULE
          </a>
          <a
            href="#rules"
            className="px-8 py-3 border border-primary/30 text-primary font-display font-semibold text-sm tracking-wider rounded-md hover:bg-primary/10 transition-all"
          >
            READ THE RULES
          </a>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
