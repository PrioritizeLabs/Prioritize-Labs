export default function AmbientBackground({ variant = "top", className = "" }) {
  const glow = variant === "top" ? "radial-glow-top" : variant === "center" ? "radial-glow-center" : "";
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <div className={`absolute inset-0 ${glow}`} />
      <div className="absolute inset-0 bg-grid opacity-60" />
    </div>
  );
}
