import googlePartnerBadge from "@/assets/google-partner-badge.jpeg";
import metaPartnerBadge from "@/assets/meta.jpeg";
import linkedinPartnerBadge from "@/assets/linkedin.jpg";
import quoraPartnerBadge from "@/assets/quora.jpg";

const partners = [
  {
    image: googlePartnerBadge,
    border: "border-red-500",
  },
  {
    image: metaPartnerBadge,
    border: "border-yellow-500",
  },
  {
    image: linkedinPartnerBadge,
    border: "border-green-500",
  },
  {
    image: quoraPartnerBadge,
    border: "border-red-500",
  },
];

const TrustSection = () => (
  <section className="bg-section-alt py-20 border-y border-border">
    <div className="container mx-auto px-6">

      {/* Section Heading */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
          Official Partner
        </h2>
        <p className="text-muted-foreground">
          Official platform partnerships and proven performance at scale.
        </p>
      </div>

      {/* Partner Logos */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 place-items-center mb-16">
        {partners.map((partner, i) => (
          <div
            key={i}
            className={`
              bg-white 
              rounded-2xl 
              p-6 
              w-full 
              max-w-[240px] 
              flex 
              items-center 
              justify-center 
              border-4 
              ${partner.border}
              shadow-xl
              hover:scale-105 
              transition duration-300
            `}
          >
            <img
              src={partner.image}
              alt="Partner Badge"
              className="h-20 md:h-24 object-contain"
            />
          </div>
        ))}
      </div>

    </div>
  </section>
);

export default TrustSection;