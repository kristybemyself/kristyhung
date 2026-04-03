import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 flex items-center h-20">
          <Link
            to="/"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={18} />
            <span className="text-sm font-medium">Back</span>
          </Link>
        </div>
      </nav>

      <main className="pt-32 pb-24">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="w-full lg:w-2/5">
              <div className="rounded-2xl overflow-hidden sticky top-28">
                <img
                  src="https://kristyhung.wordpress.com/wp-content/uploads/2026/02/whatsapp-image-2026-01-29-at-00.57.45-2.jpeg"
                  alt="Kristy Hung"
                  className="w-full aspect-[3/4] object-cover"
                />
              </div>
            </div>

            <div className="w-full lg:w-3/5">
              <p className="font-heading text-sm tracking-widest uppercase text-muted-foreground mb-3">
                About Me
              </p>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-2">
                Kristy Hung
              </h1>
              <p className="text-primary font-medium text-lg mb-8">
                Digital Arts Artist
              </p>

              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  I craft unique artworks that inspire, evoke feelings, and tell
                  powerful stories through creativity, passion, and bold artistic
                  vision. My work spans robotics, interactive installations, game
                  design, and immersive experiences — always striking a balance
                  between visuals and AI.
                </p>
                <p>
                  With a background in digital arts and technology, I explore the
                  intersection of human experience and computational creativity.
                  Each project is an opportunity to push boundaries and create
                  meaningful connections between art and audience.
                </p>
                <p>
                  My practice is rooted in the belief that technology can amplify
                  artistic expression, making it more accessible, interactive, and
                  emotionally resonant. From interactive installations that respond
                  to touch and movement, to games that explore mental health and
                  career choices, my work invites participation and reflection.
                </p>
              </div>

              <blockquote className="mt-10 border-l-2 border-primary pl-5 text-foreground/80 italic font-heading text-base">
                "Only action can bring your dream to reality."
              </blockquote>

              <div className="mt-12 flex flex-wrap gap-4">
                <a
                  href="/#contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
