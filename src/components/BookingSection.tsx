import { useState } from "react";
import { Sparkles } from "lucide-react";
import { toast } from "sonner";

const budgetOptions = [
  "Under ₹50,000",
  "₹50,000 – ₹1 Lakh",
  "₹1 Lakh – ₹5 Lakhs",
  "₹5 Lakhs – ₹10 Lakhs",
  "₹10 Lakhs+",
];

const BookingSection = () => {
  const [form, setForm] = useState({
    name: "",
    business: "",
    phone: "",
    email: "",
    budget: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.email || !form.budget) {
      toast.error("Please fill in all required fields");
      return;
    }
    toast.success("Thank you! We'll contact you shortly to confirm your strategy call.");
    setForm({ name: "", business: "", phone: "", email: "", budget: "" });
  };

  const inputClass =
    "w-full bg-muted border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-colors";

  return (
    <section id="booking" className="bg-section-alt py-20">
      <div className="container mx-auto px-4 max-w-2xl">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-3 border border-gold rounded-full px-6 py-3 gold-glow">
            <Sparkles className="w-5 h-5 text-gold" />
            <span className="text-gradient-gold font-bold text-lg">
              Strategy Consultation – ₹199 Only
            </span>
          </div>
        </div>

        <h2 className="font-display text-3xl md:text-4xl font-extrabold text-center mb-10 text-foreground">
          Book Your <span className="text-gradient-purple">Strategy Call</span>
        </h2>

        <form onSubmit={handleSubmit} className="card-glass rounded-2xl p-8 space-y-5">
          <input type="text" placeholder="Your Name *" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} />
          <input type="text" placeholder="Business Name" value={form.business} onChange={(e) => setForm({ ...form, business: e.target.value })} className={inputClass} />
          <input type="tel" placeholder="Phone Number *" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputClass} />
          <input type="email" placeholder="Email Address *" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} />
          <select value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })} className={inputClass}>
            <option value="" disabled>Monthly Marketing Budget *</option>
            {budgetOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>

          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground font-bold text-lg py-4 rounded-xl hover:bg-purple-light transition-colors animate-pulse-purple"
          >
            Book My Strategy Call
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookingSection;
