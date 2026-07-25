import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Lightbulb,
  Megaphone,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { Button, Card, SectionHeading, Tag } from "../components/ui";
import { brand, proposalAreas } from "../data/content";
import { Link } from "react-router-dom";

const pillars = [
  {
    icon: Building2,
    title: "Menos burocracia",
    text: "Uma Câmara moderna e digital, mais rápida a resolver e mais próxima das pessoas.",
  },
  {
    icon: Sparkles,
    title: "Menos impostos",
    text: "Devolver rendimento às famílias e às empresas que fazem a Trofa crescer.",
  },
  {
    icon: Users,
    title: "Mais confiança",
    text: "Acreditamos nas pessoas e nas empresas — não em mais Estado a decidir por elas.",
  },
];

const highlights = [
  {
    icon: Megaphone,
    title: "Autárquicas 2025",
    text: "Conhece o slogan, o programa e os candidatos da campanha Trofa Para Cima.",
    to: "/autarquicas-2025",
    cta: "Ver candidatura",
  },
  {
    icon: Lightbulb,
    title: "As nossas ideias",
    text: "Propostas concretas por tema: habitação, educação, economia e muito mais.",
    to: "/ideias",
    cta: "Explorar propostas",
  },
  {
    icon: ShieldCheck,
    title: "Canal de denúncias",
    text: "Reporta problemas na tua freguesia de forma simples, rápida e anónima.",
    to: "/denuncia",
    cta: "Fazer uma denúncia",
  },
];

export function Home() {
  return (
    <div>
      <section className="relative overflow-hidden bg-ink text-white">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 55% 55% at 20% 10%, rgba(0,196,228,0.4), transparent 70%), radial-gradient(ellipse 45% 45% at 90% 90%, rgba(0,196,228,0.2), transparent 70%)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div className="container-page relative flex min-h-[calc(100svh-4.5rem)] flex-col justify-center py-20 sm:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 font-display text-xs font-semibold uppercase tracking-widest text-liberal-300">
              Núcleo Territorial da Trofa
            </p>
            <h1 className="max-w-4xl text-balance font-display text-5xl font-bold leading-[1.03] sm:text-6xl lg:text-7xl">
              Menos Estado.
              <br />
              <span className="text-liberal-500">Mais liberdade.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70 sm:text-xl">
              A Iniciativa Liberal na Trofa existe para defender um concelho
              onde cada trofense possa viver com mais liberdade e mais
              oportunidades.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button to="/trofa-liberal/faz-te-membro">
                Faz-te Membro <ArrowRight className="h-4 w-4" />
              </Button>
              <Button to="/autarquicas-2025" variant="secondary" className="!bg-white/10 !text-white !border-white/15 hover:!border-liberal-400 hover:!text-liberal-300">
                {brand.slogan}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page">
          <SectionHeading
            eyebrow="A nossa missão"
            title="Não somos um partido como os outros."
            text="Não prometemos tudo a todos. Prometemos menos Estado e mais liberdade — porque acreditamos que são as pessoas, não os políticos, que devem decidir o seu futuro."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
              >
                <Card className="h-full">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-liberal-50 text-liberal-600">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-ink">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft/70">{p.text}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-navy-950 text-white">
        <div className="container-page">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              invert
              eyebrow="Descobre"
              title="O que se está a passar na Trofa"
              text="Do canal de denúncias à campanha autárquica — vê onde te podes envolver."
            />
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-colors hover:border-liberal-500/40 hover:bg-white/[0.05]"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-liberal-500/15 text-liberal-400">
                  <h.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl font-bold">{h.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60">{h.text}</p>
                <Link
                  to={h.to}
                  className="mt-5 inline-flex items-center gap-1.5 font-display text-sm font-semibold text-liberal-400 transition-colors group-hover:text-liberal-300"
                >
                  {h.cta} <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page">
          <SectionHeading
            eyebrow="Propostas"
            title="10 áreas estratégicas"
            text="Um concelho mais livre precisa de ideias concretas. Estas são as áreas em que trabalhamos, com medidas específicas para cada uma."
          />
          <div className="mt-10 flex flex-wrap gap-2.5">
            {proposalAreas.map((t) => (
              <Tag key={t.title}>{t.title}</Tag>
            ))}
          </div>
          <div className="mt-8">
            <Button to="/ideias" variant="secondary">
              Ver todas as propostas <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page">
          <div className="overflow-hidden rounded-3xl bg-liberal-500 px-8 py-14 text-center sm:px-16">
            <h2 className="mx-auto max-w-xl text-balance font-display text-3xl font-bold text-white sm:text-4xl">
              Junta-te à mudança. Pela tua terra, salta do sofá.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-white/85">
              Torna-te membro da Iniciativa Liberal e ajuda-nos a construir um
              futuro mais livre e justo para a Trofa.
            </p>
            <div className="mt-8 flex justify-center">
              <Button to="/trofa-liberal/faz-te-membro" variant="dark">
                Quero fazer parte <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
