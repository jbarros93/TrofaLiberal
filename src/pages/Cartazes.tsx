import { ImageOff } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { SectionHeading } from "../components/ui";
import { cartazCategories } from "../data/content";

export function Cartazes() {
  return (
    <div>
      <PageHero
        eyebrow="Ideias · Cartazes"
        title="Cartazes e mensagens"
        text="Aqui podes consultar todos os cartazes e mensagens que já espalhámos pela Trofa."
      />

      <section className="section-y">
        <div className="container-page space-y-16">
          {cartazCategories.map((cat) => (
            <div key={cat.key}>
              <SectionHeading title={cat.title} />
              <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {[1, 2, 3, 4].map((n) => (
                  <div
                    key={n}
                    className="flex aspect-[3/4] flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-black/10 bg-black/[0.02] text-ink-soft/30"
                  >
                    <ImageOff className="h-7 w-7" />
                    <span className="px-4 text-center text-xs font-medium text-ink-soft/40">
                      Cartaz em breve
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
