const day1Events = [
  { time: "12:00 PM", title: "Registration", desc: "Check in and get your badges" },
  { time: "1:00 PM", title: "Opening Ceremony", desc: "Welcome and introductions" },
  { time: "1:30 PM", title: "Speaker Session", desc: "Mr. Jaive Roble" },
  { time: "4:00 PM", title: "Coding Commencement", desc: "The clock starts now" },
];

const day2Events = [
  { time: "7:00 AM", title: "Project Finalization", desc: "Last chance to polish" },
  { time: "9:30 AM", title: "Submission of Deliverables", desc: "Submit your repos & decks" },
  { time: "10:00 AM", title: "Final Pitching & Judging", desc: "5 min demo + 5 min Q&A per team" },
  { time: "1:00 PM", title: "Awarding Ceremony", desc: "Celebrate the winners" },
];

interface TimelineItemProps {
  time: string;
  title: string;
  desc: string;
  isLast?: boolean;
}

const TimelineItem = ({ time, title, desc, isLast }: TimelineItemProps) => (
  <div className="relative flex gap-6 pb-10 group">
    {/* Line */}
    {!isLast && (
      <div className="absolute left-[11px] top-6 w-px h-full bg-gradient-to-b from-primary/40 to-primary/10" />
    )}
    {/* Dot */}
    <div className="relative z-10 mt-1.5">
      <div className="w-6 h-6 rounded-full border-2 border-primary/50 bg-background flex items-center justify-center group-hover:border-primary transition-colors">
        <div className="w-2 h-2 rounded-full bg-primary group-hover:animate-pulse-glow" />
      </div>
    </div>
    {/* Content */}
    <div className="flex-1">
      <span className="font-display text-xs tracking-widest text-primary">{time}</span>
      <h4 className="font-display text-base font-semibold text-foreground mt-1">{title}</h4>
      <p className="text-sm text-muted-foreground mt-1">{desc}</p>
    </div>
  </div>
);

const TimelineSection = () => {
  return (
    <section id="timeline" className="py-24 px-4 bg-grid">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-display text-sm tracking-[0.3em] text-primary mb-3">PROGRAM FLOW</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            24-Hour Timeline
          </h2>
          <div className="w-16 h-px bg-primary/50 mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Day 1 */}
          <div>
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 border border-primary/20 rounded-full">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
              <span className="font-display text-xs tracking-widest text-primary">DAY 1 — FEB 15</span>
            </div>
            <div>
              {day1Events.map((event, i) => (
                <TimelineItem key={i} {...event} isLast={i === day1Events.length - 1} />
              ))}
            </div>
          </div>

          {/* Day 2 */}
          <div>
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 border border-primary/20 rounded-full">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
              <span className="font-display text-xs tracking-widest text-primary">DAY 2 — FEB 16</span>
            </div>
            <div>
              {day2Events.map((event, i) => (
                <TimelineItem key={i} {...event} isLast={i === day2Events.length - 1} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
