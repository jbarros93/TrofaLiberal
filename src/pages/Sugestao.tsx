import { CheckCircle2, Send } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { Card } from "../components/ui";
import { Field, Input, Select, Textarea } from "../components/form";
import { temas } from "../data/content";
import { useFormSubmit } from "../lib/useFormSubmit";

export function Sugestao() {
  const { status, handleSubmit } = useFormSubmit();

  return (
    <div>
      <PageHero
        eyebrow="Ideias · Tens uma ideia?"
        title="Partilha a tua ideia connosco"
        text="As melhores propostas nascem de quem vive a Trofa todos os dias. Conta-nos a tua."
      />

      <section className="section-y">
        <div className="container-page mx-auto max-w-2xl">
          <Card>
            {status === "sent" ? (
              <div className="flex flex-col items-center py-10 text-center">
                <CheckCircle2 className="h-12 w-12 text-liberal-500" />
                <h3 className="mt-4 font-display text-xl font-bold text-ink">
                  Obrigado pela tua ideia!
                </h3>
                <p className="mt-2 max-w-sm text-sm text-ink-soft/70">
                  Vamos analisar a tua proposta com atenção. Juntos construímos uma Trofa melhor.
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
                <Field label="Tema" htmlFor="tema">
                  <Select id="tema" name="tema" defaultValue="">
                    <option value="" disabled>
                      Escolhe um tema
                    </option>
                    {temas.map((t) => (
                      <option key={t.title} value={t.title}>
                        {t.title}
                      </option>
                    ))}
                    <option value="Outro">Outro</option>
                  </Select>
                </Field>
                <Field label="A tua ideia" htmlFor="ideia" required>
                  <Textarea id="ideia" name="ideia" required rows={5} placeholder="Descreve a tua ideia com o máximo de detalhe possível" />
                </Field>
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex items-center gap-2 rounded-full bg-liberal-500 px-6 py-3.5 font-display text-sm font-semibold text-white shadow-lg shadow-liberal-500/25 transition-all hover:bg-liberal-600 disabled:opacity-60"
                >
                  {status === "submitting" ? "A enviar..." : "Enviar ideia"}
                  <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </Card>
        </div>
      </section>
    </div>
  );
}
