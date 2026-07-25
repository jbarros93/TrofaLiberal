import { type ReactNode } from "react";
import { motion } from "framer-motion";

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
            "radial-gradient(ellipse 60% 50% at 15% 0%, rgba(255,106,15,0.35), transparent), radial-gradient(ellipse 50% 40% at 100% 100%, rgba(255,106,15,0.18), transparent)",
        }}
      />
      <div className="container-page relative section-y">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          {eyebrow && (
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 font-display text-xs font-semibold uppercase tracking-widest text-liberal-300">
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
    </section>
  );
}
