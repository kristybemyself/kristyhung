import decoBlob from "@/assets/deco-blob.png";

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative 3D element */}
      <img
        src={decoBlob}
        alt=""
        aria-hidden="true"
        className="absolute -right-8 top-4 w-[340px] md:w-[460px] lg:w-[520px] opacity-50 pointer-events-none select-none animate-float"
      />

      <div className="max-w-[1400px] mx-auto px-8 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <div className="w-full lg:w-2/5 flex justify-center">
            <a href="/about" className="block w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden group cursor-pointer">
              <img
                src="https://kristyhung.wordpress.com/wp-content/uploads/2026/02/whatsapp-image-2026-01-29-at-00.57.45-2.jpeg"
                alt="Kristy Hung"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </a>
          </div>

          <div className="w-full lg:w-3/5">
            <p className="font-heading text-sm tracking-widest uppercase text-muted-foreground mb-3">
              About
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
              Kristy Hung
            </h2>
            <p className="text-primary font-medium mb-6">Digital Arts Artist</p>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg">
              I craft unique artworks that inspire, evoke feelings, and tell
              powerful stories through creativity, passion, and bold artistic vision. 
              My work spans robotics, interactive installations, game design, and 
              immersive experiences — always striking a balance between visuals and AI.
            </p>
            <blockquote className="border-l-2 border-primary pl-5 text-foreground/80 italic font-heading text-sm">
              "Only action can bring your dream to reality."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
