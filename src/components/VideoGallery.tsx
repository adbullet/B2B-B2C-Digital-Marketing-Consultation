const videos = [
  { id: "FBQ1ORTBsqg", type: "normal" },
  { id: "QbP6YDJG09k", type: "normal" },
  { id: "_AFI4SHAX70", type: "short" },
  { id: "HoHbNPP1GMc", type: "short" },
  { id: "QC9zE7g_qYw", type: "short" },
  { id: "EhPYXC-4dqI", type: "short" },
];

const VideoGallery = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold font-display mb-4">
            Video Insights & Case Studies
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Watch strategy breakdowns, results, and practical marketing insights.
          </p>
        </div>

        {/* Normal Videos */}
        <div className="mb-16">
          <h2 className="text-xl font-semibold mb-6 text-center">
            Full Length Videos
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {videos
              .filter((v) => v.type === "normal")
              .map((video) => (
                <div
                  key={video.id}
                  className="rounded-2xl overflow-hidden border border-border shadow-lg hover:shadow-xl transition"
                >
                  <div className="aspect-video">
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title="YouTube video"
                      frameBorder="0"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Shorts */}
        <div>
          <h2 className="text-xl font-semibold mb-6 text-center">
            YouTube Shorts
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 place-items-center">
            {videos
              .filter((v) => v.type === "short")
              .map((video) => (
                <div
                  key={video.id}
                  className="rounded-2xl overflow-hidden border border-border shadow-lg hover:scale-105 transition"
                >
                  <div className="w-[250px] h-[450px]">
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title="YouTube Short"
                      frameBorder="0"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default VideoGallery;