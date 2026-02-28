import mediaRepublic from "@/assets/media-republic.jpeg";
import mediaDailyhunt from "@/assets/media-dailyhunt.jpeg";
import mediaAni from "@/assets/media-ani.jpeg";
import mediaMidday from "@/assets/media-midday.jpeg";
import mediaTheprint from "@/assets/media-theprint.jpeg";

const mediaItems = [
  { img: mediaTheprint, label: "The Print", border: "border-yellow-400" },
  { img: mediaRepublic, label: "Republic News", border: "border-green-500" },
  { img: mediaMidday, label: "Mid-Day", border: "border-white" },
  { img: mediaAni, label: "ANI News", border: "border-yellow-400" },
  { img: mediaDailyhunt, label: "Daily Hunt", border: "border-green-500" },
];

const ARTICLE_URL =
  "https://aninews.in/news/business/leads-beyond-google-search-and-meta-gopal-vermas-ad-bullet-is-transforming-lead-generation20250219183825/";

const FeaturedMediaSection = () => (
  <section className="bg-hero-gradient py-20">
    <div className="container mx-auto px-4">

      {/* Heading */}
      <h2 className="font-display text-3xl md:text-4xl font-extrabold text-center mb-4 text-foreground">
        Featured In <span className="text-gradient-purple">Media</span>
      </h2>

      <p className="text-center text-muted-foreground mb-16 max-w-xl mx-auto">
        AdBullet's digital marketing expertise has been recognized by leading news platforms across India.
      </p>

      {/* FLEX WRAP GRID (Auto Centers Last Row) */}
      <div className="flex flex-wrap justify-center gap-10">

        {mediaItems.map((item) => (
          <a
            key={item.label}
            href={ARTICLE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-[45%] lg:w-[30%] max-w-[380px]"
          >
            <div
              className={`
                bg-white
                rounded-2xl
                overflow-hidden
                border-4
                ${item.border}
                shadow-xl
                transition duration-300
                group-hover:scale-105
              `}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.img}
                  alt={`Featured In ${item.label}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>

            <p className="text-center text-sm font-semibold text-foreground mt-4">
              {item.label}
            </p>
          </a>
        ))}

      </div>

    </div>
  </section>
);

export default FeaturedMediaSection;