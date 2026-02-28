import gvImage from "@/assets/gv-director.png";
import { Sparkles } from "lucide-react";

const HeroSection = () => {
  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-hero-gradient min-h-screen flex items-center pt-20 pb-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-foreground">
              B2B / B2C{" "}
              <span className="text-gradient-purple">Digital Marketing</span>{" "}
              Consultation
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
              Know the Right Budget, Platform & Strategy First
            </p>

            {/* Badge */}
            <a
              href="https://adbullet.co.in/Adbullet-Purchase/index.php"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-gold rounded-full px-6 py-3 gold-glow hover:scale-105 transition duration-300 cursor-pointer"
            >
              <Sparkles className="text-gold w-5 h-5" />
              <span className="text-gradient-gold font-bold text-lg">
                Book Your Strategy Call – Just @ ₹2999
              </span>
            </a>

            <div className="space-y-3">
              <a
                href="https://adbullet.co.in/Adbullet-Purchase/index.php"
                className="bg-primary text-primary-foreground font-bold text-lg px-10 py-4 rounded-xl hover:bg-purple-light transition-all animate-pulse-purple inline-block text-center"
              >
                Book Your Call Now
              </a>
              <p className="text-destructive font-medium text-sm tracking-wide uppercase">
                ⏳ Limited Slots Available
              </p>
            </div>
          </div>

          {/* Right - GV Image */}
          <div className="flex flex-col items-center lg:items-end">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-br from-primary/30 via-primary/10 to-transparent rounded-2xl blur-xl" />
              <img
                src={gvImage}
                alt="GV - Director of AdBullet.co.in"
                className="relative rounded-2xl w-72 md:w-80 lg:w-96 object-cover shadow-2xl border border-primary/30"
              />
            </div>
            <div className="mt-4 text-center">
              <p className="font-display text-xl font-bold text-foreground">GV</p>
              <p className="text-muted-foreground text-sm">Director – AdBullet.co.in</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
