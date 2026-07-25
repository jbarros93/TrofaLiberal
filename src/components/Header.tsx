import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { nav } from "../data/nav";
import { Button } from "./ui";

export function Header() {
  const [open, setOpen] = useState(false);
  const [mobileGroup, setMobileGroup] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
    setMobileGroup(null);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/85 backdrop-blur-md">
      <div className="container-page flex h-18 items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-2.5">
          <img src="/il-trofa-mark.png" alt="" className="h-9 w-9 rounded-full" />
          <span className="font-display text-base font-bold leading-tight text-ink">
            Iniciativa Liberal
            <span className="block text-xs font-semibold uppercase tracking-widest text-liberal-600">
              Trofa
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <div key={item.label} className="group relative">
              <NavLink
                to={item.to ?? "#"}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `flex items-center gap-1 rounded-full px-3.5 py-2 font-display text-sm font-semibold transition-colors ${
                    isActive
                      ? "text-liberal-600"
                      : "text-ink-soft hover:text-liberal-600"
                  }`
                }
              >
                {item.label}
                {item.children && <ChevronDown className="h-3.5 w-3.5" />}
              </NavLink>
              {item.children && (
                <div className="invisible absolute left-0 top-full z-20 min-w-56 translate-y-1 rounded-xl border border-black/5 bg-white p-1.5 opacity-0 shadow-xl shadow-black/10 transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {item.children.map((child) => (
                    <NavLink
                      key={child.to}
                      to={child.to}
                      className={({ isActive }) =>
                        `block rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                          isActive
                            ? "bg-liberal-50 text-liberal-700"
                            : "text-ink-soft hover:bg-black/[0.03] hover:text-ink"
                        }`
                      }
                    >
                      {child.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button to="/trofa-liberal/faz-te-membro">Faz-te Membro</Button>
        </div>

        <button
          aria-label="Abrir menu"
          className="flex h-10 w-10 items-center justify-center rounded-full text-ink lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-black/5 bg-white lg:hidden"
          >
            <div className="container-page flex flex-col gap-1 py-3">
              {nav.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <button
                      className="flex w-full items-center justify-between rounded-lg px-2 py-3 text-left font-display text-base font-semibold text-ink"
                      onClick={() =>
                        setMobileGroup((g) => (g === item.label ? null : item.label))
                      }
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          mobileGroup === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  ) : (
                    <Link
                      to={item.to ?? "/"}
                      className="block w-full rounded-lg px-2 py-3 font-display text-base font-semibold text-ink"
                    >
                      {item.label}
                    </Link>
                  )}
                  {item.children && mobileGroup === item.label && (
                    <div className="flex flex-col gap-0.5 pb-2 pl-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.to}
                          to={child.to}
                          className="rounded-lg px-2 py-2.5 text-sm font-medium text-ink-soft/80 hover:text-liberal-600"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="mt-2">
                <Button to="/trofa-liberal/faz-te-membro" className="w-full">
                  Faz-te Membro
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
