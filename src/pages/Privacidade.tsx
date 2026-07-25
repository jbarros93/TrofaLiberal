import { PageHero } from "../components/PageHero";
import { Card } from "../components/ui";
import { brand } from "../data/content";

const sections = [
  {
    title: "1. Introdução",
    body: (
      <p>
        A Iniciativa Liberal Trofa compromete-se a proteger a privacidade dos
        utilizadores do nosso website. Esta política explica como
        recolhemos, utilizamos e protegemos as suas informações pessoais.
      </p>
    ),
  },
  {
    title: "2. Informações que recolhemos",
    body: (
      <>
        <p>Podemos recolher as seguintes informações:</p>
        <ul className="list-disc space-y-1.5 pl-6">
          <li>Nome e informações de contacto quando fornecidas voluntariamente</li>
          <li>Endereço de email para newsletter ou comunicações</li>
          <li>Dados de navegação através de cookies (opcional)</li>
          <li>Informações fornecidas através de formulários de contacto</li>
        </ul>
      </>
    ),
  },
  {
    title: "3. Como utilizamos as suas informações",
    body: (
      <>
        <p>As suas informações são utilizadas para:</p>
        <ul className="list-disc space-y-1.5 pl-6">
          <li>Responder às suas questões e pedidos de informação</li>
          <li>Enviar comunicações e atualizações políticas (com consentimento)</li>
          <li>Melhorar a experiência do website</li>
          <li>Cumprir obrigações legais</li>
        </ul>
      </>
    ),
  },
  {
    title: "4. Partilha de informações",
    body: (
      <p>
        Não vendemos, trocamos ou transferimos as suas informações pessoais
        para terceiros, exceto quando necessário para cumprir a lei ou
        proteger os nossos direitos.
      </p>
    ),
  },
  {
    title: "5. Cookies",
    body: (
      <p>
        Utilizamos cookies para melhorar a experiência de navegação. Pode
        desativar os cookies nas configurações do seu navegador, embora isso
        possa afetar algumas funcionalidades do website.
      </p>
    ),
  },
  {
    title: "6. Os seus direitos",
    body: (
      <>
        <p>Tem o direito de:</p>
        <ul className="list-disc space-y-1.5 pl-6">
          <li>Aceder aos seus dados pessoais</li>
          <li>Corrigir informações incorretas</li>
          <li>Solicitar a eliminação dos seus dados</li>
          <li>Retirar o consentimento a qualquer momento</li>
          <li>Apresentar uma reclamação à autoridade de proteção de dados</li>
        </ul>
      </>
    ),
  },
  {
    title: "7. Segurança",
    body: (
      <p>
        Implementamos medidas de segurança adequadas para proteger as suas
        informações pessoais contra acesso não autorizado, alteração,
        divulgação ou destruição.
      </p>
    ),
  },
  {
    title: "8. Alterações à política",
    body: (
      <p>
        Esta política pode ser atualizada periodicamente. A versão mais
        recente estará sempre disponível nesta página.
      </p>
    ),
  },
];

export function Privacidade() {
  return (
    <div>
      <PageHero
        eyebrow="Legal"
        title="Política de Privacidade"
        text="Como a Iniciativa Liberal Trofa trata os teus dados pessoais."
      />

      <section className="section-y">
        <div className="container-page mx-auto max-w-3xl">
          <Card>
            <div className="space-y-8">
              {sections.map((s) => (
                <div key={s.title}>
                  <h2 className="font-display text-lg font-bold text-ink">{s.title}</h2>
                  <div className="mt-3 space-y-3 text-sm leading-relaxed text-ink-soft/75">
                    {s.body}
                  </div>
                </div>
              ))}
              <div>
                <h2 className="font-display text-lg font-bold text-ink">9. Contactos</h2>
                <div className="mt-3 space-y-3 text-sm leading-relaxed text-ink-soft/75">
                  <p>
                    Para questões sobre esta política de privacidade ou para
                    exercer os seus direitos, contacte-nos através de:
                  </p>
                  <p className="rounded-xl bg-liberal-50 px-4 py-3 font-semibold text-liberal-800">
                    {brand.email}
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
