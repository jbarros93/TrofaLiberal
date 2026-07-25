import { ArrowLeft, Download, ExternalLink } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
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
      <section className="relative overflow-hidden bg-ink text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 15% 0%, rgba(0,196,228,0.35), transparent), radial-gradient(ellipse 50% 40% at 100% 100%, rgba(0,196,228,0.18), transparent)",
          }}
        />
        <div className="container-page relative section-y">
          <Link
            to="/autarquicas-2025"
            className="mb-8 inline-flex items-center gap-1.5 text-sm font-semibold text-white/60 hover:text-liberal-400"
          >
            <ArrowLeft className="h-4 w-4" /> Voltar aos candidatos
          </Link>
          <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-end">
            <img
              src={candidate.photo}
              alt={candidate.name}
              className="h-32 w-32 shrink-0 rounded-2xl object-cover object-top shadow-xl ring-4 ring-white/10 sm:h-40 sm:w-40"
            />
            <div>
              <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 font-display text-xs font-semibold uppercase tracking-widest text-liberal-300">
                {candidate.role}
              </p>
              <h1 className="text-balance font-display text-4xl font-bold leading-[1.05] sm:text-5xl">
                {candidate.name}
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page grid gap-12 lg:grid-cols-5">
          <div className="space-y-5 text-base leading-relaxed text-ink-soft/80 lg:col-span-3">
            {candidate.bio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}

            {candidate.quote && (
              <blockquote className="border-l-4 border-liberal-400 bg-liberal-50 py-4 pl-6 pr-4 font-display text-lg font-medium italic text-ink">
                “{candidate.quote.text}”
                {candidate.quote.cite && (
                  <cite className="mt-2 block text-sm not-italic font-semibold text-liberal-700">
                    — {candidate.quote.cite}
                  </cite>
                )}
              </blockquote>
            )}

            <div className="flex flex-wrap gap-4 pt-2">
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
              {candidate.programUrl && (
                <a
                  href={candidate.programUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-display text-sm font-semibold text-liberal-600 hover:underline"
                >
                  <Download className="h-3.5 w-3.5" /> Descarregar plano eleitoral
                </a>
              )}
            </div>
          </div>
          <div className="space-y-6 lg:col-span-2">
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
            {candidate.priorities && (
              <Card>
                <h3 className="font-display text-sm font-bold uppercase tracking-widest text-liberal-600">
                  {candidate.prioritiesLabel ?? "Prioridades locais"}
                </h3>
                <ul className="mt-4 space-y-3">
                  {candidate.priorities.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-soft/80">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-liberal-500" />
                      {p}
                    </li>
                  ))}
                </ul>
              </Card>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
