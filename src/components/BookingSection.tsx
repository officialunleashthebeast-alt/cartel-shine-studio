import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, MessageCircle } from "lucide-react";

const BookingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [form, setForm] = useState({ name: "", phone: "", car: "", service: "", date: "" });

  const handleWhatsApp = () => {
    const msg = `Hi, I'd like to book an appointment.\nName: ${form.name}\nPhone: ${form.phone}\nCar: ${form.car}\nService: ${form.service}\nDate: ${form.date}`;
    window.open(`https://wa.me/919818234780?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section id="booking" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />

      <div className="container mx-auto relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-condensed text-primary tracking-[0.3em] text-sm mb-3">
            GET STARTED
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground tracking-wider">
            BOOK YOUR <span className="text-gradient-red">APPOINTMENT</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto glass-card rounded-lg p-8 md:p-12 neon-border"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="font-condensed text-xs tracking-widest text-muted-foreground mb-2 block uppercase">Name</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-secondary border border-border rounded-md px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:border-primary transition-colors"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="font-condensed text-xs tracking-widest text-muted-foreground mb-2 block uppercase">Phone</label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full bg-secondary border border-border rounded-md px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:border-primary transition-colors"
                placeholder="+91 XXXXXXXXXX"
              />
            </div>
            <div>
              <label className="font-condensed text-xs tracking-widest text-muted-foreground mb-2 block uppercase">Car Model</label>
              <input
                type="text"
                value={form.car}
                onChange={(e) => setForm({ ...form, car: e.target.value })}
                className="w-full bg-secondary border border-border rounded-md px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:border-primary transition-colors"
                placeholder="e.g. Mercedes C-Class"
              />
            </div>
            <div>
              <label className="font-condensed text-xs tracking-widest text-muted-foreground mb-2 block uppercase">Preferred Date</label>
              <input
                type="date"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="w-full bg-secondary border border-border rounded-md px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:border-primary transition-colors"
              />
            </div>
          </div>

          <div className="mb-8">
            <label className="font-condensed text-xs tracking-widest text-muted-foreground mb-2 block uppercase">Service Required</label>
            <select
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
              className="w-full bg-secondary border border-border rounded-md px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:border-primary transition-colors"
            >
              <option value="">Select a Service</option>
              <option>Paint Protection Film (PPF)</option>
              <option>Ceramic Coating</option>
              <option>Colour Wraps</option>
              <option>Premium Car Wash</option>
              <option>Car Detailing</option>
              <option>Car Restoration</option>
            </select>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleWhatsApp}
              className="btn-primary-neon px-8 py-4 rounded-md text-sm flex-1 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              Book via WhatsApp
            </button>
            <button className="btn-outline-silver px-8 py-4 rounded-md text-sm flex-1 flex items-center justify-center gap-2">
              <Send className="w-4 h-4" />
              Submit Enquiry
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingSection;
