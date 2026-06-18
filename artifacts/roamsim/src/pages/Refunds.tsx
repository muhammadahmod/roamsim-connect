import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export default function Refunds() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1 container mx-auto px-4 py-12 md:px-6 md:py-16 max-w-4xl">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl mb-8">Refund Policy</h1>
        
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString('en-ZA', { month: 'long', year: 'numeric' })}</p>
          
          <h2>Digital Goods Policy</h2>
          <p>RoamSIM provides digital eSIM products. Due to the nature of digital goods, our refund policy differs from physical products.</p>
          
          <h2>Eligible for Refund</h2>
          <p>You may be eligible for a full refund if:</p>
          <ul>
            <li>The eSIM has <strong>NOT</strong> been installed or activated on any device.</li>
            <li>You request the refund within 24 hours of purchase.</li>
            <li>There was a technical delivery failure and you never received the eSIM QR code.</li>
          </ul>
          
          <h2>Not Eligible for Refund</h2>
          <p>We cannot issue a refund under the following circumstances:</p>
          <ul>
            <li>The eSIM QR code has been scanned and the profile has been installed on a device. Once installed, the data plan is considered consumed and cannot be retrieved or resold.</li>
            <li>Your device is not eSIM compatible or is carrier-locked, and you did not verify this before purchase and installation.</li>
            <li>You have travelled to a destination not covered by the specific plan you purchased.</li>
            <li>You experience poor network coverage in specific remote areas, as we rely on local network partners.</li>
          </ul>
          
          <h2>How to Request a Refund</h2>
          <p>To request a refund, please email <strong>muhammadahmod06@gmail.com</strong> with:</p>
          <ul>
            <li>Your name and WhatsApp number used for the order</li>
            <li>Your order date and amount</li>
            <li>The reason for the refund request</li>
          </ul>
          
          <h2>Processing Time</h2>
          <p>We aim to review and process all refund requests within 2–3 business days. If approved, the refund will be returned automatically to your original payment method. Depending on your bank, it may take an additional 3–7 business days to reflect in your account.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
