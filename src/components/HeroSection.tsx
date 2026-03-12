import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroCar from "@/assets/hero-car.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroCar}
          alt="Luxury car in premium detailing studio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
      </div>

      {/* Animated red line accents */}
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
      <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-primary/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <p className="font-condensed text-primary tracking-[0.3em] text-sm md:text-base mb-4">
            ESTABLISHED 2024 • NOIDA, INDIA
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-display text-5xl md:text-7xl lg:text-9xl font-bold tracking-wider leading-none mb-6"
        >
          <span className="text-gradient-red">CARTEL</span>
          <br />
          <span className="text-foreground">AUTO DETAIL</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-condensed text-lg md:text-2xl text-silver tracking-[0.15em] mb-10"
        >
          Premium Car Protection & Luxury Detailing
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#booking"
            className="btn-primary-neon px-8 py-4 rounded-md text-base"
          >
            Book Appointment
          </a>
          <a
            href="#services"
            className="btn-outline-silver px-8 py-4 rounded-md text-base"
          >
            View Services
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-6 flex justify-center gap-6 font-condensed text-xs tracking-widest text-muted-foreground"
        >
          <span>AutoFresh Certified</span>
          <span className="text-primary">•</span>
          <span>IDA Approved</span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-6 h-6 text-primary/60" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
