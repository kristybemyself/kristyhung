import { Mail, Phone, Instagram } from "lucide-react";
import decoTorus from "@/assets/deco-torus.png";
import { useMagnetic } from "@/hooks/use-interactive";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    description: "yokanikky@gmail.com",
    href: "mailto:yokanikky@gmail.com",
  },
  {
    icon: Phone,
    label: "WhatsApp",
    description: "Chat on WhatsApp",
    href: "https://wa.me/85262117135",
  },
  {
    icon: Instagram,
    label: "Instagram",
    description: "@kristyhung_hk",
    href: "https://www.instagram.com/kristyhung_hk/",
  },
];

const ContactCard = ({ item }: { item: typeof contactLinks[0] }) => {
  const magnetic = useMagnetic(0.15);

  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <div
        ref={magnetic.ref}
        onMouseMove={magnetic.onMouseMove}
        onMouseLeave={magnetic.onMouseLeave}
        className="flex flex-col items-center gap-4 p-8 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
      >
        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
          <item.icon size={24} className="text-primary" />
        </div>
        <div>
          <h3 className="font-heading font-semibold text-card-foreground mb-1">
            {item.label}
          </h3>
          <p className="text-sm text-muted-foreground">
            {item.description}
          </p>
        </div>
      </div>
    </a>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary relative overflow-hidden">
      <img
        src={decoTorus}
        alt=""
        aria-hidden="true"
        className="absolute -left-16 -bottom-8 w-[300px] md:w-[400px] lg:w-[460px] opacity-40 pointer-events-none select-none rotate-45 animate-float-slow"
      />

      <div className="max-w-[1400px] mx-auto px-8 md:px-12 text-center relative z-10">
        <p className="font-heading text-sm tracking-widest uppercase text-muted-foreground mb-3">
          Contact
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
          Contact Me
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-16 leading-relaxed">
          For more information or to join the workshop, please contact me via
          email. I'm excited to build connections!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {contactLinks.map((item) => (
            <ContactCard key={item.label} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
