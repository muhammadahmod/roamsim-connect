import { motion } from "framer-motion";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Trust } from "@/components/Trust";
import { ShieldCheck, Zap, Globe, MessageCircle, CreditCard, QrCode, CheckCircle2, PhoneOff, Clock } from "lucide-react";
import { PLANS, FAQ_ITEMS, WHATSAPP_LINK, CONTACT_EMAIL, SUPPORT_HOURS } from "@/config";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Nav />
      <main className="flex-1">

        {/* HERO SECTION */}
        <section id="hero" className="relative overflow-hidden bg-background pt-16 md:pt-24 pb-20 md:pb-32 lg:pb-40">
          <div className="absolute inset-0 bg-primary/5 [mask-image:linear-gradient(to_bottom,white,transparent)]" />
          <div className="container mx-auto px-4 md:px-6 relative">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
              <motion.div
                className="flex flex-col justify-center space-y-8"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
              >
                <div className="space-y-4">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
                    Instant travel data. <br />
                    <span className="text-primary">No roaming bills.</span>
                  </h1>
                  <p className="max-w-[600px] text-lg md:text-xl text-muted-foreground leading-relaxed">
                    RoamSIM delivers affordable eSIM data plans for South Africans travelling worldwide. Get connected before you land — no physical SIM required.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <WhatsAppButton size="lg" className="w-full sm:w-auto" text="Get your eSIM on WhatsApp" />
                </div>

                <div className="pt-4 border-t border-border/50">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-amber-400 text-base leading-none">★★★★★</span>
                    <span className="text-sm text-muted-foreground">Loved by South African travellers</span>
                  </div>
                  <p className="text-sm font-medium text-foreground mb-4">Trusted by South Africans travelling to 100+ countries</p>
                  <div className="flex flex-wrap gap-4 md:gap-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Zap className="h-4 w-4 text-primary" />
                      <span>Instant delivery</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <ShieldCheck className="h-4 w-4 text-primary" />
                      <span>Secure payment</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Globe className="h-4 w-4 text-primary" />
                      <span>No physical SIM needed</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="relative hidden lg:flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {/* Phone + QR mockup */}
                <div className="relative w-full max-w-[340px] mx-auto">
                  <div className="absolute -inset-6 bg-primary/15 rounded-[3rem] blur-3xl opacity-70" />
                  <div className="relative aspect-[9/19] rounded-[2.75rem] border-[10px] border-foreground bg-foreground shadow-2xl">
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-5 bg-foreground rounded-full z-20" />
                    <div className="absolute inset-0 m-[2px] rounded-[2.25rem] overflow-hidden bg-gradient-to-b from-primary/10 via-background to-background">
                      <div className="h-full w-full flex flex-col items-center justify-center gap-5 p-6 text-center">
                        <div className="text-primary font-bold text-lg tracking-tight">RoamSIM</div>
                        <div className="rounded-2xl bg-white p-4 shadow-lg border border-border">
                          <QrCode className="h-28 w-28 text-foreground" strokeWidth={1.5} />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">Your eSIM is ready</p>
                          <p className="text-xs text-muted-foreground mt-1">UK · 15 GB · 30 days</p>
                        </div>
                        <div className="inline-flex items-center gap-1.5 rounded-full bg-green-100 text-green-700 px-3 py-1 text-xs font-medium">
                          <CheckCircle2 className="h-3.5 w-3.5" /> Connected
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Floating elements */}
                  <Card className="absolute top-[14%] -right-6 p-3 shadow-lg border-primary/20 bg-background/95 backdrop-blur hidden xl:block">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                        <CheckCircle2 className="h-5 w-5" />
                      </div>
                      <div className="text-sm font-medium">Connected to UK</div>
                    </div>
                  </Card>
                  <Card className="absolute bottom-[16%] -left-6 p-3 shadow-lg border-primary/20 bg-background/95 backdrop-blur hidden xl:block">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <QrCode className="h-5 w-5" />
                      </div>
                      <div className="text-sm font-medium">eSIM Installed</div>
                    </div>
                  </Card>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works" className="py-20 md:py-32 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-[800px] mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">How it works</h2>
              <p className="text-lg text-muted-foreground">Get connected in minutes, entirely through WhatsApp.</p>
            </div>

            <motion.div
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Connecting line for desktop */}
              <div className="hidden lg:block absolute top-8 left-[12%] right-[12%] h-[2px] bg-border z-0" />

              <motion.div variants={fadeIn} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-6 shadow-md border-4 border-background">
                  1
                </div>
                <div className="w-12 h-12 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center mb-4">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Message us</h3>
                <p className="text-muted-foreground text-sm">Send us a message on WhatsApp to start your order.</p>
              </motion.div>

              <motion.div variants={fadeIn} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-6 shadow-md border-4 border-background">
                  2
                </div>
                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Pick your plan</h3>
                <p className="text-muted-foreground text-sm">Tell us your destination and we'll recommend the best data package.</p>
              </motion.div>

              <motion.div variants={fadeIn} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-6 shadow-md border-4 border-background">
                  3
                </div>
                <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center mb-4">
                  <CreditCard className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Pay securely</h3>
                <p className="text-muted-foreground text-sm">Complete your payment securely via card through our Paystack link.</p>
              </motion.div>

              <motion.div variants={fadeIn} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-6 shadow-md border-4 border-background">
                  4
                </div>
                <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                  <QrCode className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Scan & Connect</h3>
                <p className="text-muted-foreground text-sm">Receive your QR code instantly, scan it, and enjoy your data.</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* DESTINATIONS & PLANS */}
        <section id="plans" className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div className="max-w-[600px]">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Popular Destinations</h2>
                <p className="text-lg text-muted-foreground">We cover over 100+ countries. Here are our most popular data plans for South African travellers.</p>
              </div>
              <WhatsAppButton text="Ask about other countries" variant="outline" />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {PLANS.map((planGroup, idx) => (
                <Card key={idx} className="overflow-hidden border-border/60 hover:shadow-md transition-shadow group">
                  <CardContent className="p-0">
                    <div className="p-6 bg-muted/40 border-b border-border/40 flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-2xl" aria-hidden="true">{planGroup.emoji}</span>
                          <h3 className="font-bold text-lg">{planGroup.destination}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">{planGroup.tagline}</p>
                      </div>
                    </div>
                    <div className="p-6 bg-card space-y-4">
                      {planGroup.plans.map((plan, pIdx) => (
                        <div key={pIdx} className="flex justify-between items-center py-2 border-b border-border/40 last:border-0 last:pb-0">
                          <div>
                            <p className="font-medium">{plan.data}</p>
                            <p className="text-xs text-muted-foreground">{plan.validity}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-primary">{plan.price}</p>
                          </div>
                        </div>
                      ))}
                      <div className="pt-4">
                        <WhatsAppButton
                          className="w-full"
                          text={`Get ${planGroup.destination} Plan`}
                          href={`${WHATSAPP_LINK}?text=Hi, I'm interested in an eSIM for ${planGroup.destination}.`}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900 rounded-lg p-4 text-sm text-amber-800 dark:text-amber-200 flex gap-3">
              <span className="text-lg">⚠️</span>
              <p><strong>Indicative pricing only</strong> — Because we source from global networks, exchange rates may cause slight fluctuations. Your exact price is confirmed on WhatsApp before any payment is requested.</p>
            </div>
          </div>
        </section>

        {/* WHY ROAMSIM */}
        <section id="why-roamsim" className="py-20 md:py-32 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-[800px] mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">Why travellers choose RoamSIM</h2>
              <p className="text-lg text-primary-foreground/80">A smarter way to stay connected abroad without the shock of roaming charges.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-primary-foreground/10 border border-primary-foreground/20 rounded-xl p-6 backdrop-blur-sm">
                <PhoneOff className="h-8 w-8 mb-4 text-green-300" />
                <h3 className="text-xl font-bold mb-2 text-white">No roaming bills</h3>
                <p className="text-primary-foreground/80 text-sm">Never return home to a massive bill from Vodacom, MTN, or Telkom. Prepaid means you control the cost.</p>
              </div>
              <div className="bg-primary-foreground/10 border border-primary-foreground/20 rounded-xl p-6 backdrop-blur-sm">
                <Globe className="h-8 w-8 mb-4 text-blue-300" />
                <h3 className="text-xl font-bold mb-2 text-white">Keep your SA number</h3>
                <p className="text-primary-foreground/80 text-sm">Your physical SA SIM stays active for SMS (like bank OTPs) while the eSIM handles all your data needs.</p>
              </div>
              <div className="bg-primary-foreground/10 border border-primary-foreground/20 rounded-xl p-6 backdrop-blur-sm">
                <QrCode className="h-8 w-8 mb-4 text-orange-300" />
                <h3 className="text-xl font-bold mb-2 text-white">No physical SIMs</h3>
                <p className="text-primary-foreground/80 text-sm">No tiny pins, no lost SIM cards, no queueing at airport kiosks. Just scan a QR code and go.</p>
              </div>
              <div className="bg-primary-foreground/10 border border-primary-foreground/20 rounded-xl p-6 backdrop-blur-sm">
                <Zap className="h-8 w-8 mb-4 text-yellow-300" />
                <h3 className="text-xl font-bold mb-2 text-white">Instant delivery</h3>
                <p className="text-primary-foreground/80 text-sm">Your QR code is generated instantly upon payment. You can buy it at the boarding gate or upon arrival.</p>
              </div>
              <div className="bg-primary-foreground/10 border border-primary-foreground/20 rounded-xl p-6 backdrop-blur-sm">
                <CheckCircle2 className="h-8 w-8 mb-4 text-teal-300" />
                <h3 className="text-xl font-bold mb-2 text-white">100+ Countries</h3>
                <p className="text-primary-foreground/80 text-sm">From Europe to Asia, Americas to the Middle East — we have a reliable high-speed data plan for you.</p>
              </div>
              <div className="bg-primary-foreground/10 border border-primary-foreground/20 rounded-xl p-6 backdrop-blur-sm">
                <Clock className="h-8 w-8 mb-4 text-purple-300" />
                <h3 className="text-xl font-bold mb-2 text-white">Local SAST Support</h3>
                <p className="text-primary-foreground/80 text-sm">Chat with real people on WhatsApp in your timezone, not a generic international bot.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SOCIAL PROOF / TRUST */}
        <Trust />

        {/* DEVICE COMPATIBILITY */}
        <section id="compatibility" className="py-20 bg-muted/50 border-y border-border/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Is my device compatible?</h2>
              <p className="text-lg text-muted-foreground">
                Your device must be <strong>eSIM-capable</strong> and <strong>carrier-unlocked</strong> to use our service. Most flagship smartphones released after 2018 are compatible.
              </p>
              <div className="bg-background p-6 rounded-lg shadow-sm border text-left my-8">
                <h4 className="font-semibold mb-2">💡 Quick check for iPhone/Android:</h4>
                <p className="text-sm text-muted-foreground">
                  Go to <strong>Settings → General → About</strong>. If you scroll down and see a 32-digit number labelled <strong>"EID"</strong>, your phone supports eSIM.
                </p>
              </div>
              <div className="space-y-4">
                <p className="font-medium">Not sure? Message us on WhatsApp — we'll confirm for your exact model.</p>
                <div className="flex justify-center">
                  <WhatsAppButton variant="outline" text="Check Compatibility on WhatsApp" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-[800px] mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {FAQ_ITEMS.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-medium text-base hover:text-primary transition-colors">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CONTACT & CTA */}
        <section id="contact" className="py-20 md:py-32 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto bg-card border rounded-2xl shadow-sm p-8 md:p-12 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-primary" />
              <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to get connected?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                No forms, no apps to download, no accounts to create. Just tap the button below to start a WhatsApp chat with our team.
              </p>

              <div className="flex flex-col items-center gap-6">
                <WhatsAppButton size="lg" className="w-full sm:w-auto h-14 text-lg px-10 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1" />

                <div className="space-y-2 text-sm text-muted-foreground">
                  <p><strong>Support Hours:</strong> {SUPPORT_HOURS}</p>
                  <p><strong>Email:</strong> <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-primary underline underline-offset-4">{CONTACT_EMAIL}</a></p>
                  <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-muted rounded-full">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                    </span>
                    <span className="font-medium text-foreground">We respond quickly — usually within the hour</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
