# Iniciativa Liberal Trofa

Site oficial do núcleo da Iniciativa Liberal na Trofa — React + TypeScript + Vite + Tailwind CSS.

## Desenvolvimento

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm run build
npm run preview
```

## Estrutura

- `src/pages` — páginas do site (uma por rota)
- `src/components` — componentes de UI partilhados (Header, Footer, formulários, etc.)
- `src/data/content.ts` — todo o conteúdo textual do site (história, equipa, candidatos, propostas, etc.)
- `src/data/nav.ts` — estrutura da navegação principal

## Notas

- Os formulários (Faz-te Membro, Contacto, Denúncia, Sugestão de ideia) estão implementados no lado do cliente e simulam o envio — para produção, ligar a um endpoint real (ex.: Formspree, backend próprio) em `src/lib/useFormSubmit.ts`.
- Alguns dados ainda não confirmados no documento de origem (ex.: nome do Coordenador Geral do mandato 2026–2028) estão marcados como "A definir" em `src/data/content.ts` — atualizar assim que disponíveis.
- Cartazes, notícias e galerias de eventos estão preparados com estados vazios ("em breve") prontos a receber conteúdo real.
