import { cn } from "@/lib/utils";

type PillProps = React.ComponentProps<"a"> & {
  /** Filled accent pill; otherwise an outlined one */
  primary?: boolean;
  size?: "md" | "lg";
};

/** A rounded link used for product links, store badges and calls to action */
export function Pill({
  primary = false,
  size = "md",
  className,
  children,
  ...rest
}: PillProps) {
  return (
    <a
      className={cn(
        "inline-flex items-center gap-2 whitespace-nowrap rounded-full font-semibold transition-colors",
        size === "md" && "h-9 px-3.5 text-sm",
        size === "lg" && "h-12 px-5 font-display text-sm",
        primary
          ? "bg-accent text-ink hover:bg-accent-strong"
          : "border border-paper/20 text-paper hover:bg-ink-3",
        className,
      )}
      {...rest}
    >
      {children}
    </a>
  );
}
