const sponsors = ["Sponsor 1", "Sponsor 2", "Sponsor 3", "Sponsor 4", "Sponsor 5"];

const SponsorsSection = () => {
  return (
    <section id="sponsors" className="py-20 px-4 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <p className="font-display text-sm tracking-[0.3em] text-primary text-center mb-10">
          OUR SPONSORS
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {sponsors.map((s, i) => (
            <div
              key={i}
              className="px-8 py-4 border border-border rounded-md text-muted-foreground font-display text-sm tracking-wider hover:border-primary/20 hover:text-primary/60 transition-colors"
            >
              {s}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
