import { ArrowRight } from "lucide-react";

export default function Button({
  children,
  href = "#",
  variant = "primary",
  className = "",
  as: As = "a",
  onClick,
}) {
  const base =
    "group relative inline-flex items-center gap-2 rounded-md px-6 py-3.5 font-body text-sm font-semibold transition-all duration-300";

  if (variant === "primary") {
    return (
      <As
        href={As === "a" ? href : undefined}
        type={As === "button" ? "button" : undefined}
        onClick={onClick}
        className={`${base} bg-accent text-white shadow-[0_0_0_1px_rgba(139,92,246,0.4)] hover:bg-accentSoft hover:shadow-glowMd ${className}`}
      >
        {children}
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </As>
    );
  }

  return (
    <As
      href={As === "a" ? href : undefined}
      type={As === "button" ? "button" : undefined}
      onClick={onClick}
      className={`${base} border border-border bg-white/[0.02] text-textPrimary hover:border-borderStrong hover:bg-white/[0.05] ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </As>
  );
}
