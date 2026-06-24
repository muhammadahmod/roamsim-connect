// ============================================================
// RoamSIM — EDITABLE CONFIGURATION
// Update the WhatsApp number and contact email here.
// ============================================================

export const WHATSAPP_NUMBER = "15044748913"; // Twilio number (international format, no +)
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
export const CONTACT_EMAIL = "muhammadahmod06@gmail.com";
export const SUPPORT_HOURS = "Mon–Fri, 8am–8pm SAST · Sat–Sun, 9am–5pm SAST";

// Destination plans — kept in sync with the WhatsApp bot catalog (server.mjs).
// Edit prices, data, and validity here.
export const PLANS = [
  { destination: "United Arab Emirates", emoji: "🇦🇪", tagline: "Perfect for Dubai trips", plans: [
    { name: "UAE Starter", data: "5GB", validity: "7 days", price: "R229" },
    { name: "UAE Explorer", data: "15GB", validity: "30 days", price: "R499" },
    { name: "UAE Plus", data: "20GB", validity: "30 days", price: "R799" },
  ]},
  { destination: "United Kingdom", emoji: "🇬🇧", tagline: "Stay connected in the UK", plans: [
    { name: "UK Starter", data: "5GB", validity: "7 days", price: "R249" },
    { name: "UK Explorer", data: "15GB", validity: "30 days", price: "R549" },
    { name: "UK Unlimited", data: "Unlimited", validity: "30 days", price: "R899" },
  ]},
  { destination: "United States", emoji: "🇺🇸", tagline: "Coverage across the US", plans: [
    { name: "US Starter", data: "5GB", validity: "7 days", price: "R279" },
    { name: "US Explorer", data: "15GB", validity: "30 days", price: "R599" },
    { name: "US Unlimited", data: "Unlimited", validity: "30 days", price: "R999" },
  ]},
  { destination: "Europe (Regional)", emoji: "🇪🇺", tagline: "40+ European countries", plans: [
    { name: "Europe Starter", data: "5GB", validity: "14 days", price: "R349" },
    { name: "Europe Explorer", data: "15GB", validity: "30 days", price: "R699" },
    { name: "Europe Unlimited", data: "Unlimited", validity: "30 days", price: "R1099" },
  ]},
  { destination: "Australia", emoji: "🇦🇺", tagline: "Explore Australia connected", plans: [
    { name: "Australia Starter", data: "5GB", validity: "14 days", price: "R299" },
    { name: "Australia Explorer", data: "15GB", validity: "30 days", price: "R599" },
    { name: "Australia Unlimited", data: "Unlimited", validity: "30 days", price: "R999" },
  ]},
  { destination: "Saudi Arabia", emoji: "🇸🇦", tagline: "Ideal for Umrah & Hajj travellers", plans: [
    { name: "KSA Starter", data: "5GB", validity: "14 days", price: "R259" },
    { name: "KSA Explorer", data: "15GB", validity: "30 days", price: "R549" },
    { name: "KSA Plus", data: "20GB", validity: "30 days", price: "R849" },
  ]},
];

export const FAQ_ITEMS = [
  {
    question: "What is an eSIM?",
    answer: "An eSIM (embedded SIM) is a digital SIM built into your phone. Instead of inserting a physical card, you scan a QR code and your phone connects to the local network — no hardware needed.",
  },
  {
    question: "Is my phone compatible?",
    answer: "Most smartphones released after 2018 support eSIM, including iPhone XS and newer, Google Pixel 3 and newer, and many Samsung Galaxy models. Your device must also be carrier-unlocked. Chat with us on WhatsApp and we'll confirm compatibility for your exact model.",
  },
  {
    question: "How do I receive my eSIM?",
    answer: "After payment is confirmed, we'll send your eSIM QR code directly to your email and/or WhatsApp. Simply scan the QR code in your phone's settings to install it. The whole process takes under 2 minutes.",
  },
  {
    question: "How long does delivery take?",
    answer: "Most eSIMs are delivered within minutes of payment confirmation. In rare cases, delivery may take up to 1 hour during peak times.",
  },
  {
    question: "Can I get a refund?",
    answer: "eSIMs that have not yet been installed or activated may be eligible for a refund within 24 hours of purchase. Once an eSIM has been scanned and activated, it is non-refundable as the data plan has been consumed. To request a refund, email us at muhammadahmod06@gmail.com.",
  },
  {
    question: "Which destinations do you cover?",
    answer: "We cover 100+ countries worldwide, including UAE, UK, USA, Europe, Australia, Saudi Arabia, and many more. Message us on WhatsApp with your destination and we'll find the best plan for you.",
  },
];
