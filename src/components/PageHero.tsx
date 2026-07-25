import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { BrandMotif } from "./BrandMotif";

export function PageHero({
  eyebrow,
  title,
  text,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  text?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 15% 0%, rgba(0,196,228,0.35), transparent), radial-gradient(ellipse 50% 40% at 100% 100%, rgba(0,196,228,0.18), transparent)",
        }}
      />
      <div className="bg-grain pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay" />
      <BrandMotif className="pointer-events-none absolute -right-6 top-1/2 hidden h-[140%] -translate-y-1/2 opacity-70 md:block" />
      <div className="container-page relative section-y">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          {eyebrow && (
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 font-display text-xs font-semibold uppercase tracking-widest text-liberal-300">
              <span className="brand-dot h-1.5 w-1.5 shrink-0 rounded-full" />
              {eyebrow}
            </p>
          )}
          <h1 className="text-balance font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {text && (
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
              {text}
            </p>
          )}
          {children}
        </motion.div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-liberal-600 via-liberal-400 to-liberal-300 opacity-70" />
    </section>
  );
}
