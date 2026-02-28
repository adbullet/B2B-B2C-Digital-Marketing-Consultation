import { Target, DollarSign, GitBranch, Building, TrendingUp } from "lucide-react";

const items = [
  { icon: Target, title: "Platform Selection", desc: "Google / Meta / LinkedIn" },
  { icon: DollarSign, title: "Budget Planning for ROI", desc: "Optimize every rupee spent" },
  { icon: GitBranch, title: "Funnel & Lead Strategy", desc: "End-to-end conversion path" },
  { icon: Building, title: "Industry-Specific Recommendations", desc: "Tailored to your niche" },
  { icon: TrendingUp, title: "Scaling Roadmap", desc: "Clear path to growth" },
];

const WhatYouGetSection = () => (
  <section className="bg-section-alt py-20">
    <div className="container mx-auto px-4">
      <h2 className="font-display text-3xl md:text-4xl font-extrabold text-center mb-12 text-foreground">
        What You'll Get in{" "}
        <span className="text-gradient-purple">This Call</span>
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {items.map((item) => (
          <div
            key={item.title}
            className="card-glass rounded-xl p-6 card-glass-hover transition-all group"
          >
            <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4 group-hover:bg-primary/20 transition-colors">
              <item.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-bold text-foreground text-lg mb-1">{item.title}</h3>
            <p className="text-muted-foreground text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhatYouGetSection;
