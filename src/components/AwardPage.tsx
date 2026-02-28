import awardImage from "@/assets/bipasha.jpeg"; // add your image here

const AwardPage = () => {
  return (
    <section className="bg-black text-white py-24">

      <div className="container mx-auto px-6 max-w-6xl">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-extrabold font-display leading-tight">
            Honoured by{" "}
            <span className="text-yellow-400">Bipasha Basu</span> <br />
            at the Indian Business Awards 2025
          </h1>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg">
            Recognized as the <span className="text-yellow-400 font-semibold">
            Best Complete Digital Marketing Company 2025
            </span> at the prestigious India Business Awards,
            presented by Blindwink.
          </p>
        </div>

        {/* Award Image Card */}
        <div className="rounded-3xl overflow-hidden border border-yellow-500/30 shadow-2xl shadow-yellow-500/10">
          <img
            src={awardImage}
            alt="India Business Awards 2025 - Ad Bullet"
            className="w-full h-auto"
          />
        </div>

        {/* Highlight Strip */}
        <div className="mt-16 bg-gradient-to-r from-yellow-500 to-yellow-300 text-black font-bold text-xl md:text-2xl py-6 rounded-2xl text-center shadow-lg">
          AWARDED BEST DIGITAL MARKETING COMPANY 2025
        </div>

        {/* Event Details */}
        <div className="mt-16 text-center text-gray-400">
          <p className="mb-2">Organized by Blindwink</p>
          <p>2 March 2025 · Delhi</p>
          <p className="mt-4 text-sm">
            Category: Best Complete Digital Marketing Company 2025
          </p>
        </div>

      </div>
    </section>
  );
};

export default AwardPage;