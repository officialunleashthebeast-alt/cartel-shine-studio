import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const reviews = [
  { name: "Rajesh Kapoor", car: "Mercedes S-Class", rating: 5, text: "Absolutely phenomenal work! My S-Class looks better than when I drove it out of the showroom. The ceramic coating is flawless." },
  { name: "Priya Sharma", car: "BMW X5", rating: 5, text: "Got PPF done on my X5 and the attention to detail is unmatched. True professionals who care about perfection." },
  { name: "Vikram Singh", car: "Jeep Wrangler", rating: 5, text: "The matte wrap on my Wrangler turned out incredible. Everyone asks where I got it done. Highly recommended!" },
  { name: "Ananya Gupta", car: "Mini Cooper", rating: 5, text: "Best detailing studio in Noida, hands down. They treated my Mini Cooper like a work of art." },
  { name: "Arjun Mehta", car: "Toyota Fortuner", rating: 5, text: "Complete restoration of my Fortuner. Swirl marks gone, paint corrected, ceramic coated. Looks brand new!" },
  { name: "Neha Verma", car: "BMW 3 Series", rating: 5, text: "Professional, courteous, and the results speak for themselves. My BMW has never looked this good." },
];

const ReviewsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="reviews" className="section-padding relative">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-condensed text-primary tracking-[0.3em] text-sm mb-3">
            TESTIMONIALS
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground tracking-wider">
            CLIENT <span className="text-gradient-red">REVIEWS</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-card rounded-lg p-6 hover-lift"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground font-body leading-relaxed mb-4">
                "{review.text}"
              </p>
              <div className="border-t border-border/30 pt-4">
                <p className="font-display text-sm tracking-wider text-foreground">{review.name}</p>
                <p className="text-xs text-primary font-condensed tracking-widest">{review.car}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
