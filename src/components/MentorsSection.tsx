import { User } from "lucide-react";
import person from "/person.png";
import zyndly from "/mentor-zyndly.jpg";

const mentors = [
  { name: "Zyndly Baja", role: "Full-Stack Developer", org: "Farmyra", photo: zyndly },
  { name: "Seth Abangan", role: "AI/ML Expert", org: "TBA", photo: person },
  { name: "TBA", role: "TBA", org: "TBA", photo: person },
  { name: "TBA", role: "TBA", org: "TBA", photo: person },
  { name: "TBA", role: "TBA", org: "TBA", photo: person },
];

const MentorsSection = () => {
  return (
    <section id="mentors" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="font-display text-sm tracking-[0.3em] text-primary mb-3">GUIDANCE & SUPPORT</p>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
            Mentors
          </h2>
          <div className="w-12 h-px bg-primary/50 mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
          {mentors.map((mentor, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className="w-28 h-28 rounded-full border border-border bg-secondary flex items-center justify-center mb-3 group-hover:border-primary/40 transition-colors overflow-hidden">
                <img 
                  src={mentor.photo} 
                  alt={`${mentor.name} photo`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = '<div class="w-8 h-8 text-muted-foreground"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></div>';
                    }
                  }}
                />
              </div>
              <h4 className="font-display text-xs font-semibold text-foreground leading-tight">{mentor.name}</h4>
              <p className="text-xs text-muted-foreground mt-1 leading-tight">{mentor.role}</p>
              <p className="text-xs text-primary/60 leading-tight">{mentor.org}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MentorsSection;