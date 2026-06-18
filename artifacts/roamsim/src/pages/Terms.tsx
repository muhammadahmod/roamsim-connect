import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1 container mx-auto px-4 py-12 md:px-6 md:py-16 max-w-4xl">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl mb-8">Terms & Conditions</h1>
        
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString('en-ZA', { month: 'long', year: 'numeric' })}</p>
          
          <h2>1. Introduction</h2>
          <p>Welcome to RoamSIM ("we", "our", "us"). By placing an order with us, you agree to be bound by these Terms & Conditions. Please read them carefully.</p>
          
          <h2>2. Service Description</h2>
          <p>RoamSIM facilitates the sale of digital eSIM data plans delivered by QR code via email and/or WhatsApp. We are a digital service provider acting as a reseller for international telecommunications networks.</p>
          
          <h2>3. Customer Eligibility & Device Compatibility</h2>
          <p>To use our service, you must own an eSIM-compatible, carrier-unlocked device. It is your sole responsibility to ensure your device is compatible before making a purchase. If you are unsure, please contact us prior to ordering.</p>
          
          <h2>4. Order Process & Pricing</h2>
          <p>Orders are placed via our WhatsApp channel. All prices displayed on our website are indicative. Your exact price will be confirmed on WhatsApp before you are asked to make payment. All prices are in South African Rand (ZAR).</p>
          
          <h2>5. Payment</h2>
          <p>Payments are processed securely via our third-party payment processor (Paystack). We do not store or have direct access to your credit card information.</p>
          
          <h2>6. Delivery</h2>
          <p>Upon successful payment confirmation, your eSIM QR code and installation instructions will be sent to your nominated email address and/or WhatsApp number within minutes. In rare circumstances, delivery may be delayed due to network or system issues.</p>
          
          <h2>7. Refunds</h2>
          <p>Refunds are strictly governed by our <a href="/refunds">Refund Policy</a>. Please review this policy before purchasing.</p>
          
          <h2>8. Liability</h2>
          <p>RoamSIM is not responsible for:</p>
          <ul>
            <li>Network outages, poor coverage, or slow data speeds in your destination country.</li>
            <li>Inability to use the service due to an incompatible or carrier-locked device.</li>
            <li>Loss of data or additional charges incurred from your home carrier due to improper installation or failure to disable physical SIM data roaming.</li>
          </ul>
          
          <h2>9. Governing Law</h2>
          <p>These Terms & Conditions shall be governed by and construed in accordance with the laws of South Africa.</p>
          
          <h2>10. Contact Us</h2>
          <p>If you have any questions about these Terms, please contact us at <a href="mailto:muhammadahmod06@gmail.com">muhammadahmod06@gmail.com</a>.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
