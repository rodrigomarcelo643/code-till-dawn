import { Users, GitBranch, Bot, ShieldCheck, Code, FileText } from "lucide-react";

const rules = [
  {
    icon: Users,
    title: "Team Composition",
    description: "3–5 members per team with a designated leader and an appropriate team name.",
  },
  {
    icon: Code,
    title: "Technical Requirements",
    description: "Projects must be built during the hackathon timeframe. Any programming language, library, or framework is allowed.",
  },
  {
    icon: GitBranch,
    title: "Repository",
    description: "All codebases must be hosted on GitHub with a proper README file.",
  },
  {
    icon: Bot,
    title: "AI Policy",
    description: "Generative AI is permitted, provided it does not make up the majority of the project.",
  },
  {
    icon: ShieldCheck,
    title: "Ethics",
    description: "Plagiarism is strictly prohibited; proper credit must be given to third-party assets.",
  },
  {
    icon: FileText,
    title: "Inclusivity",
    description: "Use inclusive and gender-neutral language throughout your project and presentation.",
  },
];

const RulesSection = () => {
  return (
    <section id="rules" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-display text-sm tracking-[0.3em] text-primary mb-3">THE MECHANICS</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Rules of Engagement
          </h2>
          <div className="w-16 h-px bg-primary/50 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rules.map((rule, index) => (
            <div
              key={index}
              className="group relative border border-border rounded-lg p-6 bg-card hover:border-primary/30 transition-all duration-300 hover:box-glow"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-md bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <rule.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-sm font-semibold text-foreground mb-2">
                    {rule.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {rule.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RulesSection;
