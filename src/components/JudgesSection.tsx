import { User } from "lucide-react";
import mel from "/judge-mel.jpg";
import jason from "/judge-jason.jpg";
import jaive from "/judge-jaive.jpg";
import person from "/person.png";

const judges = [
  { name: "Melissa Lagat", role: "Startup Accelerator", org: "DOHE Philippines", photo: mel },
  { name: "Jason Nieva", role: "Startup Incubator", org: "UP Cebu TTBDO", photo: jason },
  { name: "Jaive Joseph Roble", role: "AI/ML Expert", org: "Danao CICTO", photo: jaive },
  { name: "Jerric Wayne Wong", role: "TBA", org: "TBA", photo: person },
];

const JudgesSection = () => {
  return (
    <section id="judges" className="py-24 px-4 bg-grid">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-display text-sm tracking-[0.3em] text-primary mb-3">THE PANEL</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Judges
          </h2>
          <div className="w-16 h-px bg-primary/50 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {judges.map((judge, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className="w-36 h-36 rounded-full border-2 border-border bg-secondary flex items-center justify-center mb-4 group-hover:border-primary/40 transition-colors group-hover:box-glow overflow-hidden">
                {/* <User className="w-10 h-10 text-muted-foreground" /> */}
                 <img 
                    src={judge.photo} 
                    alt={`${judge.name} photo`}
                    className={`object-contain text-muted-foreground`}
                    onError={(e) => {
                      // Hide the image if it fails to load but keep the text
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
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
