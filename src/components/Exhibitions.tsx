import { ExternalLink } from "lucide-react";
import { useTilt } from "@/hooks/use-interactive";

const exhibitions = [
  {
    title: "Colors",
    description:
      "Exploring the powerful role that colors play in art and human experience through a vibrant collection that evokes emotions and challenges perceptions.",
    image:
      "https://kristyhung.wordpress.com/wp-content/uploads/2025/07/image.png",
    link: "https://youtu.be/RJ_YFf-3CIM?si=1dGsNl2OT8L5ZSse",
  },
  {
    title: "Meaningful Play",
    description:
      "Interactive artwork for children using technology to craft fun games and immersive experiences about dreams, career choices, and mental health.",
    image:
      "https://kristyhung.wordpress.com/wp-content/uploads/2025/07/e89ea2e5b995e693b7e58f96e795abe99da2-2026-01-30-235111.png",
    link: "https://youtu.be/czkktzhTGYY?si=Ln-MBXotwHTjIgzj",
  },
  {
    title: "Transit",
    description:
      "A platform for international exchange, showcasing artworks by students from AVA, ARTT, and Nagoya University of the Arts.",
    image:
      "https://kristyhung.wordpress.com/wp-content/uploads/2026/03/whatsapp-image-2026-01-19-at-16.37.04.jpeg",
    link: "https://www.instagram.com/p/DTzn5xrEVW_/?igsh=a2MzbHNiZWU2Njd4",
  },
];

const ExhibitionCard = ({ exhibit }: { exhibit: typeof exhibitions[0] }) => {
  const tilt = useTilt(5);

  return (
    <a
      href={exhibit.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <div
        ref={tilt.ref}
        onMouseMove={tilt.onMouseMove}
        onMouseLeave={tilt.onMouseLeave}
        className="bg-card rounded-xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
      >
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={exhibit.image}
            alt={exhibit.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-heading text-lg font-semibold text-card-foreground">
              {exhibit.title}
            </h3>
            <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-200" />
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {exhibit.description}
          </p>
        </div>
      </div>
    </a>
  );
};

const Exhibitions = () => {
  return (
    <section id="exhibitions" className="py-24 md:py-32 bg-secondary">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12">
        <p className="font-heading text-sm tracking-widest uppercase text-muted-foreground mb-3">
          Projects
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground max-w-2xl mb-16">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {exhibitions.map((exhibit) => (
            <ExhibitionCard key={exhibit.title} exhibit={exhibit} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Exhibitions;
