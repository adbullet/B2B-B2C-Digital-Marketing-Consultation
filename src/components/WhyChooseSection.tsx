import { CheckCircle } from "lucide-react";

const points = [
  "11+ Years Experience",
  "Google & Meta Partner Agency",
  "Performance-Focused Strategy",
  "ROI-Driven Campaign Execution",
];

const WhyChooseSection = () => (
  <section className="bg-hero-gradient py-20">
    <div className="container mx-auto px-4 max-w-3xl text-center">
      <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-10 text-foreground">
        Why Choose <span className="text-gradient-purple">AdBullet?</span>
      </h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {points.map((p) => (
          <div key={p} className="flex items-center gap-3 card-glass rounded-lg px-6 py-4 card-glass-hover transition-all">
            <CheckCircle className="w-6 h-6 text-primary shrink-0" />
            <span className="text-foreground font-medium">{p}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseSection;
