import { Link } from "react-router-dom";
import trotsLogo from "@/assets/trots-logo.png";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-divider">
      <div className="px-gutter py-section">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Studio Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src={trotsLogo}
                alt="Trots Architects"
                className="w-12 h-auto"
              />
              <span style={{ fontFamily: "'Sansation', sans-serif", fontWeight: 300 }}>Tro.ts Architects</span>
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
              <p>15, 4th Cross, 2nd Block<br />BSK 1st Stage, Bangalore 560050</p>
              <a href="mailto:trotsarchitects@gmail.com" className="arch-link inline-block">
                trotsarchitects@gmail.com
              </a>
              <p>+91 96634 76666 / +91 97387 42605</p>
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