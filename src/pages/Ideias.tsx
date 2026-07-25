import { useState } from "react";
import {
  ArrowRight,
  Building2,
  Calculator,
  Car,
  CheckCircle2,
  ChevronDown,
  GraduationCap,
  HandHeart,
  Heart,
  Home as HomeIcon,
  Image,
  Leaf,
  Lightbulb,
  Palette,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";
import { PageHero } from "../components/PageHero";
import { Button, Card } from "../components/ui";
import { proposalAreas } from "../data/content";

const icons: Record<string, React.ComponentType<{ className?: string }>> = {
  habitacao: HomeIcon,
  educacao: GraduationCap,
  modernizacao: Building2,
  economia: TrendingUp,
  mobilidade: Car,
  ambiente: Leaf,
  saude: Heart,
  fiscalidade: Calculator,
  cultura: Palette,
  social: HandHeart,
};

export function Ideias() {
  const [open, setOpen] = useState<string | null>(proposalAreas[0]?.key ?? null);

  return (
    <div>
      <PageHero
        eyebrow="Ideias"
        title="10 áreas estratégicas de intervenção"
        text="Cada área representa um compromisso concreto, com medidas específicas para transformar a Trofa. Uma Trofa mais livre, próspera e justa."
      />

      <section className="section-y">
        <div className="container-page mx-auto max-w-3xl space-y-3">
          {proposalAreas.map((area, i) => {
            const Icon = icons[area.key] ?? Lightbulb;
            const isOpen = open === area.key;
            return (
              <motion.div
                key={area.key}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: (i % 5) * 0.05 }}
                className={`overflow-hidden rounded-2xl border transition-colors ${
                  isOpen ? "border-liberal-300 bg-liberal-50/40" : "border-black/5 bg-white"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : area.key)}
                  className="flex w-full items-center gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-liberal-100 text-liberal-700">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="flex-1">
                    <span className="block font-display text-base font-bold text-ink sm:text-lg">
                      {area.title}
                    </span>
                    <span className="block text-sm text-ink-soft/60">{area.subtitle}</span>
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-ink-soft/40 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                    <div className="grid gap-2.5 border-t border-black/5 pt-4 sm:grid-cols-2">
                      {area.measures.map((m) => (
                        <div key={m} className="flex items-start gap-2.5">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-liberal-500" />
                          <span className="text-sm leading-relaxed text-ink-soft/80">{m}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="section-y bg-black/[0.02]">
        <div className="container-page grid gap-6 sm:grid-cols-2">
          <Card className="flex flex-col items-start">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-liberal-50 text-liberal-600">
              <Image className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-display text-lg font-bold text-ink">Cartazes</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft/70">
              Consulta todos os cartazes e mensagens que já espalhámos pela Trofa.
            </p>
            <Button to="/ideias/cartazes" variant="secondary" className="mt-5">
              Ver cartazes <ArrowRight className="h-4 w-4" />
            </Button>
          </Card>
          <Card className="flex flex-col items-start">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-liberal-50 text-liberal-600">
              <Lightbulb className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-display text-lg font-bold text-ink">Tens uma ideia?</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft/70">
              Partilha connosco. As melhores ideias vêm de quem vive a Trofa
              todos os dias.
            </p>
            <Button to="/ideias/sugestao" variant="secondary" className="mt-5">
              Partilhar ideia <ArrowRight className="h-4 w-4" />
            </Button>
          </Card>
        </div>
      </section>
    </div>
  );
}
