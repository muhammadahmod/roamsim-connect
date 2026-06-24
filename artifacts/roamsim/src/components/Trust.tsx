import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ShieldCheck, Zap, Globe, Smartphone, BadgeCheck } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stats = [
  { icon: Globe, label: "200+ destinations", sub: "Worldwide coverage" },
  { icon: Zap, label: "Ready in minutes", sub: "Instant QR delivery" },
  { icon: ShieldCheck, label: "Secure payments", sub: "Card via Paystack" },
  { icon: Smartphone, label: "Keep your SA number", sub: "eSIM runs alongside it" },
];

// NOTE: Replace these with real customer reviews as soon as you have them.
const testimonials = [
  {
    quote:
      "Landed in London with data before I'd even left the plane. So much easier than hunting for a SIM at the airport.",
    name: "Thandi M.",
    trip: "Travelled to London, UK",
  },
  {
    quote:
      "Used it for Umrah — worked perfectly in Makkah and Madinah, and ordering on WhatsApp made the whole thing effortless.",
    name: "Yusuf E.",
    trip: "Travelled to Saudi Arabia",
  },
  {
    quote:
      "No more bill shock from roaming. Set it up in two minutes for our Dubai trip and it just worked.",
    name: "Karabo D.",
    trip: "Travelled to Dubai, UAE",
  },
];

export function Trust() {
  return (
    <section id="trust" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Trust bar */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeIn}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center gap-2 p-5 rounded-2xl bg-muted/40 border border-border/50"
            >
              <s.icon className="h-7 w-7 text-primary" />
              <div className="font-semibold text-foreground">{s.label}</div>
              <div className="text-xs text-muted-foreground">{s.sub}</div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <div className="text-center max-w-[700px] mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Loved by South African travellers
          </h2>
          <p className="text-lg text-muted-foreground">
            Real connectivity, zero stress — here's what travellers say.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((t, i) => (
            <Card key={i} className="border-border/60 hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex flex-col gap-4 h-full">
                <div className="flex gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed">"{t.quote}"</p>
                <div className="mt-auto pt-2">
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.trip}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Guarantee strip */}
        <div className="max-w-3xl mx-auto flex items-start gap-4 rounded-2xl border border-primary/20 bg-primary/5 p-6">
          <BadgeCheck className="h-10 w-10 text-primary shrink-0" />
          <div>
            <div className="font-semibold text-foreground mb-1">Buy with confidence</div>
            <p className="text-sm text-muted-foreground">
              Payments are processed securely by Paystack, and un-activated eSIMs are eligible
              for a full refund within 24 hours. Our team is on WhatsApp if you ever need a hand.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
