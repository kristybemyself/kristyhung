import decoTorus from "@/assets/deco-torus.png";

const Hero = () => {
  return (
    <section className="pt-20 bg-secondary relative overflow-hidden">
      {/* Decorative 3D element */}
      <img
        src={decoTorus}
        alt=""
        aria-hidden="true"
        className="absolute -right-16 top-24 w-[280px] md:w-[380px] opacity-60 pointer-events-none select-none animate-float"
      />

      <div className="max-w-[1400px] mx-auto px-8 md:px-12 py-20 md:py-28 relative z-10">
        <h1 className="font-heading text-4xl md:text-6xl lg:text-[5.5rem] font-bold leading-[1.1] tracking-tight text-foreground max-w-4xl">
          Crafting Digital{" "}
          <span className="text-primary">Experiences</span>
          <br />
          That Inspire and Engage
        </h1>
        <p className="mt-8 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
          Striking a perfect balance between visuals and AI to create unique artworks,
          interactive installations, and immersive experiences.
        </p>
      </div>

      {/* Large showcase image */}
      <div className="max-w-[1400px] mx-auto px-8 md:px-12 pb-0 relative z-10">
        <div className="rounded-t-2xl overflow-hidden">
          <img
            src="https://kristyhung.wordpress.com/wp-content/uploads/2025/07/e784a1e6a899e9a18c164_20251204000500.jpg"
            alt="Kristy Hung working on an art installation"
            className="w-full h-[300px] md:h-[500px] lg:h-[600px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
