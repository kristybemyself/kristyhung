import { Link } from "react-router-dom";
import { projects } from "@/data/projects";
import { useTilt } from "@/hooks/use-interactive";

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const tilt = useTilt(6);

  return (
    <article
      className={`flex flex-col ${
        index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
      } gap-8 lg:gap-16 items-start`}
    >
      {/* Clickable Image with tilt */}
      <Link to={`/work/${project.slug}`} className="w-full lg:w-3/5 group">
        <div
          ref={tilt.ref}
          onMouseMove={tilt.onMouseMove}
          onMouseLeave={tilt.onMouseLeave}
          className="rounded-xl overflow-hidden bg-secondary cursor-pointer relative transition-transform duration-200 ease-out"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto aspect-[16/10] object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300 rounded-xl" />
        </div>
      </Link>

      {/* Info */}
      <div className="w-full lg:w-2/5 flex flex-col justify-center lg:py-8">
        <Link to={`/work/${project.slug}`}>
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3 hover:text-primary transition-colors">
            {project.title}
          </h3>
        </Link>
        <p className="text-muted-foreground leading-relaxed mb-5">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-heading text-xs font-medium px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary transition-colors duration-200 cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

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
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
