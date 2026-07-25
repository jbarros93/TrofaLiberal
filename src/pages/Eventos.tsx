import { ArrowRight, Calendar, Landmark, Mic2 } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { Button, Card, SectionHeading } from "../components/ui";

export function Eventos() {
  return (
    <div>
      <PageHero
        eyebrow="Eventos"
        title="Encontros, debates e ação na Trofa"
        text="Para promover o espírito liberal e o envolvimento local, organizamos regularmente encontros, debates e ações na Trofa. Acompanha o nosso calendário e não deixes escapar as novidades."
      />

      <section className="section-y">
        <div className="container-page">
          <SectionHeading eyebrow="Calendário" title="Próximos eventos" />
          <div className="mt-8 rounded-2xl border-2 border-dashed border-black/10 p-12 text-center">
            <Calendar className="mx-auto h-8 w-8 text-ink-soft/30" />
            <p className="mt-3 text-sm font-medium text-ink-soft/50">
              Sem eventos agendados no momento. Fica atento aos nossos canais.
            </p>
          </div>
        </div>
      </section>

      <section className="section-y bg-black/[0.02]">
        <div className="container-page">
          <SectionHeading eyebrow="Arquivo" title="Últimos eventos" />
          <div className="mt-8 rounded-2xl border-2 border-dashed border-black/10 p-12 text-center">
            <p className="text-sm font-medium text-ink-soft/50">
              Galeria de eventos anteriores em breve.
            </p>
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page grid gap-5 sm:grid-cols-2">
          <Card className="flex flex-col items-start">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-liberal-50 text-liberal-600">
              <Mic2 className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-display text-lg font-bold text-ink">
              LIT — Jornadas Liberais da Trofa
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft/70">
              O nosso ciclo de debates temáticos, aberto a toda a comunidade.
            </p>
            <Button to="/eventos/lit" variant="secondary" className="mt-5">
              Ver jornadas <ArrowRight className="h-4 w-4" />
            </Button>
          </Card>
          <Card className="flex flex-col items-start">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-liberal-50 text-liberal-600">
              <Landmark className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-display text-lg font-bold text-ink">Aqui Há Parlamento</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft/70">
              Levamos o debate político para o dia a dia da Trofa.
            </p>
            <Button to="/eventos/aqui-ha-parlamento" variant="secondary" className="mt-5">
              Saber mais <ArrowRight className="h-4 w-4" />
            </Button>
          </Card>
        </div>
      </section>
    </div>
  );
}
