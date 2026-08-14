import { cn } from "@/lib/cn";

type ComponentProps = React.HTMLAttributes<HTMLDivElement>;

export function Card({ className, ...props }: ComponentProps) {
  return (
    <div
      className={cn(
        "border border-[var(--line)] bg-[color:color-mix(in_srgb,var(--surface)_92%,transparent)] shadow-[var(--shadow-soft)]",
        className,
      )}
      {...props}
    />
  );
}

export function CardHeader({ className, ...props }: ComponentProps) {
  return <div className={cn("p-5 pb-0", className)} {...props} />;
}

export function CardTitle({ className, ...props }: ComponentProps) {
  return <h3 className={cn("text-xl font-semibold tracking-tight", className)} {...props} />;
}

export function CardDescription({ className, ...props }: ComponentProps) {
  return <p className={cn("mt-2 text-sm leading-6 text-[var(--text-muted)]", className)} {...props} />;
}

export function CardContent({ className, ...props }: ComponentProps) {
  return <div className={cn("p-5", className)} {...props} />;
}
