import { SiWhatsapp } from "react-icons/si";
import { WHATSAPP_LINK } from "@/config";
import { cn } from "@/lib/utils";

interface WhatsAppButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  text?: string;
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
}

export function WhatsAppButton({
  text = "Chat on WhatsApp",
  className,
  variant = "default",
  size = "default",
  ...props
}: WhatsAppButtonProps) {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
        {
          "bg-[#25D366] text-white hover:bg-[#20bd5a] hover-elevate": variant === "default",
          "border border-[#25D366] text-[#25D366] hover:bg-[#25D366]/10": variant === "outline",
          "hover:bg-[#25D366]/10 text-[#25D366]": variant === "ghost",
          "h-9 px-4 py-2": size === "default",
          "h-8 rounded-md px-3 text-xs": size === "sm",
          "h-10 rounded-md px-8 text-base": size === "lg",
          "h-9 w-9": size === "icon",
        },
        className
      )}
      data-testid="button-whatsapp"
      {...props}
    >
      <SiWhatsapp className={size === "lg" ? "h-5 w-5" : "h-4 w-4"} />
      {text && <span>{text}</span>}
    </a>
  );
}
