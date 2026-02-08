import swudevs from "/swudevs_logo.png";
import itsc from "/ITSC_logo.png";
import awscc from "/awscc_logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Organizer Logos - Top Row */}
        <div className="flex items-center justify-center gap-1 mb-8">
          <img 
            src={itsc}
            alt="CITE Student Council" 
            className="w-12 h-12 md:w-16 md:h-16 object-contain opacity-80 hover:opacity-100 transition-opacity"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
          <img 
            src={swudevs} 
            alt="SwuDevs" 
            className="w-12 h-12 md:w-44 md:h-24 object-contain opacity-80 hover:opacity-100 transition-opacity"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
          <img 
            src={awscc} 
            alt="AWSCC - SWU PHINMA" 
            className="w-12 h-12 md:w-16 md:h-16 object-contain opacity-80 hover:opacity-100 transition-opacity"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
        </div>

        {/* Main Title */}
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
          CODE TILL DAWN 2026
        </h2>
        
        {/* Tagline */}
        <p className="text-base md:text-lg text-foreground/80 mb-6">
          24 Hours. Infinite Innovation. One Winning Solution.
        </p>

        {/* Event Details */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-muted-foreground mb-10">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <span>February 15–16, 2026</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <span>Cebu, Philippines</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <span>Code & Create</span>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-8 text-xs">
          <a href="#rules" className="text-muted-foreground hover:text-primary transition-colors">Rules</a>
          <a href="#timeline" className="text-muted-foreground hover:text-primary transition-colors">Timeline</a>
          <a href="#faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ</a>
          <a href="#judges" className="text-muted-foreground hover:text-primary transition-colors">Judges</a>
          <a href="#mentors" className="text-muted-foreground hover:text-primary transition-colors">Mentors</a>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-muted-foreground/60 text-center sm:text-left">
            <p className="mb-1">© 2026 All Rights Reserved</p>
            <p>Organized by <span className="text-muted-foreground">CITE Student Council, SwuDevs & AWSCC - SWU PHINMA</span></p>
          </div>
          <div className="text-xs text-muted-foreground/40">
            Made with ❤️ by Yurii Yankin
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
