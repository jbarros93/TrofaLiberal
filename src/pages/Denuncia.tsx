import { CheckCircle2, MapPin, MessageSquareWarning, ShieldCheck, Upload } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { Card, SectionHeading } from "../components/ui";
import { Field, Input, Textarea } from "../components/form";
import { useFormSubmit } from "../lib/useFormSubmit";

const steps = [
  {
    icon: MapPin,
    title: "Indica a freguesia",
    text: "Diz-nos onde ocorre o problema.",
  },
  {
    icon: MessageSquareWarning,
    title: "Descreve o problema",
    text: "Uma breve descrição e, se possível, a morada.",
  },
  {
    icon: Upload,
    title: "Junta uma foto",
    text: "Uma imagem com um ponto de referência ajuda-nos a identificar o local.",
  },
];

export function Denuncia() {
  const { status, handleSubmit } = useFormSubmit();

  return (
    <div>
      <PageHero
        eyebrow="Canal de Denúncias"
        title="Dá voz às tuas denúncias"
        text="Estradas em mau estado, espaços públicos abandonados, serviços que não funcionam? Reporta tudo de forma simples, rápida e anónima."
      />

      <section className="section-y">
        <div className="container-page grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <SectionHeading eyebrow="Como participar" title="Juntos melhoramos a Trofa" />
            <div className="mt-8 space-y-6">
              {steps.map((s) => (
                <div key={s.title} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-liberal-50 text-liberal-600">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-ink">{s.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-soft/70">{s.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex items-start gap-3 rounded-2xl bg-navy-950 p-5 text-white">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-liberal-400" />
              <p className="text-sm leading-relaxed text-white/70">
                Todas as denúncias serão levadas a sério e encaminhadas para
                as entidades competentes. A tua participação é essencial para
                transformar a Trofa num lugar melhor para todos.
              </p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <Card>
              {status === "sent" ? (
                <div className="flex flex-col items-center py-10 text-center">
                  <CheckCircle2 className="h-12 w-12 text-liberal-500" />
                  <h3 className="mt-4 font-display text-xl font-bold text-ink">Denúncia recebida!</h3>
                  <p className="mt-2 max-w-sm text-sm text-ink-soft/70">
                    Obrigado pela tua participação. Vamos encaminhar o teu
                    reporte para as entidades competentes.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Freguesia" htmlFor="freguesia" required>
                      <Input id="freguesia" name="freguesia" required placeholder="Ex: Bougado" />
                    </Field>
                    <Field label="Morada / referência" htmlFor="morada">
                      <Input id="morada" name="morada" placeholder="Rua, ponto de referência..." />
                    </Field>
                  </div>
                  <Field label="Descrição do problema" htmlFor="descricao" required>
                    <Textarea id="descricao" name="descricao" required rows={5} placeholder="Descreve o que se passa" />
                  </Field>
                  <Field label="Foto (opcional)" htmlFor="foto">
                    <label
                      htmlFor="foto"
                      className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-black/15 px-4 py-8 text-center transition-colors hover:border-liberal-400"
                    >
                      <Upload className="h-6 w-6 text-ink-soft/40" />
                      <span className="text-sm text-ink-soft/60">
                        Clica para carregar uma imagem
                      </span>
                      <input id="foto" name="foto" type="file" accept="image/*" className="hidden" />
                    </label>
                  </Field>
                  <p className="text-xs text-ink-soft/50">
                    Podes submeter esta denúncia de forma anónima — os dados
                    de contacto são opcionais.
                  </p>
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full rounded-full bg-liberal-500 px-6 py-3.5 font-display text-sm font-semibold text-white shadow-lg shadow-liberal-500/25 transition-all hover:bg-liberal-600 disabled:opacity-60"
                  >
                    {status === "submitting" ? "A enviar..." : "Submeter denúncia"}
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
