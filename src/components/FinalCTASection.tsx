const FinalCTASection = () => {

  const handleRedirect = () => {
    window.location.href =
      "https://adbullet.co.in/Adbullet-Purchase/index.php";
  };

  return (
    <section className="bg-section-alt py-24 text-center">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-display text-3xl md:text-5xl font-extrabold mb-8">
          Stop Wasting Ad Budget.{" "}
          <span className="text-gradient-purple">
            Start Scaling With Strategy.
          </span>
        </h2>

        <button
          onClick={handleRedirect}
          className="bg-primary text-white font-bold text-lg px-12 py-5 rounded-xl"
        >
          Book a call
        </button>
      </div>
    </section>
  );
};


export default FinalCTASection;
