const Footer = () => {
  return (
    <footer id="contact" className="py-16 bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="font-heading text-2xl font-bold text-card-foreground">
              Kristy Hung
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              Digital Arts Artist
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://kristyhung.wordpress.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              WordPress
            </a>
            <a
              href="mailto:contact@kristyhung.com"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Email
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Kristy Hung. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
