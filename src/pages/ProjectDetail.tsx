import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/data/projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="font-heading text-4xl font-bold text-foreground mb-4">Project Not Found</h1>
          <Link to="/#work" className="text-primary hover:text-primary/80 transition-colors">
            ← Back to Work
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-20">
        {/* Back link */}
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 pt-10">
          <Link
            to="/#work"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Work
          </Link>
        </div>

        {/* Hero image */}
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 mt-8">
          <div className="rounded-2xl overflow-hidden bg-secondary">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-[300px] md:h-[500px] lg:h-[600px] object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto px-8 md:px-12 py-16">
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-heading text-xs font-medium px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            {project.title}
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed">
            {project.longDescription}
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
