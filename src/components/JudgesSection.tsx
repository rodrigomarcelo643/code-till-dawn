import { User } from "lucide-react";

const judges = [
  { name: "Judge 1", role: "Industry Expert", org: "TBA" },
  { name: "Judge 2", role: "Tech Lead", org: "TBA" },
  { name: "Judge 3", role: "Mentor", org: "TBA" },
  { name: "Judge 4", role: "Academic Advisor", org: "TBA" },
];

const JudgesSection = () => {
  return (
    <section id="judges" className="py-24 px-4 bg-grid">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-display text-sm tracking-[0.3em] text-primary mb-3">THE PANEL</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Judges & Mentors
          </h2>
          <div className="w-16 h-px bg-primary/50 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {judges.map((judge, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-full border-2 border-border bg-secondary flex items-center justify-center mb-4 group-hover:border-primary/40 transition-colors group-hover:box-glow">
                <User className="w-10 h-10 text-muted-foreground" />
              </div>
              <h4 className="font-display text-sm font-semibold text-foreground">{judge.name}</h4>
              <p className="text-xs text-muted-foreground mt-1">{judge.role}</p>
              <p className="text-xs text-primary/60">{judge.org}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JudgesSection;
