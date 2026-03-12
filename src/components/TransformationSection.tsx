import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import transformImg from "@/assets/transform-before-after.jpg";

const TransformationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  };

  return (
    <section id="gallery" className="section-padding relative">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-condensed text-primary tracking-[0.3em] text-sm mb-3">
            SEE THE DIFFERENCE
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground tracking-wider">
            CAR <span className="text-gradient-red">TRANSFORMATION</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          ref={containerRef}
          className="relative max-w-4xl mx-auto rounded-lg overflow-hidden cursor-col-resize neon-border"
          onMouseMove={(e) => handleMove(e.clientX)}
          onTouchMove={(e) => handleMove(e.touches[0].clientX)}
        >
          <img
            src={transformImg}
            alt="Before and after car transformation"
            className="w-full h-auto"
            loading="lazy"
          />

          {/* Slider line */}
          <div
            className="absolute top-0 bottom-0 w-0.5 bg-primary z-10"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary flex items-center justify-center neon-glow">
              <span className="text-primary-foreground text-xs font-bold">↔</span>
            </div>
          </div>

          {/* Labels */}
          <div className="absolute bottom-4 left-4 font-condensed text-sm tracking-widest text-muted-foreground bg-background/80 px-3 py-1 rounded">
            BEFORE
          </div>
          <div className="absolute bottom-4 right-4 font-condensed text-sm tracking-widest text-primary bg-background/80 px-3 py-1 rounded">
            AFTER
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TransformationSection;
