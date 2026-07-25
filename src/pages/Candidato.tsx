import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { PageHero } from "../components/PageHero";
import { Card } from "../components/ui";
import { candidates } from "../data/content";

export function Candidato() {
  const { slug } = useParams();
  const candidate = candidates.find((c) => c.slug === slug);

  if (!candidate) {
    return <Navigate to="/autarquicas-2025" replace />;
  }

  return (
    <div>
      <PageHero
        eyebrow={candidate.role}
        title={candidate.name}
        text={`“${candidate.tagline}”`}
      >
        <Link
          to="/autarquicas-2025"
          className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-white/60 hover:text-liberal-400"
        >
          <ArrowLeft className="h-4 w-4" /> Voltar aos candidatos
        </Link>
      </PageHero>

      <section className="section-y">
        <div className="container-page grid gap-12 lg:grid-cols-5">
          <div className="space-y-5 text-base leading-relaxed text-ink-soft/80 lg:col-span-3">
            {candidate.bio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            {candidate.profileUrl && (
              <a
                href={candidate.profileUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 font-display text-sm font-semibold text-liberal-600 hover:underline"
              >
                Ver perfil completo no site nacional <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
          <div className="lg:col-span-2">
            <Card>
              <h3 className="font-display text-sm font-bold uppercase tracking-widest text-liberal-600">
                Funções atuais
              </h3>
              <ul className="mt-4 space-y-3">
                {candidate.roles.map((r) => (
                  <li key={r} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-soft/80">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-liberal-500" />
                    {r}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
