import { CheckCircle2, Mail, MessageCircle, Send } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { Card } from "../components/ui";
import { Field, Input, Textarea } from "../components/form";
import { brand, socials } from "../data/content";
import { useFormSubmit } from "../lib/useFormSubmit";

export function Contactos() {
  const { status, handleSubmit } = useFormSubmit();

  return (
    <div>
      <PageHero
        eyebrow="Contacta-nos"
        title="Liga-te ao Núcleo da Iniciativa Liberal da Trofa!"
        text="Queremos ouvir-te e partilhar a nossa visão. Envia-nos uma mensagem ou junta-te à conversa nas redes sociais."
      />

      <section className="section-y">
        <div className="container-page grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-liberal-50 text-liberal-600">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-ink">Email</h3>
                  <a href={`mailto:${brand.email}`} className="text-sm text-liberal-600 hover:underline">
                    {brand.email}
                  </a>
                </div>
              </div>
            </Card>
            <Card>
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-liberal-50 text-liberal-600">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-ink">WhatsApp</h3>
                  <p className="text-sm text-ink-soft/70">
                    Junta-te ao nosso grupo e conversa connosco em tempo real.
                  </p>
                  <a
                    href={brand.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-block text-sm font-semibold text-liberal-600 hover:underline"
                  >
                    Entrar no grupo →
                  </a>
                </div>
              </div>
            </Card>
            <Card>
              <h3 className="font-display font-bold text-ink">Redes sociais</h3>
              <p className="mt-1 text-sm text-ink-soft/70">
                Visita o nosso Linktree para acederes a todas as plataformas.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-black/10 px-3.5 py-1.5 text-xs font-semibold text-ink-soft/80 transition-colors hover:border-liberal-400 hover:text-liberal-600"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </Card>
          </div>

          <div className="lg:col-span-3">
            <Card>
              {status === "sent" ? (
                <div className="flex flex-col items-center py-10 text-center">
                  <CheckCircle2 className="h-12 w-12 text-liberal-500" />
                  <h3 className="mt-4 font-display text-xl font-bold text-ink">Mensagem enviada!</h3>
                  <p className="mt-2 max-w-sm text-sm text-ink-soft/70">
                    Contamos contigo! Vamos responder-te assim que possível.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Nome" htmlFor="nome" required>
                      <Input id="nome" name="nome" required placeholder="O teu nome" />
                    </Field>
                    <Field label="Email" htmlFor="email" required>
                      <Input id="email" name="email" type="email" required placeholder="tu@email.com" />
                    </Field>
                  </div>
                  <Field label="Assunto" htmlFor="assunto">
                    <Input id="assunto" name="assunto" placeholder="Sobre o que queres falar?" />
                  </Field>
                  <Field label="Mensagem" htmlFor="mensagem" required>
                    <Textarea id="mensagem" name="mensagem" required rows={5} placeholder="A tua mensagem" />
                  </Field>
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="inline-flex items-center gap-2 rounded-full bg-liberal-500 px-6 py-3.5 font-display text-sm font-semibold text-white shadow-lg shadow-liberal-500/25 transition-all hover:bg-liberal-600 disabled:opacity-60"
                  >
                    {status === "submitting" ? "A enviar..." : "Enviar mensagem"}
                    <Send className="h-4 w-4" />
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
