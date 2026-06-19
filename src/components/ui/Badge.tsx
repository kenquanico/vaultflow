import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-pill border px-4 py-2 text-caption font-medium transition-colors",
  {
    variants: {
      variant: {
        default:
          "border-white/15 bg-white/[0.04] text-vault-lavender shadow-[inset_0_1px_0_hsl(var(--foreground)/0.12)]",
        purple: "border-primary/40 bg-primary/10 text-vault-lavender",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant, className }))} {...props} />;
}

export { badgeVariants };
