import { Phone, Instagram, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const FooterSection = () => {
  return (
    <footer className="border-t border-border/30 py-16 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <img src={logo} alt="Cartel Auto Detail" className="h-12 mb-4" />
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              Premium car protection & luxury detailing studio in Noida. AutoFresh Certified & IDA Approved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm tracking-widest text-foreground mb-4">QUICK LINKS</h4>
            <div className="space-y-2">
              {["Services", "Gallery", "Why Us", "Reviews", "Booking"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(" ", "-")}`}
                  className="block font-condensed text-sm text-muted-foreground hover:text-primary transition-colors tracking-wider"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm tracking-widest text-foreground mb-4">CONTACT</h4>
            <div className="space-y-3">
              <a href="tel:+919818234780" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors font-body">
                <Phone className="w-4 h-4 text-primary" /> +91 9818234780
              </a>
              <a href="tel:+919870365662" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors font-body">
                <Phone className="w-4 h-4 text-primary" /> +91 9870365662
              </a>
              <a href="https://www.instagram.com/cartelnoida" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors font-body">
                <Instagram className="w-4 h-4 text-primary" /> @cartelnoida
              </a>
              <a href="https://maps.app.goo.gl/aiEeYTVDEkYjZosU9" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors font-body">
                <MapPin className="w-4 h-4 text-primary" /> Sector 41, Noida
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/30 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-condensed text-xs text-muted-foreground tracking-widest">
            © 2024 CARTEL AUTO DETAIL. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-4">
            <a href="tel:+919818234780" className="btn-primary-neon px-4 py-2 rounded-md text-xs flex items-center gap-2">
              <Phone className="w-3 h-3" /> Quick Call
            </a>
            <a
              href="https://wa.me/919818234780"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-silver px-4 py-2 rounded-md text-xs"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
