const projects = [
  {
    title: "Mushby",
    description:
      "Prototype: Application of NFC tags for digital artworks within an app, with a high threshold for copyright protection.",
    image:
      "https://kristyhung.wordpress.com/wp-content/uploads/2026/03/e89ea2e5b995e693b7e58f96e795abe99da2-2025-09-11-003746.png",
    tags: ["Prototype", "NFC", "App Design"],
  },
  {
    title: "Birth Machine",
    description:
      "Merging the organic and synthetic, this work challenges motherhood under current political propaganda.",
    image:
      "https://kristyhung.wordpress.com/wp-content/uploads/2026/03/20251127_154409-1-edited.jpg",
    tags: ["Robotics", "Art", "Installation"],
  },
  {
    title: "Saving Goal",
    description:
      "Through responsive 3D mapping games, encourage children to distinguish between wants and needs.",
    image:
      "https://kristyhung.wordpress.com/wp-content/uploads/2026/03/img-20241206-wa0027-edited-1.jpg",
    tags: ["3D Mapping", "Game", "Interactive"],
  },
  {
    title: "Halloween Party",
    description:
      "ARTT 2025 Halloween Party creates an immersive room experience, allowing you to enjoy a thrilling and exciting night.",
    image:
      "https://kristyhung.wordpress.com/wp-content/uploads/2025/07/e89ea2e5b995e693b7e58f96e795abe99da2-2026-03-07-173928.png",
    tags: ["Immersive", "Experience", "Event"],
  },
  {
    title: "Hangang Bridge Bombing",
    description:
      "RPG game highlights the Korean Peninsula's past complexities, evoking empathy for lost lives in history.",
    image:
      "https://kristyhung.wordpress.com/wp-content/uploads/2026/03/e89ea2e5b995e693b7e58f96e795abe99da2-2025-12-06-224831-edited.png",
    tags: ["RPG", "Game", "History"],
  },
  {
    title: "Flock Flow",
    description:
      "An immersive game experience about human action, where players take on the role of a sheep, choosing a path.",
    image:
      "https://kristyhung.wordpress.com/wp-content/uploads/2026/03/artwork5-edited-4.jpg",
    tags: ["Game", "Interactive", "Experiment"],
  },
];

const Projects = () => {
  return (
    <section id="work" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-2">
            Projects
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
            Transforming Ideas into{" "}
            <span className="text-primary">Visual Masterpieces</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold text-card-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
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
