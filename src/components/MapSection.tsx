import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin } from "lucide-react";

const MapSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="section-padding relative">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-condensed text-primary tracking-[0.3em] text-sm mb-3">
            FIND US
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground tracking-wider">
            OUR <span className="text-gradient-red">LOCATION</span>
          </h2>
          <p className="font-body text-muted-foreground mt-4 flex items-center justify-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            Sector 41, Noida, Uttar Pradesh, India
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative rounded-lg overflow-hidden neon-border h-[400px]"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.123!2d77.35!3d28.57!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM0JzEyLjAiTiA3N8KwMjEnMDAuMCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg) saturate(0.3)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Cartel Auto Detail Location"
          />
          <a
            href="https://maps.app.goo.gl/aiEeYTVDEkYjZosU9"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 right-4 btn-primary-neon px-6 py-3 rounded-md text-sm flex items-center gap-2"
          >
            <MapPin className="w-4 h-4" />
            Get Directions
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default MapSection;
