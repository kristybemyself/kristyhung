const projects = [
  {
    title: "Mushby",
    description:
      "Application of NFC tags for digital artworks within an app, with a high threshold for copyright protection.",
    image:
      "https://kristyhung.wordpress.com/wp-content/uploads/2026/03/e89ea2e5b995e693b7e58f96e795abe99da2-2025-09-11-003746.png",
    tags: ["Prototype", "NFC", "App Design"],
  },
  {
    title: "Birth Machine",
    description:
      "Merging the organic and synthetic, challenging motherhood under current political propaganda.",
    image:
      "https://kristyhung.wordpress.com/wp-content/uploads/2026/03/20251127_154409-1-edited.jpg",
    tags: ["Robotics", "Art", "Installation"],
  },
  {
    title: "Saving Goal",
    description:
      "Responsive 3D mapping games encouraging children to distinguish between wants and needs.",
    image:
      "https://kristyhung.wordpress.com/wp-content/uploads/2026/03/img-20241206-wa0027-edited-1.jpg",
    tags: ["3D Mapping", "Game", "Interactive"],
  },
  {
    title: "Halloween Party",
    description:
      "ARTT 2025 Halloween Party — an immersive room experience for a thrilling night.",
    image:
      "https://kristyhung.wordpress.com/wp-content/uploads/2025/07/e89ea2e5b995e693b7e58f96e795abe99da2-2026-03-07-173928.png",
    tags: ["Immersive", "Experience", "Event"],
  },
  {
    title: "Hangang Bridge Bombing",
    description:
      "RPG game highlighting the Korean Peninsula's past, evoking empathy for lost lives.",
    image:
      "https://kristyhung.wordpress.com/wp-content/uploads/2026/03/e89ea2e5b995e693b7e58f96e795abe99da2-2025-12-06-224831-edited.png",
    tags: ["RPG", "Game", "History"],
  },
  {
    title: "Flock Flow",
    description:
      "An immersive game experience about human action, where players take on the role of a sheep.",
    image:
      "https://kristyhung.wordpress.com/wp-content/uploads/2026/03/artwork5-edited-4.jpg",
    tags: ["Game", "Interactive", "Experiment"],
  },
];

const Projects = () => {
  return (
    <section id="work" className="py-24 md:py-32 bg-background">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12">
        <p className="font-heading text-sm tracking-widest uppercase text-muted-foreground mb-3">
          Projects
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground max-w-2xl mb-16">
          Selected Works
        </h2>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 lg:gap-16 items-start`}
            >
              {/* Image */}
              <div className="w-full lg:w-3/5">
                <div className="rounded-xl overflow-hidden bg-secondary">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto aspect-[16/10] object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Info */}
              <div className="w-full lg:w-2/5 flex flex-col justify-center lg:py-8">
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-heading text-xs font-medium px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
