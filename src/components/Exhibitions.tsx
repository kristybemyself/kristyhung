import { ExternalLink } from "lucide-react";

const exhibitions = [
  {
    title: "Colors",
    description:
      '"Colours" explores the powerful role that colors play in art and human experience. This exhibition showcases a vibrant collection of artworks that use color to evoke emotions, tell stories, and challenge perceptions.',
    image:
      "https://kristyhung.wordpress.com/wp-content/uploads/2025/07/image.png",
    link: "https://youtu.be/RJ_YFf-3CIM?si=1dGsNl2OT8L5ZSse",
  },
  {
    title: "Meaningful Play",
    description:
      "Engaging and interactive artwork for children, using technology to craft fun games and immersive experiences that stimulate the senses and convey important messages.",
    image:
      "https://kristyhung.wordpress.com/wp-content/uploads/2025/07/e89ea2e5b995e693b7e58f96e795abe99da2-2026-01-30-235111.png",
    link: "https://youtu.be/czkktzhTGYY?si=Ln-MBXotwHTjIgzj",
  },
  {
    title: "Transit",
    description:
      '"Transit" provides a platform for international exchange, showcasing artworks by students from AVA and ARTT, promoting cross-cultural dialogue through art.',
    image:
      "https://kristyhung.wordpress.com/wp-content/uploads/2026/03/whatsapp-image-2026-01-19-at-16.37.04.jpeg",
    link: "https://www.instagram.com/p/DTzn5xrEVW_/",
  },
];

const Exhibitions = () => {
  return (
    <section id="exhibitions" className="py-24 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-2">
            Exhibitions
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
            Arts Exhibition
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            Step into a world of creativity and imagination, where every artwork
            tells a unique story that inspires and captivates.
          </p>
        </div>

        <div className="space-y-16">
          {exhibitions.map((exhibit, index) => (
            <div
              key={exhibit.title}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 lg:gap-12 items-center`}
            >
              <div className="w-full lg:w-1/2">
                <div className="rounded-xl overflow-hidden border border-border">
                  <img
                    src={exhibit.image}
                    alt={exhibit.title}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <h3 className="font-heading text-3xl font-bold text-foreground mb-4">
                  {exhibit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {exhibit.description}
                </p>
                <a
                  href={exhibit.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  Explore More <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Exhibitions;
