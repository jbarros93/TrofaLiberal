import { type ReactNode } from "react";
import { Link } from "react-router-dom";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-3 inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-widest text-liberal-600">
      <span className="h-1.5 w-1.5 rounded-full bg-liberal-500" />
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
          <span className="h-1.5 w-1.5 rounded-full bg-liberal-500" />
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
      "bg-liberal-500 text-white shadow-lg shadow-liberal-500/25 hover:bg-liberal-600 hover:shadow-liberal-600/30",
    secondary:
      "bg-white text-ink border border-black/10 hover:border-liberal-400 hover:text-liberal-600",
    ghost: "text-ink hover:text-liberal-600",
    dark: "bg-ink text-white hover:bg-ink-soft",
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
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-black/5 bg-white p-6 shadow-sm shadow-black/[0.02] transition-shadow hover:shadow-md hover:shadow-black/5 ${className}`}
    >
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
