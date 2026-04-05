import decoSpring from "@/assets/deco-spring.png";

const services = [
  {
    title: "Interactive Art",
    description:
      "Designing immersive and interactive artworks that blend technology with creative expression to engage audiences.",
  },
  {
    title: "Digital Products",
    description:
      "Building prototypes and applications that push the boundaries of digital art and user experience.",
  },
  {
    title: "Game Design",
    description:
      "Creating meaningful games and experiences that tell stories, provoke thought, and entertain.",
  },
  {
    title: "Robotics & Installation",
    description:
      "Merging the organic and synthetic through robotic art installations that challenge perspectives.",
  },
];

const Services = () => {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative 3D element */}
      <img
        src={decoSpring}
        alt=""
        aria-hidden="true"
        className="absolute -left-12 bottom-0 w-[320px] md:w-[440px] lg:w-[500px] opacity-50 pointer-events-none select-none animate-float-slow"
      />

      <div className="max-w-[1400px] mx-auto px-8 md:px-12 relative z-10">
        <p className="font-heading text-sm tracking-widest uppercase text-muted-foreground mb-3">
          Services
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground max-w-2xl mb-16">
          Blending art, design and technology to build transformative experiences.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden border border-border">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-card p-8 md:p-10 flex flex-col hover:bg-primary/5 transition-colors duration-300"
            >
              <h3 className="font-heading text-base font-semibold text-card-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
