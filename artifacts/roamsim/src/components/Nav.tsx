import { Link } from "wouter";
import { WHATSAPP_LINK } from "@/config";
import { WhatsAppButton } from "./WhatsAppButton";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

export function Nav() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: "/#how-it-works", label: "How it works" },
    { href: "/#plans", label: "Plans" },
    { href: "/#why-roamsim", label: "Why RoamSIM" },
    { href: "/#faq", label: "FAQ" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" data-testid="link-home">
          <span className="text-xl font-bold tracking-tight text-primary">RoamSIM</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              data-testid={`link-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {link.label}
            </a>
          ))}
          <WhatsAppButton size="sm" />
        </div>

        {/* Mobile Nav */}
        <div className="flex md:hidden items-center gap-4">
          <WhatsAppButton size="sm" text="Chat" className="px-3" />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button className="text-foreground" data-testid="button-menu">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80vw] sm:w-[350px]">
              <div className="flex flex-col gap-6 pt-10">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-lg font-medium text-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                ))}
                <WhatsAppButton className="w-full mt-4" onClick={() => setOpen(false)} />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
