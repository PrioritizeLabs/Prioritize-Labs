"use client";

const nodes = [
  { label: "DATA", angle: -90 },
  { label: "AI ENGINE", angle: -18 },
  { label: "ADS", angle: 54 },
  { label: "SEO", angle: 126 },
  { label: "SOCIAL", angle: 198 },
];

const R = 180;
const CX = 250;
const CY = 250;

function pointOn(angleDeg, radius) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: CX + radius * Math.cos(rad), y: CY + radius * Math.sin(rad) };
}

export default function AICore({ className = "" }) {
  return (
    <div className={`relative ${className}`} aria-hidden="true">
      <svg viewBox="0 0 500 500" className="h-full w-full">
        <defs>
          <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.55" />
            <stop offset="55%" stopColor="#8B5CF6" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="lineFade" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0" />
            <stop offset="50%" stopColor="#A78BFA" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* ambient core glow */}
        <circle cx={CX} cy={CY} r="150" fill="url(#coreGlow)" />

        {/* outer static rings */}
        <circle cx={CX} cy={CY} r={R} fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
        <circle cx={CX} cy={CY} r={R - 40} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
        <circle cx={CX} cy={CY} r={R + 46} fill="none" stroke="rgba(255,255,255,0.035)" strokeWidth="1" strokeDasharray="2 8" />

        {/* connecting spokes with traveling pulse */}
        <g>
          {nodes.map((n, i) => {
            const p = pointOn(n.angle, R);
            return (
              <line
                key={n.label}
                x1={CX}
                y1={CY}
                x2={p.x}
                y2={p.y}
                stroke="rgba(255,255,255,0.09)"
                strokeWidth="1"
              />
            );
          })}
          {nodes.map((n, i) => {
            const p = pointOn(n.angle, R);
            return (
              <line
                key={`pulse-${n.label}`}
                x1={CX}
                y1={CY}
                x2={p.x}
                y2={p.y}
                stroke="url(#lineFade)"
                strokeWidth="2"
                strokeDasharray="18 190"
                className="animate-dashMove"
                style={{ animationDelay: `${i * 0.9}s` }}
              />
            );
          })}
        </g>

        {/* rotating outer node ring */}
        <g className="origin-center animate-rotateSlow" style={{ transformOrigin: `${CX}px ${CY}px` }}>
          {nodes.map((n) => {
            const p = pointOn(n.angle, R);
            return (
              <g key={n.label}>
                <circle cx={p.x} cy={p.y} r="5" fill="#A78BFA" className="animate-pulseGlow" />
                <circle cx={p.x} cy={p.y} r="11" fill="none" stroke="rgba(139,92,246,0.4)" strokeWidth="1" />
              </g>
            );
          })}
        </g>

        {/* counter-rotating labels (kept upright) */}
        <g>
          {nodes.map((n) => {
            const p = pointOn(n.angle, R + 30);
            return (
              <text
                key={`label-${n.label}`}
                x={p.x}
                y={p.y}
                textAnchor="middle"
                className="fill-textMuted font-mono"
                style={{ fontSize: "10px", letterSpacing: "0.12em" }}
              >
                {n.label}
              </text>
            );
          })}
        </g>

        {/* center core */}
        <circle cx={CX} cy={CY} r="46" fill="#0A0A0A" stroke="rgba(139,92,246,0.55)" strokeWidth="1.5" />
        <circle cx={CX} cy={CY} r="46" fill="none" stroke="rgba(139,92,246,0.28)" strokeWidth="10" className="animate-pulseGlow" />
        <text x={CX} y={CY + 4} textAnchor="middle" className="fill-white font-mono font-semibold" style={{ fontSize: "13px", letterSpacing: "0.08em" }}>
          GROWTH
        </text>
      </svg>
    </div>
  );
}
