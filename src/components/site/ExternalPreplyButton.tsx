import { ArrowUpRight } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { PREPLY_PROFILE_URL } from "@/data/siteData";

interface ExternalPreplyButtonProps {
  label: string;
  href?: string;
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
  className?: string;
}

/** Any link out to Preply: always opens in a new tab with a visible ↗ cue. */
export function ExternalPreplyButton({
  label,
  href = PREPLY_PROFILE_URL,
  variant = "paper",
  size = "lg",
  className,
}: ExternalPreplyButtonProps) {
  return (
    <Button asChild variant={variant} size={size} {...(className ? { className } : {})}>
      <a href={href} target="_blank" rel="noopener noreferrer">
        {label}
        <ArrowUpRight aria-hidden="true" />
        <span className="sr-only">(opens Preply in a new tab)</span>
      </a>
    </Button>
  );
}
