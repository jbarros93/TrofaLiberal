import { CheckCircle2, Rocket } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { Card, SectionHeading } from "../components/ui";
import { Checkbox, Field, Input } from "../components/form";
import { membershipReasons } from "../data/content";
import { useFormSubmit } from "../lib/useFormSubmit";

export function FazTeMembro() {
  const { status, handleSubmit } = useFormSubmit();

  return (
    <div>
      <PageHero
        eyebrow="Faz-te Membro"
        title="Junta-te à Iniciativa Liberal Trofa!"
        text="Torna-te membro e ajuda-nos a construir um futuro mais livre e justo para a Trofa e Portugal. Faz parte desta mudança — pela tua terra, salta do sofá."
      />

      <section className="section-y">
        <div className="container-page grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <SectionHeading eyebrow="Porquê aderir" title="O que ganhas ao juntar-te a nós" />
            <ul className="mt-6 space-y-4">
              {membershipReasons.map((r) => (
                <li key={r} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-liberal-500" />
                  <span className="text-sm leading-relaxed text-ink-soft/80">{r}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex items-center gap-3 rounded-2xl bg-liberal-50 p-5">
              <Rocket className="h-6 w-6 shrink-0 text-liberal-600" />
              <p className="text-sm font-semibold text-liberal-800">
                Deixa os teus dados e serás contactado pelo núcleo da Trofa. Parabéns por teres iniciativa.
              </p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <Card>
              {status === "sent" ? (
                <div className="flex flex-col items-center py-10 text-center">
                  <CheckCircle2 className="h-12 w-12 text-liberal-500" />
                  <h3 className="mt-4 font-display text-xl font-bold text-ink">
                    Obrigado por teres iniciativa!
                  </h3>
                  <p className="mt-2 max-w-sm text-sm text-ink-soft/70">
                    Recebemos os teus dados. O núcleo da Trofa vai entrar em
                    contacto contigo em breve.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <Field label="Nome completo" htmlFor="nome" required>
                    <Input id="nome" name="nome" required placeholder="O teu nome" />
                  </Field>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Contacto telefónico" htmlFor="telefone" required>
                      <Input id="telefone" name="telefone" type="tel" required placeholder="9XX XXX XXX" />
                    </Field>
                    <Field label="Email" htmlFor="email" required>
                      <Input id="email" name="email" type="email" required placeholder="tu@email.com" />
                    </Field>
                  </div>
                  <Field label="Freguesia" htmlFor="freguesia">
                    <Input id="freguesia" name="freguesia" placeholder="Onde vives na Trofa" />
                  </Field>
                  <div className="space-y-3 border-t border-black/5 pt-5">
                    <Checkbox
                      id="consentimento"
                      required
                      label={
                        <>
                          Li e aceito a Política de Privacidade, e autorizo o
                          tratamento dos meus dados para efeitos de contacto e
                          envio do formulário de adesão, bem como o envio de
                          comunicações da Iniciativa Liberal através dos seus
                          canais de comunicação, podendo gerir as minhas
                          preferências a qualquer momento.
                        </>
                      }
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full rounded-full bg-liberal-500 px-6 py-3.5 font-display text-sm font-semibold text-white shadow-lg shadow-liberal-500/25 transition-all hover:bg-liberal-600 disabled:opacity-60"
                  >
                    {status === "submitting" ? "A enviar..." : "Quero ser membro"}
                  </button>
                </form>
              )}
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
