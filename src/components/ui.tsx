import { type ReactNode } from "react";
import { Link } from "react-router-dom";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-3 inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-widest text-liberal-600">
      <span className="brand-dot h-1.5 w-1.5 shrink-0 rounded-full" />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  center,
  invert,
}: {
  eyebrow?: string;
  title: ReactNode;
  text?: ReactNode;
  center?: boolean;
  invert?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <p
          className={`mb-3 inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-widest ${
            invert ? "text-liberal-400" : "text-liberal-600"
          }`}
        >
          <span className="brand-dot h-1.5 w-1.5 shrink-0 rounded-full" />
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-balance font-display text-3xl font-bold sm:text-4xl ${
          invert ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {text && (
        <p className={`mt-4 text-lg leading-relaxed ${invert ? "text-white/60" : "text-ink-soft/70"}`}>
          {text}
        </p>
      )}
    </div>
  );
}

export function Button({
  to,
  href,
  onClick,
  variant = "primary",
  type,
  children,
  className = "",
}: {
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost" | "dark";
  type?: "button" | "submit";
  children: ReactNode;
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-display text-sm font-semibold transition-all duration-200 active:scale-[0.97]";
  const styles: Record<string, string> = {
    primary:
      "bg-liberal-500 text-white shadow-lg shadow-liberal-500/25 hover:-translate-y-0.5 hover:bg-liberal-600 hover:shadow-xl hover:shadow-liberal-600/30",
    secondary:
      "bg-white text-ink border border-black/10 hover:-translate-y-0.5 hover:border-liberal-400 hover:text-liberal-600 hover:shadow-md",
    ghost: "text-ink hover:text-liberal-600",
    dark: "bg-ink text-white hover:-translate-y-0.5 hover:bg-ink-soft hover:shadow-xl hover:shadow-black/20",
  };
  const cls = `${base} ${styles[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={cls} onClick={onClick}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={cls} onClick={onClick}>
        {children}
      </a>
    );
  }
  return (
    <button type={type ?? "button"} onClick={onClick} className={cls}>
      {children}
    </button>
  );
}

export function Card({
  children,
  className = "",
  accent = false,
}: {
  children: ReactNode;
  className?: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-black/5 bg-white p-6 shadow-sm shadow-black/[0.02] transition-all duration-300 hover:-translate-y-0.5 hover:border-liberal-200 hover:shadow-lg hover:shadow-liberal-900/[0.06] ${className}`}
    >
      {accent && (
        <span className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-liberal-600 to-liberal-300" />
      )}
      {children}
    </div>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-liberal-50 px-3 py-1 font-display text-xs font-semibold text-liberal-700">
      {children}
    </span>
  );
}
