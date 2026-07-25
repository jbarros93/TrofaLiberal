import { Users2 } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { Card, SectionHeading, Tag } from "../components/ui";
import { mandates } from "../data/content";

export function Equipa() {
  return (
    <div>
      <PageHero
        eyebrow="Trofa Liberal"
        title="A equipa que faz a diferença"
        text="O Núcleo da Iniciativa Liberal da Trofa é liderado por uma equipa dedicada, comprometida em promover os valores liberais no concelho — a identificar desafios locais e a encontrar soluções que coloquem a liberdade individual e o progresso no centro das suas ações."
      />

      <section className="section-y">
        <div className="container-page">
          <SectionHeading
            eyebrow="Órgãos sociais"
            title="Mandatos do Núcleo"
            text="Conhece os rostos que têm feito a diferença na Trofa, mandato a mandato."
          />

          <div className="mt-12 space-y-6">
            {mandates.map((m) => (
              <Card key={m.period} className={m.current ? "border-liberal-300 ring-1 ring-liberal-200" : ""}>
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                  <div className="flex shrink-0 items-center gap-3 sm:w-48 sm:flex-col sm:items-start">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-liberal-50 text-liberal-600">
                      <Users2 className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-display text-lg font-bold text-ink">{m.period}</p>
                      {m.current && <Tag>Mandato atual</Tag>}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="grid gap-2 sm:grid-cols-2">
                      <p className="text-sm text-ink-soft/70">
                        <span className="font-semibold text-ink">Coordenador Geral: </span>
                        {m.coordinator}
                      </p>
                      <p className="text-sm text-ink-soft/70">
                        <span className="font-semibold text-ink">Mesa do Plenário: </span>
                        {m.board}
                      </p>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-ink-soft/70">{m.text}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
