import { Image } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { Card } from "../components/ui";
import { events } from "../data/content";

export function AquiHaParlamento() {
  return (
    <div>
      <PageHero
        eyebrow="Eventos"
        title={events.parlamento.title}
        text={events.parlamento.text}
      />

      <section className="section-y">
        <div className="container-page">
          <Card>
            <div className="flex items-center gap-2 rounded-xl border-2 border-dashed border-black/10 px-4 py-10 text-ink-soft/40">
              <Image className="h-5 w-5" />
              <span className="text-xs font-medium">Galeria de fotos em breve</span>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
