import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Award, Users, Shield, Cpu } from "lucide-react";

const stats = [
  { icon: Award, number: 500, suffix: "+", label: "Cars Detailed", desc: "Premium vehicles transformed" },
  { icon: Users, number: 100, suffix: "%", label: "Certified Pros", desc: "IDA approved specialists" },
  { icon: Shield, number: 10, suffix: "yr", label: "Paint Protection", desc: "Long-lasting PPF warranty" },
  { icon: Cpu, number: 50, suffix: "+", label: "Advanced Tech", desc: "Latest detailing technology" },
];

const AnimatedNumber = ({ target, suffix, isInView }: { target: number; suffix: string; isInView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span className="stat-number text-4xl md:text-5xl">
      {count}{suffix}
    </span>
  );
};

const WhyChooseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-us" className="section-padding relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="container mx-auto relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-condensed text-primary tracking-[0.3em] text-sm mb-3">
            THE CARTEL DIFFERENCE
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground tracking-wider">
            WHY CHOOSE <span className="text-gradient-red">CARTEL</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass-card rounded-lg p-6 md:p-8 text-center hover-lift"
            >
              <div className="inline-flex p-3 rounded-lg neon-border mb-4">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="mb-2">
                <AnimatedNumber target={stat.number} suffix={stat.suffix} isInView={isInView} />
              </div>
              <h3 className="font-display text-sm tracking-wider text-foreground mb-1">
                {stat.label}
              </h3>
              <p className="text-xs text-muted-foreground font-body">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
