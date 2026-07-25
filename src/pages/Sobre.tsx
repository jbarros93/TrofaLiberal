import { ArrowRight, Users } from "lucide-react";
import { motion } from "framer-motion";
import { PageHero } from "../components/PageHero";
import { Button, SectionHeading } from "../components/ui";
import { history } from "../data/content";

export function Sobre() {
  return (
    <div>
      <PageHero
        eyebrow="Trofa Liberal"
        title="Uma Trofa mais livre começa aqui."
        text="A Iniciativa Liberal na Trofa existe para defender um concelho onde cada trofense possa viver com mais liberdade e oportunidades."
      />

      <section className="section-y">
        <div className="container-page grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <SectionHeading eyebrow="Sobre nós" title="Quem somos" />
            <div className="mt-6 space-y-5 text-base leading-relaxed text-ink-soft/80">
              <p>
                Acreditamos que a Trofa tem potencial para ser um dos
                concelhos mais prósperos e inovadores de Portugal. Para isso,
                precisamos de menos burocracia, menos impostos, e mais
                confiança nas pessoas e nas empresas que aqui vivem e
                trabalham.
              </p>
              <p>
                Não somos um partido como os outros. Não prometemos tudo a
                todos. Prometemos menos Estado e mais liberdade — porque
                acreditamos que são as pessoas, não os políticos, que devem
                decidir o seu futuro.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button to="/trofa-liberal/equipa" variant="secondary">
                <Users className="h-4 w-4" /> Conhece a equipa
              </Button>
              <Button to="/trofa-liberal/faz-te-membro">
                Faz-te Membro <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="rounded-2xl bg-navy-950 p-8 text-white">
              <p className="font-display text-sm font-semibold uppercase tracking-widest text-liberal-400">
                Manifesto
              </p>
              <p className="mt-4 text-2xl font-display font-bold leading-snug text-balance">
                "Menos Estado e mais liberdade."
              </p>
              <p className="mt-4 text-sm leading-relaxed text-white/60">
                São as pessoas, não os políticos, que devem decidir o seu
                futuro.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y bg-black/[0.02]">
        <div className="container-page">
          <SectionHeading
            eyebrow="Percurso"
            title="A nossa história"
            text="O caminho da Iniciativa Liberal na Trofa, passo a passo."
          />
          <div className="relative mt-14 max-w-2xl">
            <div className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-black/10" />
            <div className="space-y-10">
              {history.map((h, i) => (
                <motion.div
                  key={h.year}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  className="relative flex gap-6 pl-10"
                >
                  <span className="absolute left-0 top-2 h-4 w-4 rounded-full border-2 border-liberal-500 bg-white" />
                  <div>
                    <p className="font-display text-2xl font-bold text-liberal-600">
                      {h.year}
                    </p>
                    <h3 className="mt-1 font-display text-lg font-bold text-ink">
                      {h.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft/70">
                      {h.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
