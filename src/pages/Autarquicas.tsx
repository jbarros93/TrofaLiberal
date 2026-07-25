import { ArrowRight, PlayCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button, Card, SectionHeading } from "../components/ui";
import { brand, candidates, programs } from "../data/content";

export function Autarquicas() {
  return (
    <div>
      <section className="relative overflow-hidden bg-ink text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(ellipse 60% 60% at 85% 0%, rgba(255,106,15,0.35), transparent 70%)",
          }}
        />
        <div className="container-page relative section-y">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 font-display text-xs font-semibold uppercase tracking-widest text-liberal-300">
              Autárquicas 2025
            </p>
            <h1 className="text-balance font-display text-5xl font-bold leading-[1.02] sm:text-6xl lg:text-7xl">
              {brand.slogan}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
              A Trofa, tantas vezes referida como um diamante em bruto, é um
              concelho com enorme potencial económico, social e cultural — um
              potencial que continua sistematicamente desaproveitado.
            </p>
            <div className="mt-8">
              <Button href={brand.anthem} variant="secondary" className="!bg-white/10 !text-white !border-white/15 hover:!border-liberal-400 hover:!text-liberal-300">
                <PlayCircle className="h-4 w-4" /> Ouvir o hino de campanha
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page max-w-3xl space-y-5 text-base leading-relaxed text-ink-soft/80">
          <p>
            Localizada no coração de uma das zonas mais dinâmicas e
            exportadoras do país, a Trofa tem tudo para ser uma referência no
            desenvolvimento regional, mas precisa de liderança, visão e
            coragem para romper com o conformismo.
          </p>
          <p>
            A Iniciativa Liberal acredita numa Trofa mais livre, mais
            eficiente, mais próxima dos cidadãos, mais atrativa para famílias
            e empresas, e mais preparada para o futuro. Com mais
            oportunidades para todos, melhor qualidade de vida e onde o poder
            público serve e não atrapalha.
          </p>
          <p className="font-display text-xl font-bold text-ink">
            Está na hora de libertar o potencial da Trofa. Está na hora de
            colocar a Trofa para cima.
          </p>
        </div>
      </section>

      <section className="section-y bg-black/[0.02]">
        <div className="container-page">
          <SectionHeading eyebrow="Propostas" title="Programas eleitorais" />
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {programs.map((p) => (
              <Card key={p.title}>
                <h3 className="font-display text-lg font-bold text-ink">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft/70">{p.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page">
          <SectionHeading
            eyebrow="Candidatos"
            title="Quem leva a Trofa para cima"
            text="Conhece as pessoas que se candidatam pela Iniciativa Liberal nas Autárquicas 2025."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {candidates.map((c, i) => (
              <motion.div
                key={c.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <Link
                  to={`/autarquicas-2025/candidatos/${c.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-black/5 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-black/5"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-liberal-50 font-display text-lg font-bold text-liberal-600">
                      {c.name
                        .split(" ")
                        .map((n) => n[0])
                        .slice(0, 2)
                        .join("")}
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-ink">{c.name}</h3>
                      <p className="text-sm text-liberal-600">{c.role}</p>
                    </div>
                  </div>
                  <p className="mt-4 flex-1 text-sm italic leading-relaxed text-ink-soft/60">
                    “{c.tagline}”
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 font-display text-sm font-semibold text-ink transition-colors group-hover:text-liberal-600">
                    Conhecer {c.name.split(" ")[0]}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
