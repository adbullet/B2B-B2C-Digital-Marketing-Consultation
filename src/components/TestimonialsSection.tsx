import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Received great support from Gopal in helping us grow the business. Go with closed eyes and they will help you!",
    name: "Nitika Dial",
  },
  {
    text: "We have recently been working with Mr. Gopal for our real estate campaigns. After working with ADBullets, we noticed a significant reduction in our CPL and an increase in genuine queries. We highly recommend this agency.",
    name: "Gourav Dhingra",
  },
  {
    text: "You people are doing Wonderful job✨️ Getting best results. Thanks sir for always prompt response!",
    name: "NexGen Health",
  },
];

const TestimonialsSection = () => (
  <section className="bg-section-alt py-20">
    <div className="container mx-auto px-4">
      <h2 className="font-display text-3xl md:text-4xl font-extrabold text-center mb-12 text-foreground">
        What Our <span className="text-gradient-purple">Clients Say</span>
      </h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t) => (
          <div key={t.name} className="card-glass rounded-xl p-6 card-glass-hover transition-all flex flex-col">
            <Quote className="w-8 h-8 text-primary/40 mb-4" />
            <p className="text-muted-foreground text-sm flex-1 leading-relaxed mb-4">
              "{t.text}"
            </p>
            <p className="font-bold text-foreground text-sm">— {t.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
