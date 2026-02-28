import { TrendingUp, Users, BarChart3, Target } from "lucide-react";

const caseStudies = [
  {
    icon: TrendingUp,
    industry: "Real Estate",
    type: "B2B",
    result: "3X Lead Volume",
    detail: "Reduced CPL by 62% and generated 3,000+ qualified leads in 6 months through Google & Meta Ads.",
    metric: "62% Lower CPL",
  },
  {
    icon: Users,
    industry: "EdTech SaaS",
    type: "B2B",
    result: "5X ROAS",
    detail: "Scaled monthly ad spend from ₹2L to ₹15L while maintaining 5X return on ad spend with LinkedIn + Google.",
    metric: "₹15L Monthly Scale",
  },
  {
    icon: BarChart3,
    industry: "E-commerce Fashion",
    type: "B2C",
    result: "4.2X Revenue Growth",
    detail: "Drove ₹2.1 Cr revenue in Q4 through Meta & Google Shopping campaigns with optimized product feeds.",
    metric: "₹2.1 Cr Revenue",
  },
  {
    icon: Target,
    industry: "Healthcare Chain",
    type: "B2C",
    result: "8,500+ Appointments",
    detail: "Generated 8,500+ patient appointments across 12 clinic locations with hyper-local Google Ads strategy.",
    metric: "12 Cities Covered",
  },
];

const CaseStudiesSection = () => (
  <section className="bg-section-alt py-20">
    <div className="container mx-auto px-4">
      <h2 className="font-display text-3xl md:text-4xl font-extrabold text-center mb-4 text-foreground">
        Case <span className="text-gradient-purple">Studies</span>
      </h2>
      <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
        Real results from real campaigns. Here's how we've driven growth for businesses like yours.
      </p>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {caseStudies.map((cs) => (
          <div
            key={cs.industry}
            className="card-glass rounded-xl p-6 card-glass-hover transition-all group"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg shrink-0 group-hover:bg-primary/20 transition-colors">
                <cs.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-semibold bg-primary/20 text-primary px-2 py-0.5 rounded-full">
                    {cs.type}
                  </span>
                  <span className="text-xs text-muted-foreground">{cs.industry}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{cs.result}</h3>
                <p className="text-sm text-muted-foreground mb-3">{cs.detail}</p>
                <div className="inline-block bg-gold/10 border border-gold/30 rounded-md px-3 py-1">
                  <span className="text-sm font-semibold text-gold">{cs.metric}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CaseStudiesSection;
