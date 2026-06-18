import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CONTACT_EMAIL } from "@/config";

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1 container mx-auto px-4 py-12 md:px-6 md:py-16 max-w-4xl">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl mb-8">Privacy Policy</h1>
        
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString('en-ZA', { month: 'long', year: 'numeric' })}</p>
          
          <h2>Introduction</h2>
          <p>RoamSIM respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you use our services.</p>
          
          <h2>Data We Collect</h2>
          <p>To provide our services, we collect limited personal information:</p>
          <ul>
            <li><strong>Contact Information:</strong> Your name, email address, and WhatsApp number.</li>
            <li><strong>Technical Information:</strong> Your device model (solely for the purpose of checking eSIM compatibility).</li>
            <li><strong>Transaction Information:</strong> Details about the eSIM plans you purchase.</li>
          </ul>
          
          <h2>How We Use Your Data</h2>
          <p>We use your information strictly for the following purposes:</p>
          <ul>
            <li>To process your order and deliver your eSIM QR code.</li>
            <li>To provide customer support and troubleshoot issues.</li>
            <li>To send important service updates regarding your purchase.</li>
            <li>To comply with legal and regulatory obligations.</li>
          </ul>
          
          <h2>Payment Data</h2>
          <p>All payments are processed securely by our authorized payment partner, Paystack. <strong>RoamSIM does not collect, store, or have access to your full credit card details.</strong></p>
          
          <h2>Data Sharing</h2>
          <p>We do not sell your personal data to third parties. We only share necessary information with:</p>
          <ul>
            <li>Our payment processor (Paystack) to facilitate your payment.</li>
            <li>Our global telecommunications partners (strictly necessary details to provision your eSIM profile).</li>
          </ul>
          
          <h2>Data Retention</h2>
          <p>We retain your personal data only for as long as necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.</p>
          
          <h2>Your Rights</h2>
          <p>Under applicable data protection laws, you have the right to:</p>
          <ul>
            <li>Request access to your personal data.</li>
            <li>Request correction of incomplete or inaccurate data.</li>
            <li>Request erasure of your personal data.</li>
            <li>Withdraw consent at any time where we are relying on consent to process your data.</li>
          </ul>
          
          <h2>Contact Us</h2>
          <p>If you wish to exercise any of these rights or have questions about this privacy policy, please contact us at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
