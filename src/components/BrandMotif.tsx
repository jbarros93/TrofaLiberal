export function BrandMotif({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 480"
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
    >
      <rect x="88" y="150" width="64" height="330" rx="32" fill="white" fillOpacity="0.05" />
      <circle cx="120" cy="70" r="55" fill="var(--color-liberal-400)" fillOpacity="0.35" />
      <circle cx="120" cy="70" r="55" fill="none" stroke="white" strokeOpacity="0.1" strokeWidth="3" />
    </svg>
  );
}
