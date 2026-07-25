import { Heart, ShoppingBag } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { Button, Card, SectionHeading } from "../components/ui";
import { brand, storeProducts } from "../data/content";

export function Loja() {
  return (
    <div>
      <PageHero
        eyebrow="Loja e Donativos"
        title="Bem-vind@ à nossa loja!"
        text="Estás na montra liberal da Trofa — aqui encontras produtos com estilo, atitude e propósito. Veste a causa. Usa com orgulho."
      />

      <section className="section-y">
        <div className="container-page">
          <SectionHeading eyebrow="Produtos" title="Escolhe os teus favoritos" text="Ajuda-nos a levar mais longe as ideias da liberdade." />
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {storeProducts.map((p) => (
              <Card key={p.name} className="flex flex-col">
                <div className="flex aspect-square items-center justify-center rounded-xl bg-liberal-50 text-liberal-300">
                  <ShoppingBag className="h-12 w-12" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-ink">{p.name}</h3>
                <p className="mt-1 flex-1 text-sm leading-relaxed text-ink-soft/70">{p.text}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-display text-xl font-bold text-liberal-600">{p.price}</span>
                  <Button href={`mailto:${brand.email}?subject=Encomenda: ${encodeURIComponent(p.name)}`} variant="secondary">
                    Encomendar
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-black/[0.02]">
        <div className="container-page">
          <div className="mx-auto flex max-w-2xl flex-col items-center rounded-3xl bg-ink px-8 py-14 text-center text-white">
            <Heart className="h-9 w-9 text-liberal-500" />
            <h2 className="mt-4 text-balance font-display text-3xl font-bold">
              Apoia a causa liberal na Trofa
            </h2>
            <p className="mt-3 max-w-md text-white/70">
              Cada donativo ajuda-nos a continuar a levar as ideias da
              liberdade a mais trofenses.
            </p>
            <Button href={`mailto:${brand.email}?subject=Donativo`} className="mt-7">
              Fazer um donativo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
