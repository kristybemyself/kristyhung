import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">
          Digital Arts · Creative Technology
        </p>
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight text-foreground">
          Strike a Balance Between{" "}
          <span className="text-primary">Visuals & AI</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Crafting unique artworks that inspire, evoke feelings, and tell
          powerful stories through creativity, passion, and bold artistic vision.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <a
            href="#work"
            className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-8 py-3 text-sm font-medium transition-colors hover:bg-primary/90"
          >
            View Work
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center rounded-lg border border-border bg-background text-foreground px-8 py-3 text-sm font-medium transition-colors hover:bg-secondary"
          >
            About Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
