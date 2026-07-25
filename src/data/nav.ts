export type NavChild = {
  label: string;
  to: string;
};

export type NavItem = {
  label: string;
  to?: string;
  children?: NavChild[];
};

export const nav: NavItem[] = [
  { label: "Início", to: "/" },
  {
    label: "Trofa Liberal",
    to: "/trofa-liberal",
    children: [
      { label: "Sobre a IL Trofa", to: "/trofa-liberal" },
      { label: "Equipa", to: "/trofa-liberal/equipa" },
      { label: "Faz-te Membro", to: "/trofa-liberal/faz-te-membro" },
      { label: "Contacta-nos", to: "/trofa-liberal/contactos" },
    ],
  },
  {
    label: "Ideias",
    to: "/ideias",
    children: [
      { label: "Temas", to: "/ideias" },
      { label: "Cartazes", to: "/ideias/cartazes" },
      { label: "Tens uma ideia?", to: "/ideias/sugestao" },
    ],
  },
  { label: "Denúncia", to: "/denuncia" },
  { label: "Na Imprensa", to: "/imprensa" },
  {
    label: "Eventos",
    to: "/eventos",
    children: [
      { label: "Calendário", to: "/eventos" },
      { label: "LIT — Jornadas Liberais", to: "/eventos/lit" },
      { label: "Aqui Há Parlamento", to: "/eventos/aqui-ha-parlamento" },
    ],
  },
  { label: "Autárquicas 2025", to: "/autarquicas-2025" },
  { label: "Loja e Donativos", to: "/loja" },
];
