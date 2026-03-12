import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Droplets, Palette, Car, Sparkles, RotateCcw } from "lucide-react";

import ppfImg from "@/assets/service-ppf.jpg";
import ceramicImg from "@/assets/service-ceramic.jpg";
import wrapImg from "@/assets/service-wrap.jpg";
import washImg from "@/assets/service-wash.jpg";
import detailImg from "@/assets/service-detail.jpg";
import restoreImg from "@/assets/service-restore.jpg";

const services = [
  { icon: Shield, title: "Paint Protection Film", desc: "Invisible armor that shields your paint from rock chips, scratches, and environmental damage.", img: ppfImg },
  { icon: Droplets, title: "Ceramic Coating", desc: "Long-lasting hydrophobic protection with a mirror-like gloss that repels contaminants.", img: ceramicImg },
  { icon: Palette, title: "Colour Wraps", desc: "Transform your vehicle with premium vinyl wraps in any color, finish, or custom design.", img: wrapImg },
  { icon: Car, title: "Premium Car Wash", desc: "Hand-wash detailing using pH-balanced products that preserve your paint's integrity.", img: washImg },
  { icon: Sparkles, title: "Car Detailing", desc: "Comprehensive interior and exterior detailing that restores your car's showroom finish.", img: detailImg },
  { icon: RotateCcw, title: "Car Restoration", desc: "Complete paint correction and restoration to bring aging vehicles back to life.", img: restoreImg },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-lg hover-lift cursor-pointer"
    >
      <div className="relative h-72 overflow-hidden">
        <img
          src={service.img}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded-md neon-border bg-background/80">
            <service.icon className="w-5 h-5 text-primary" />
          </div>
          <h3 className="font-display text-lg tracking-wider text-foreground">
            {service.title}
          </h3>
        </div>
        <p className="font-body text-sm text-muted-foreground leading-relaxed">
          {service.desc}
        </p>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="services" className="section-padding relative">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-condensed text-primary tracking-[0.3em] text-sm mb-3">
            WHAT WE OFFER
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground tracking-wider">
            OUR <span className="text-gradient-red">SERVICES</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
