import mediaRepublic from "@/assets/media-republic.jpeg";
import mediaDailyhunt from "@/assets/media-dailyhunt.jpeg";
import mediaAni from "@/assets/media-ani.jpeg";
import mediaMidday from "@/assets/media-midday.jpeg";
import mediaTheprint from "@/assets/media-theprint.jpeg";

const mediaItems = [
  { img: mediaRepublic, label: "Republic News" },
  { img: mediaDailyhunt, label: "Daily Hunt" },
  { img: mediaAni, label: "ANI News" },
  { img: mediaMidday, label: "Mid-Day" },
  { img: mediaTheprint, label: "The Print" },
];

const ARTICLE_URL =
  "https://aninews.in/news/business/leads-beyond-google-search-and-meta-gopal-vermas-ad-bullet-is-transforming-lead-generation20250219183825/";

const FeaturedMediaSection = () => (
  <section className="bg-hero-gradient py-20">
    <div className="container mx-auto px-4">
      <h2 className="font-display text-3xl md:text-4xl font-extrabold text-center mb-4 text-foreground">
        Featured In <span className="text-gradient-purple">Media</span>
      </h2>
      <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
        AdBullet's digital marketing expertise has been recognized by leading news platforms across India.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {mediaItems.map((item) => (
          <a
            key={item.label}
            href={ARTICLE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group card-glass rounded-xl overflow-hidden card-glass-hover transition-all"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={item.img}
                alt={`Featured In ${item.label}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <p className="text-center text-sm font-semibold text-foreground py-3">{item.label}</p>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedMediaSection;
