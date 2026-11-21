import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function StarRating({
  rating,
  className,
  onPink = false,
}: {
  rating: number;
  className?: string;
  /** Use ink-filled stars when placed on a pink background. */
  onPink?: boolean;
}) {
  return (
    <div className={cn("flex items-center gap-0.5", className)} role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          aria-hidden="true"
          className={cn("size-4 stroke-ink stroke-[1.5]", i < Math.round(rating) ? (onPink ? "fill-ink" : "fill-pink") : "fill-paper")}
        />
      ))}
    </div>
  );
}
