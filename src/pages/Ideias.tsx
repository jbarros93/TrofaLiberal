import { ArrowRight, Image, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";
import { PageHero } from "../components/PageHero";
import { Button, Card, SectionHeading } from "../components/ui";
import { temas } from "../data/content";

export function Ideias() {
  return (
    <div>
      <PageHero
        eyebrow="Ideias"
        title="Propostas que temos por tema"
        text="Ideias concretas para uma Trofa mais livre, mais próspera e mais próxima das pessoas."
      />

      <section className="section-y">
        <div className="container-page">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {temas.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
              >
                <Card className="h-full">
                  <span className="font-display text-3xl font-bold text-liberal-200">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-bold text-ink">{t.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft/70">{t.text}</p>
                </Card>
              </motion.div>
            ))}
          </div>
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

      <section className="section-y">
        <div className="container-page">
          <SectionHeading eyebrow="Junta-te" title="Tens uma proposta para a Trofa?" center />
          <div className="mx-auto mt-8 max-w-sm">
            <Button to="/ideias/sugestao" className="w-full">
              Partilha connosco <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
