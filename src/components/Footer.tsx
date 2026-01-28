import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-divider">
      <div className="px-gutter py-section">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Studio Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <svg
                width="24"
                height="24"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-foreground"
              >
                <rect x="10" y="10" width="40" height="6" fill="currentColor" />
                <rect x="25" y="16" width="10" height="34" fill="currentColor" />
              </svg>
              <span className="font-serif text-foreground">Trots Architects</span>
            </div>
            <p className="text-caption text-muted-foreground leading-relaxed">
              Context-driven architecture rooted<br />
              in experience, climate, and place.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-micro uppercase tracking-widest text-muted-foreground mb-6">
              Navigation
            </h4>
            <nav className="flex flex-col gap-3">
              <Link to="/works" className="arch-link text-body text-foreground inline-block">
                Works
              </Link>
              <Link to="/about" className="arch-link text-body text-foreground inline-block">
                About
              </Link>
              <Link to="/contact" className="arch-link text-body text-foreground inline-block">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-micro uppercase tracking-widest text-muted-foreground mb-6">
              Contact
            </h4>
            <div className="space-y-3 text-body text-foreground">
              <p>Bengaluru, India</p>
              <a href="mailto:studio@trotsarchitects.com" className="arch-link inline-block">
                studio@trotsarchitects.com
              </a>
              <p>+91 80 1234 5678</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-section pt-8 border-t border-divider">
          <p className="text-caption text-muted-foreground">
            © {new Date().getFullYear()} Trots Architects. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;