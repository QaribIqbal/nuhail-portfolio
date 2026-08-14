import { Slot } from "@radix-ui/react-slot";
import { forwardRef } from "react";
import { cn } from "@/lib/cn";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: "primary" | "secondary" | "quiet" | "text";
  size?: "sm" | "md" | "lg";
};

const variantClass = {
  primary:
    "button-primary hover:-translate-y-0.5 active:translate-y-px",
  secondary:
    "border border-[var(--line-strong)] bg-white/[0.04] text-[var(--text)] hover:-translate-y-0.5 hover:border-[var(--signal)]/70 active:translate-y-px",
  quiet: "text-[var(--text)] hover:bg-white/[0.06] active:scale-[0.98]",
  text: "px-0 text-[var(--signal)] underline-offset-4 hover:underline",
} as const;

const sizeClass = {
  sm: "min-h-9 px-3 text-sm",
  md: "min-h-11 px-4 text-sm",
  lg: "min-h-12 px-5 text-base",
} as const;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { asChild = false, className, size = "md", variant = "primary", ...props },
  ref,
) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--signal)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ink)]",
        variantClass[variant],
        sizeClass[size],
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
