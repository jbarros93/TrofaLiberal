import { FileText, Megaphone, Newspaper } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { Card, SectionHeading } from "../components/ui";
import { pressNote } from "../data/content";

const categories = [
  {
    icon: Newspaper,
    title: "Notícias",
    text: "Cobertura mediática da atividade do núcleo na imprensa local e nacional.",
  },
  {
    icon: FileText,
    title: "Artigos de opinião",
    text: "Textos de membros do núcleo sobre os temas que importam à Trofa.",
  },
  {
    icon: Megaphone,
    title: "Comunicados",
    text: "Posições e comunicados oficiais da Iniciativa Liberal Trofa.",
  },
];

export function Imprensa() {
  return (
    <div>
      <PageHero
        eyebrow="Na Imprensa"
        title="Notícias, artigos e comunicados"
        text={pressNote}
      />

      <section className="section-y">
        <div className="container-page">
          <SectionHeading eyebrow="Em breve" title="Ações que fazem a diferença" />
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {categories.map((c) => (
              <Card key={c.title} className="flex flex-col items-start">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-liberal-50 text-liberal-600">
                  <c.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-ink">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft/70">{c.text}</p>
                <div className="mt-5 w-full rounded-xl border-2 border-dashed border-black/10 py-6 text-center text-xs font-medium text-ink-soft/40">
                  Conteúdo em breve
                </div>
              </Card>
            ))}
          </div>
          <p className="mx-auto mt-12 max-w-xl text-center text-sm leading-relaxed text-ink-soft/60">
            A tua participação e o teu feedback são fundamentais para o nosso
            trabalho. Volta a visitar-nos para acompanhares as novidades.
          </p>
        </div>
      </section>
    </div>
  );
}
