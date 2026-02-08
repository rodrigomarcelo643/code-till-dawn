import zeroTen from "/zero_ten_park_logo.png";
import manangs from "/manangs_logo.png";
import tresAmigos from "/tres_amigos_logo.jpg";

const sponsorTiers = {
  platinum: [
    { name: "Zero-Ten Park Cebu", logo: zeroTen }
  ],
  // gold: [
  //   { name: "Manang's Cafe", logo: manangs },
  //   { name: "Tres Amigos", logo: tresAmigos },
  // ],
  silver: [
    { name: "Manang's Cafe", logo: manangs },
    { name: "Tres Amigos", logo: tresAmigos },
  ],
  //   bronze: [
  //   { name: "Manang's Cafe", logo: manangs },
  //   { name: "Tres Amigos", logo: tresAmigos },
  // ],
};

const tierStyles = {
  platinum: "p-8 border-2 border-yellow-400/60 bg-gradient-to-br from-yellow-50/10 to-yellow-100/10 shadow-lg h-40 min-w-[200px]",
  gold: "p-6 border-2 border-yellow-600/50 bg-gradient-to-br from-yellow-50/5 to-yellow-100/5 h-40 min-w-[180px]",
  silver: "p-4 border border-slate-400/40 bg-gradient-to-br from-slate-50/5 to-slate-100/5 h-40 min-w-[160px]",
  bronze: "p-3 border border-orange-600/30 bg-gradient-to-br from-orange-50/5 to-orange-100/5 h-36 min-w-[140px]"
};

const tierImageSizes = {
  platinum: "h-24 h-24 w-auto max-w-48",
  gold: "h-24 w-auto max-w-40",
  silver: "h-20 w-auto max-w-32",
  bronze: "h-18 w-auto max-w-24"
};

const tierLabels = {
  platinum: "PLATINUM SPONSORS",
  gold: "GOLD SPONSORS", 
  silver: "SILVER SPONSORS",
  bronze: "BRONZE SPONSORS"
};

const SponsorsSection = () => {
  return (
    <section id="sponsors" className="py-20 px-4 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <p className="font-display text-sm tracking-[0.3em] text-primary text-center mb-16">
          OUR SPONSORS
        </p>
        
        <div className="space-y-12">
          {Object.entries(sponsorTiers).map(([tier, sponsors]) => (
            <div key={tier} className="text-center">
              <h3 className="font-display text-xs tracking-[0.2em] text-muted-foreground/60 mb-6">
                {tierLabels[tier as keyof typeof tierLabels]}
              </h3>
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
                {sponsors.map((sponsor, i) => (
                  <div
                    key={i}
                    className={`${tierStyles[tier as keyof typeof tierStyles]} hover:scale-105 transition-all duration-200 rounded-lg flex flex-col items-center justify-center gap-3`}
                  >
                    <img 
                      src={sponsor.logo} 
                      alt={`${sponsor.name} logo`}
                      className={`${tierImageSizes[tier as keyof typeof tierImageSizes]} object-contain opacity-80 hover:opacity-100 transition-opacity`}
                      onError={(e) => {
                        // Hide the image if it fails to load but keep the text
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                    <span className="font-display tracking-wider text-muted-foreground text-xs text-center">
                      {sponsor.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
