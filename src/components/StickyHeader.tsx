import { useState, useEffect } from "react";
import logo from "@/assets/adbullet-logo.png";

const StickyHeader = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy-deep/95 backdrop-blur-md shadow-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <img src={logo} alt="AdBullet" className="h-8" />

        <a
          href="https://adbullet.co.in/Adbullet-Purchase/index.php"
          rel="noopener noreferrer"
          className="bg-primary text-primary-foreground font-semibold px-5 py-2 rounded-lg text-sm hover:bg-purple-light transition-colors inline-block text-center"
        >
          Book Your Call – ₹2999
        </a>
      </div>
    </header>
  );
};

export default StickyHeader;
