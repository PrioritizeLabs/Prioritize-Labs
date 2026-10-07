export default function Eyebrow({ children, className = "" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="h-px w-6 bg-accent/70" />
      <span className="font-mono text-[11px] font-medium uppercase tracking-[0.32em] text-accent">
        {children}
      </span>
    </div>
  );
}
