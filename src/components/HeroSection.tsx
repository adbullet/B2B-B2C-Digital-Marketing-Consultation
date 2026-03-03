import gvImage from "@/assets/gv-director.png";
import { Sparkles } from "lucide-react";

const metrics = [
  { value: "400M+", label: "Ad Budget Managed" },
  { value: "20M+", label: "Leads Generated" },
];

const HeroSection = () => {
  return (
    <section className="bg-hero-gradient relative overflow-hidden pt-28 pb-24">

      {/* Decorative Background Glow */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-8">

            {/* Tag */}
            <div className="inline-flex items-center gap-2 bg-white/5 border border-border px-4 py-2 rounded-full text-sm text-muted-foreground backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-gold" />
              India’s Performance-Driven Marketing Experts
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-foreground">
              Ads Running. Budget Spending.{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
                But Not Getting Results?
              </span>{" "}
              
            </h1>

            {/* Subtext */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
              Know the right budget, platform & growth strategy before you invest a single rupee.
            </p>

            {/* CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">

              <a
                href="https://adbullet.co.in/Adbullet-Purchase/index.php"
                className="bg-primary text-white font-bold text-lg px-10 py-4 rounded-xl shadow-xl hover:scale-105 transition duration-300"
              >
                Book Your Call Now
              </a>

              <a
                href="https://adbullet.co.in/Adbullet-Purchase/index.php"
                className="inline-flex items-center gap-2 border border-gold rounded-full px-6 py-3 gold-glow hover:scale-105 transition duration-300"
              >
                <Sparkles className="text-gold w-5 h-5" />
                <span className="text-gradient-gold font-bold text-base">
                  Strategy Call @ ₹2999
                </span>
              </a>

            </div>

            <p className="text-destructive font-semibold text-sm tracking-wide uppercase">
              ⏳ Limited Consultation Slots Available
            </p>

          </div>

          {/* RIGHT IMAGE */}
          <div className="flex flex-col items-center lg:items-end">

            <div className="relative group">

              {/* Glow Border */}
              <div className="absolute -inset-1 bg-gradient-to-br from-purple-500 via-pink-500 to-purple-700 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500" />

              <img
                src={gvImage}
                alt="GV - Director of AdBullet.co.in"
                className="relative rounded-3xl w-80 md:w-96 object-cover shadow-2xl border border-white/10"
              />
            </div>

            <div className="mt-5 text-center lg:text-right">
              <p className="font-display text-2xl font-bold text-foreground">
                GV
              </p>
              <p className="text-muted-foreground text-sm">
                Director – AdBullet.co.in
              </p>
            </div>

          </div>

        </div>

        {/* METRICS SECTION */}
        <div className="mt-24 flex flex-wrap justify-center gap-12">

          {metrics.map((m) => (
            <div
              key={m.label}
              className="relative bg-white/5 backdrop-blur-md border border-border rounded-3xl px-14 py-10 text-center min-w-[260px] shadow-xl hover:scale-105 transition duration-300"
            >
              <p className="text-5xl font-extrabold font-display bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                {m.value}
              </p>
              <p className="text-muted-foreground mt-4 text-sm uppercase tracking-widest">
                {m.label}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default HeroSection;
