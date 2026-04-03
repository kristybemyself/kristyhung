const Footer = () => {
  return (
    <footer className="py-16 bg-card border-t border-border">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-foreground rounded-sm flex items-center justify-center">
                <span className="text-background font-heading font-bold text-xs">KH</span>
              </div>
              <span className="font-heading text-lg font-bold text-card-foreground">
                Kristy Hung
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Digital Arts Artist
            </p>
          </div>

          <div className="flex items-center gap-8">
            <a
              href="mailto:yokanikky@gmail.com"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Gmail
            </a>
            <a
              href="https://wa.me/85262117135"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              WhatsApp
            </a>
            <a
              href="https://www.instagram.com/kristyhung_hk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Kristy Hung. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
