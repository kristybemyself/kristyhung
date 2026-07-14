import decoTorus from "@/assets/deco-torus.png";
import gradShowImage from "@/assets/gradshow2026.jpg";

const Hero = () => {
  return (
    <section className="pt-20 bg-secondary relative overflow-hidden">
      {/* Decorative 3D element */}
      <img
        src={decoTorus}
        alt=""
        aria-hidden="true"
        className="absolute -right-8 top-16 w-[380px] md:w-[520px] lg:w-[600px] opacity-50 pointer-events-none select-none animate-float"
      />

      <div className="max-w-[1400px] mx-auto px-8 md:px-12 py-20 md:py-28 relative z-10">
        <h1 className="font-heading text-7xl md:text-9xl lg:text-[11rem] font-bold leading-[1.05] tracking-tight text-foreground max-w-5xl">
          Digital <span className="text-primary">Alchemist</span>
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
            src={gradShowImage}
            alt="Kristy Hung's work displayed at the 2026 graduation show"
            className="w-full h-[300px] md:h-[500px] lg:h-[600px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
