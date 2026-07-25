import { Image } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { Card } from "../components/ui";
import { events } from "../data/content";

export function Lit() {
  return (
    <div>
      <PageHero
        eyebrow="Eventos"
        title={events.lit.title}
        text="Um ciclo de debates que junta a comunidade para discutir os grandes temas do concelho."
      />

      <section className="section-y">
        <div className="container-page space-y-6">
          {events.lit.editions.map((e) => (
            <Card key={e.title}>
              <h3 className="font-display text-lg font-bold text-ink">{e.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft/70">{e.text}</p>
              <div className="mt-5 flex items-center gap-2 rounded-xl border-2 border-dashed border-black/10 px-4 py-5 text-ink-soft/40">
                <Image className="h-5 w-5" />
                <span className="text-xs font-medium">Galeria de fotos em breve</span>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
