import { Shield, Award, Linkedin, HelpCircle } from "lucide-react";
import googlePartnerBadge from "@/assets/google-partner-badge.svg";
import metaPartnerBadge from "@/assets/meta.jpg";
import linkedinPartnerBadge from "@/assets/linkedin.jpg";
import quoraPartnerBadge from "@/assets/quora.jpg";

const badges = [
  { icon: Shield, label: "Google Partner" },
  { icon: Award, label: "Meta Partner" },
  { icon: Linkedin, label: "LinkedIn Certified" },
  { icon: HelpCircle, label: "Quora Marketing Partner" },
];

const metrics = [
  { value: "500M+", label: "Ad Budget Managed" },
  { value: "20M+", label: "Leads Generated" },
];

const TrustSection = () => (
  <section className="bg-section-alt py-20 border-y border-border">
    <div className="container mx-auto px-6">

      {/* Section Heading */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
          Trusted & Certified Partners
        </h2>
        <p className="text-muted-foreground">
          Official platform partnerships and proven performance at scale.
        </p>
      </div>

      {/* Partner Logos */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 place-items-center mb-16">
        {[googlePartnerBadge, metaPartnerBadge, linkedinPartnerBadge, quoraPartnerBadge].map((logo, i) => (
          <div
            key={i}
            className="bg-white/5 backdrop-blur-sm border border-border rounded-xl p-6 w-full flex items-center justify-center hover:scale-105 transition"
          >
            <img
              src={logo}
              alt="Partner Badge"
              className="h-16 md:h-20 object-contain"
            />
          </div>
        ))}
      </div>

      {/* Certification Tags */}
      <div className="flex flex-wrap justify-center gap-6 mb-16">
        {badges.map((b) => (
          <div
            key={b.label}
            className="flex items-center gap-3 bg-white/5 border border-border rounded-full px-6 py-3 hover:bg-white/10 transition"
          >
            <b.icon className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">{b.label}</span>
          </div>
        ))}
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-3xl mx-auto">
        {metrics.map((m) => (
          <div
            key={m.label}
            className="bg-white/5 border border-border rounded-2xl p-8 text-center hover:shadow-lg transition"
          >
            <p className="text-4xl md:text-5xl font-extrabold text-gradient-gold font-display">
              {m.value}
            </p>
            <p className="text-muted-foreground mt-3 text-sm uppercase tracking-wide">
              {m.label}
            </p>
          </div>
        ))}
      </div>

    </div>
  </section>
);

export default TrustSection;