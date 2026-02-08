import { Trophy } from "lucide-react";

const winners = [
  { place: "2nd", label: "Runner-Up", color: "text-foreground/60" },
  { place: "1st", label: "Champion", color: "text-yellow-400" },
  { place: "3rd", label: "Second Runner-Up", color: "text-amber-700" },
];

const WinnersSection = () => {
  return (
    <section id="winners" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-display text-sm tracking-[0.3em] text-primary mb-3">HALL OF FAME</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Winners
          </h2>
          <div className="w-16 h-px bg-primary/50 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {winners.map((w, i) => (
            <div
              key={i}
              className={`relative border border-border rounded-lg p-8 bg-card text-center hover:border-primary/30 transition-all hover:box-glow ${
                i === 1 ? "md:-mt-4 border-primary/20 box-glow" : ""
              }`}
            >
              <Trophy className={`w-10 h-10 mx-auto mb-4 ${w.color}`} />
              <p className="font-display text-3xl font-bold text-foreground mb-1">{w.place}</p>
              <p className="font-display text-xs tracking-widest text-primary mb-6">{w.label}</p>
              <div className="w-20 h-20 rounded-full bg-secondary mx-auto mb-4" />
              <p className="text-sm text-muted-foreground">Team Name TBA</p>
              <p className="text-xs text-muted-foreground/60 mt-1">Project Name TBA</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WinnersSection;
