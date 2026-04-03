const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <div className="w-full lg:w-2/5">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-2xl overflow-hidden border-2 border-border">
                <img
                  src="https://kristyhung.wordpress.com/wp-content/uploads/2026/02/whatsapp-image-2026-01-29-at-00.57.45-2.jpeg"
                  alt="Kristy Hung"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-xl -z-10" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/5 rounded-lg -z-10" />
            </div>
          </div>

          <div className="w-full lg:w-3/5">
            <p className="text-sm font-medium tracking-widest uppercase text-primary mb-2">
              About
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Kristy Hung
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              Digital Arts Artist
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Striking a perfect balance between visuals and AI to create the
              best. I craft unique artworks that inspire, evoke feelings, and
              tell powerful stories through creativity, passion, and bold
              artistic vision. My work spans robotics, interactive installations,
              game design, and immersive experiences.
            </p>
            <blockquote className="border-l-4 border-primary pl-4 italic text-foreground/80">
              "Only action can bring your dream to reality."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
