import { Trophy, Star, Award, Medal } from "lucide-react";

const awards = [
  {
    icon: Trophy,
    title: "Google Premier Partner",
    description: "Recognized as a top-performing Google Ads agency in India",
    year: "2024",
  },
  {
    icon: Star,
    title: "Best Performance Marketing Agency",
    description: "Awarded for outstanding ROI delivery across 200+ campaigns",
    year: "2023",
  },
  {
    icon: Award,
    title: "Meta Business Partner",
    description: "Certified expertise in Meta advertising & lead generation",
    year: "2024",
  },
  {
    icon: Medal,
    title: "Top Digital Agency – Clutch",
    description: "Ranked among the best digital marketing agencies in India",
    year: "2024",
  },
];

const AwardsSection = () => (
  <section className="bg-hero-gradient py-20">
    <div className="container mx-auto px-4">
      <h2 className="font-display text-3xl md:text-4xl font-extrabold text-center mb-4 text-foreground">
        Awards & <span className="text-gradient-gold">Recognition</span>
      </h2>
      <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
        Industry-recognized excellence in digital marketing performance.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {awards.map((award) => (
          <div
            key={award.title}
            className="card-glass rounded-xl p-6 text-center card-glass-hover transition-all group"
          >
            <div className="mx-auto w-14 h-14 flex items-center justify-center bg-gold/10 rounded-full mb-4 group-hover:bg-gold/20 transition-colors">
              <award.icon className="w-7 h-7 text-gold" />
            </div>
            <span className="text-xs font-semibold text-gold">{award.year}</span>
            <h3 className="font-bold text-foreground mt-1 mb-2 text-sm">{award.title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{award.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AwardsSection;
