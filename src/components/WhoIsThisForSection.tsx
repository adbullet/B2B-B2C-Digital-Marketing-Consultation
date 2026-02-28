import { Briefcase, ShoppingCart } from "lucide-react";

const b2b = ["SaaS", "Real Estate", "Education", "Healthcare", "Manufacturing"];
const b2c = ["E-commerce", "Interior Designers", "Local Businesses", "Coaches", "Service Providers"];

const WhoIsThisForSection = () => (
  <section className="bg-hero-gradient py-20">
    <div className="container mx-auto px-4">
      <h2 className="font-display text-3xl md:text-4xl font-extrabold text-center mb-12 text-foreground">
        Who Is <span className="text-gradient-purple">This For?</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        <div className="card-glass rounded-xl p-8 card-glass-hover transition-all">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Briefcase className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground">B2B</h3>
          </div>
          <ul className="space-y-3">
            {b2b.map((i) => (
              <li key={i} className="flex items-center gap-3 text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                {i}
              </li>
            ))}
          </ul>
        </div>
        <div className="card-glass rounded-xl p-8 card-glass-hover transition-all">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-primary/10 rounded-lg">
              <ShoppingCart className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground">B2C</h3>
          </div>
          <ul className="space-y-3">
            {b2c.map((i) => (
              <li key={i} className="flex items-center gap-3 text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                {i}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default WhoIsThisForSection;
