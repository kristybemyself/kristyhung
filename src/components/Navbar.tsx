import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useMagnetic } from "@/hooks/use-interactive";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#exhibitions" },
  { label: "About Me", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const NavLinkItem = ({ link }: { link: { label: string; href: string } }) => {
  const magnetic = useMagnetic(0.2);

  return (
    <li>
      <div
        ref={magnetic.ref}
        onMouseMove={magnetic.onMouseMove}
        onMouseLeave={magnetic.onMouseLeave}
        className="transition-transform duration-300 ease-out"
      >
        <a
          href={link.href}
          className="text-[15px] font-medium text-foreground hover:text-primary transition-colors duration-200 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-primary after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
        >
          {link.label}
        </a>
      </div>
    </li>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12 flex items-center justify-between h-20">
        {/* Logo mark */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 bg-foreground rounded-sm flex items-center justify-center transition-all duration-300 group-hover:rounded-lg group-hover:bg-primary group-hover:scale-110">
            <span className="text-background font-heading font-bold text-sm">KH</span>
          </div>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <NavLinkItem key={link.href} link={link} />
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background px-8 pb-6 border-t border-border">
          <ul className="flex flex-col gap-5 pt-5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-base font-medium text-foreground hover:text-primary transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
