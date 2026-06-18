import { Link } from "wouter";
import { CONTACT_EMAIL } from "@/config";

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <span className="text-xl font-bold tracking-tight text-primary">RoamSIM</span>
            <p className="text-sm text-muted-foreground max-w-xs">
              Instant travel data for South Africans worldwide. No roaming bills, no physical SIM required.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/refunds" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="/#faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {CONTACT_EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} RoamSIM. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {/* Payment badges or similar trust indicators could go here */}
          </div>
        </div>
      </div>
    </footer>
  );
}
