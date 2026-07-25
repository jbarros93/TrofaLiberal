export const brand = {
  name: "Iniciativa Liberal Trofa",
  short: "IL Trofa",
  slogan: "Trofa Para Cima!",
  claim: "Menos Estado, mais liberdade.",
  email: "trofa@liberal.pt",
  anthem: "https://www.youtube.com/watch?v=I_ooMSUA6Ds",
  whatsapp: "https://chat.whatsapp.com/BRWLlS46VKiLC4WKCdLRdr",
};

export const socials = [
  { label: "Facebook", href: "https://www.facebook.com/TrofaLiberal" },
  { label: "Instagram", href: "https://www.instagram.com/liberaltrofa/" },
  { label: "WhatsApp", href: brand.whatsapp },
];

export const history = [
  {
    year: "2017",
    title: "Fundação do Partido",
    text: "Nasce a Iniciativa Liberal em Portugal, com uma visão clara de trazer o liberalismo para a política nacional.",
  },
  {
    year: "2019",
    title: "Primeiro deputado liberal eleito",
    text: "João Cotrim de Figueiredo torna-se o primeiro deputado eleito pela Iniciativa Liberal.",
  },
  {
    year: "2022",
    title: "Fundação do Núcleo da Trofa",
    text: "Nasce a Iniciativa Liberal da Trofa, a 25 de junho de 2022, em São Romão do Coronado.",
  },
  {
    year: "2025",
    title: "Primeiras Eleições Autárquicas",
    text: "A Iniciativa Liberal participa pela primeira vez nas eleições autárquicas, deixando uma imagem de criatividade, irreverência e esperança no futuro.",
  },
];

export const mandates = [
  {
    period: "2026 – 2028",
    current: true,
    coordinator: "A definir",
    board: "A definir",
    text: "O Grupo de Coordenação Local do Núcleo Territorial da Trofa foi eleito no Plenário Territorial. Uma equipa dedicada, comprometida em promover os valores liberais no concelho, com o objetivo de levar o liberalismo a todos os cidadãos da Trofa.",
  },
  {
    period: "2024 – 2026",
    current: false,
    coordinator: "Ivo Silva",
    board: "Afonso Couto",
    text: "O Grupo de Coordenação Local do Núcleo Territorial da Trofa foi eleito no Plenário Territorial realizado a 7 de setembro de 2024, no auditório da Junta de Freguesia de Bougado (Polo de Santiago).",
  },
  {
    period: "2022 – 2024",
    current: false,
    coordinator: "José Pedro Reis",
    board: "Ivo Silva",
    text: "O Plenário fundador do núcleo ocorreu a 25 de junho de 2022, no auditório da Junta de Freguesia do Coronado (Polo de São Romão), com a presença do antigo presidente da IL, Rui Rocha. José Pedro Reis foi um dos fundadores do núcleo e eleito o seu primeiro coordenador.",
  },
];

export const membershipReasons = [
  "Participa ativamente na vida política local e nacional",
  "Contribui com as tuas ideias para as causas liberais",
  "Ajuda a construir uma Trofa mais livre, justa e próspera",
  "Faz parte de uma comunidade com garra e sentido de compromisso",
];

export type ProposalArea = {
  key: string;
  title: string;
  subtitle: string;
  measures: string[];
};

export const proposalAreas: ProposalArea[] = [
  {
    key: "habitacao",
    title: "Habitação",
    subtitle: "Mais liberdade para viver, construir e investir",
    measures: [
      "Reduzir prazos de licenciamento para 40 dias úteis",
      "Eliminar taxas urbanísticas para primeira habitação",
      "Digitalizar processos de licenciamento",
      "Criar Gabinete do Construtor 2.0",
      "Promover construção em altura nos centros",
      "Programa municipal de arrendamento acessível",
    ],
  },
  {
    key: "educacao",
    title: "Educação",
    subtitle: "Liberdade para aprender, autonomia para crescer",
    measures: [
      "Autonomia escolar com contratos-programa a 3 anos",
      "Publicar indicadores de desempenho das escolas",
      "Biblioteca Municipal com salas de estudo 24h",
      "Feira de Saídas Profissionais da Trofa",
      "Bolsas de mérito para melhores alunos",
      "Ligação escola-empresa através de estágios",
    ],
  },
  {
    key: "modernizacao",
    title: "Modernização da Câmara",
    subtitle: "Uma câmara ao serviço das pessoas",
    measures: [
      "Portal único para todos os serviços municipais",
      "Princípio “uma só vez” — não repetir informação",
      "App municipal com funcionalidades práticas",
      "Portal de transparência com dados em tempo real",
      "Provedor do Munícipe independente",
      "Digitalização completa do arquivo municipal",
    ],
  },
  {
    key: "economia",
    title: "Economia e Emprego",
    subtitle: "Liberdade para crescer",
    measures: [
      "Balcão Único do Investidor",
      "Reduzir derrama para micro e pequenas empresas",
      "Criar novas zonas industriais",
      "Eliminar taxas injustificadas",
      "Revitalizar a Rua Conde São Bento",
      "Observatório Local da Economia",
    ],
  },
  {
    key: "mobilidade",
    title: "Mobilidade",
    subtitle: "Uma mobilidade eficiente e inovadora",
    measures: [
      "Rede inter-freguesias com minibus sob procura",
      "Ciclovias funcionais e conectadas",
      "App municipal com horários em tempo real",
      "Exigir o prolongamento do Metro até à estação da Trofa",
      "Melhorar acessos rodoviários em pontos críticos",
      "Zonas de interligação modal",
    ],
  },
  {
    key: "ambiente",
    title: "Ambiente",
    subtitle: "Ambiente responsável e planeamento com liberdade",
    measures: [
      "Mais ecopontos em locais estratégicos",
      "Contentores enterrados em todo o concelho",
      "Ecopontos especializados com sistema de pontuação",
      "Plano de manutenção preventiva de linhas de água",
      "Sensores de qualidade da água nos cursos de água",
      "Orçamento Verde Participativo",
    ],
  },
  {
    key: "saude",
    title: "Saúde e Desporto",
    subtitle: "Saúde preventiva e desporto com liberdade",
    measures: [
      "Plano municipal de literacia em saúde",
      "Piscina municipal descoberta",
      "Regulamento transparente de acesso a equipamentos",
      "Espaços desportivos em todas as freguesias",
      "Plano Local de Saúde Mental",
      "Gabinete de Apoio ao Cuidador Informal",
    ],
  },
  {
    key: "fiscalidade",
    title: "Fiscalidade",
    subtitle: "Menos impostos, mais liberdade",
    measures: [
      "Reduzir a participação no IRS de 4,0% para 2,0%",
      "Baixar o IMI para o valor mínimo legal",
      "Reduzir a derrama de 1,5% para 0,75%",
      "Eliminar taxas desnecessárias",
      "Isenção automática de taxas inferiores a 10€",
      "Não criar novas taxas durante o mandato",
    ],
  },
  {
    key: "cultura",
    title: "Cultura e Lazer",
    subtitle: "A cultura não se impõe — cria-se",
    measures: [
      "Regulamento transparente de apoio à criação cultural",
      "Museu da identidade trofense",
      "Pavilhão multiusos para eventos",
      "Casa da Juventude da Trofa",
      "Valorização do Castro de Alvarelhos",
      "Roteiro Cultural da Trofa digital",
    ],
  },
  {
    key: "social",
    title: "Ação Social",
    subtitle: "Liberdade e responsabilidade",
    measures: [
      "Regulamento transparente de apoio ao associativismo",
      "Contratos de compromisso com beneficiários",
      "Cartão Diamante para apoio variável aos munícipes",
      "Programa de visitas domiciliárias a idosos",
      "Plano municipal de integração de imigrantes",
      "Estimular voluntariado e redes de vizinhança",
    ],
  },
];

export const cartazCategories = [
  { key: "habitacao", title: "Habitação" },
  { key: "educacao", title: "Educação" },
  { key: "modernizacao", title: "Modernização da Câmara" },
  { key: "economia", title: "Economia, Emprego e Mobilidade" },
  { key: "fiscalidade", title: "Fiscalidade" },
  { key: "coesao", title: "Ação e Coesão Social" },
];

export type Candidate = {
  slug: string;
  name: string;
  role: string;
  tagline: string;
  photo: string;
  bio: string[];
  roles: string[];
  priorities?: string[];
  prioritiesLabel?: string;
  quote?: { text: string; cite?: string };
  profileUrl?: string;
  programUrl?: string;
};

export const candidates: Candidate[] = [
  {
    slug: "diamantino-costa",
    name: "Diamantino Costa",
    role: "Candidato à Câmara Municipal",
    tagline: "Se a Trofa é um diamante, então precisa do Diamantino!",
    photo: "/images/candidatos/diamantino-costa.webp",
    bio: [
      "Com um sólido perfil técnico e uma vasta experiência empresarial, Diamantino Costa é uma voz firme na defesa do liberalismo no concelho da Trofa e em toda a região do Ave.",
      "Contabilista certificado há mais de 25 anos, é atualmente diretor-geral da Sparkes & Sparkes LDA, empresa de referência no setor automóvel, área que é também uma das suas grandes paixões. Paralelamente, integra a direção da ARAN — Associação Nacional do Ramo Automóvel, contribuindo ativamente para a modernização do setor em Portugal.",
      "Pai e avô, acredita que Portugal precisa de se tornar um país mais simples e competitivo para que os jovens possam aqui permanecer, crescer e ser felizes. Ao longo dos anos, tem participado em diversos projetos locais com esse objetivo.",
      "Na Iniciativa Liberal, colaborou no Gabinete de Estudos e mantém-se ativo no iLab, na área de finanças e fiscalidade, a sua especialidade, contribuindo para a elaboração das propostas do partido. Foi ainda cabeça de lista ao Conselho de Fiscalização da IL, onde foi eleito e exerce funções até hoje.",
      "Há três anos assina a crónica “Folha Liberal” num jornal local, onde explica e descomplica as propostas liberais de forma simples mas sempre rigorosa. É também o membro mais antigo da IL na Trofa, já tendo desempenhado os cargos de vice-coordenador e tesoureiro por duas vezes.",
    ],
    roles: [
      "Diretor-geral da Sparkes & Sparkes LDA",
      "Membro da direção da ARAN — Associação Nacional do Ramo Automóvel",
      "Membro do Conselho de Fiscalização da Iniciativa Liberal",
      "Membro do iLab — Gabinete de Estudos da Iniciativa Liberal",
      "Contabilista certificado há mais de 25 anos",
      "Cronista no jornal local há 3 anos",
      "Colaborador ativo em vários projetos sociais locais",
    ],
    quote: {
      text: "Diz-se só mais uma voz liberal, mas certamente terá uma grande importância no futuro do nosso concelho. Se a Trofa é um diamante, então precisa do Diamantino!",
    },
    profileUrl:
      "https://iniciativaliberal.pt/partido/candidatos-2025/diamantino-costa/",
    programUrl: "/programas/programa-trofa-para-cima.pdf",
  },
  {
    slug: "jose-pedro-reis",
    name: "José Pedro Reis",
    role: "Candidato à Assembleia Municipal",
    tagline: "Um verdadeiro “homem dos sete ofícios” — e pronto para assumir o oitavo!",
    photo: "/images/candidatos/jose-pedro-reis.webp",
    bio: [
      "Professor de História e historiador, Jose Pedro Reis alia à paixão pelo ensino uma longa experiência como bombeiro voluntário na Associação Humanitária dos Bombeiros Voluntários Tirsenses, além de árbitro e dirigente de futebol. É também investigador na Faculdade de Letras da Universidade do Porto.",
      "Ao longo da sua carreira docente, percorreu várias regiões do país, lecionando em locais tão distintos como Barrancos, Portimão, Vila Nova de Cerveira, Vila das Aves, Moncorvo, São Romão do Coronado e Ribeirão, experiência que lhe deu uma visão abrangente da diversidade de realidades nacionais.",
      "Com uma curiosidade insaciável e a convicção de que “o saber não ocupa espaço”, continua a investir na sua formação académica: está a concluir uma pós-graduação em Fogos Rurais, um mestrado em Geografia e Proteção Civil e um doutoramento em História.",
      "Autor de quatro livros, entre os quais “Trofa um passado de progresso” (2020) e a biografia “Heliodoro Salgado — Um Homem de Lutas”, escreve há oito anos uma crónica no jornal O Notícias da Trofa, onde partilha episódios e memórias da Trofa de outros tempos, aproximando a comunidade da sua identidade e património cultural.",
      "Em 2022 foi um dos fundadores do núcleo da Iniciativa Liberal na Trofa, tendo sido eleito o seu primeiro coordenador. Na Convenção Nacional da IL de julho de 2025, apresentou a moção “Desburocratizar, transformar e modernizar os bombeiros em Portugal”, aprovada pelos delegados, que defende a criação de carreira para bombeiros voluntários e a simplificação de regras burocráticas.",
    ],
    roles: [
      "Professor de História e investigador na Faculdade de Letras da Universidade do Porto",
      "Historiador e autor de 4 livros sobre a Trofa",
      "Bombeiro voluntário na Associação Humanitária dos Bombeiros Voluntários Tirsenses",
      "Cronista no jornal O Notícias da Trofa (há 8 anos)",
      "Vice-coordenador do núcleo da Iniciativa Liberal da Trofa",
      "Porta-voz da Iniciativa Liberal no município da Trofa",
    ],
    quote: {
      text: "É urgente repensar o sistema de proteção civil em Portugal. O salvamento não pode continuar a ser concebido como tem sido há praticamente século e meio.",
      cite: "José Pedro Reis, sobre a modernização dos bombeiros",
    },
  },
  {
    slug: "pedro-rebelo",
    name: "Pedro Rebelo",
    role: "Candidato à Junta de Freguesia de Bougado",
    tagline: "Ideias, visão e energia para melhorar Bougado.",
    photo: "/images/candidatos/pedro-rebelo.webp",
    bio: [
      "Assistente Técnico desde 1999 até à presente data, exerceu funções na DREN — Direção Regional de Educação Norte — e, desde 2007, no Agrupamento de Escolas da Trofa, pertencendo ao Ministério da Educação. Desde 2023 pertence aos quadros do Município da Trofa.",
      "Está também ligado ao desporto concelhio, sendo Presidente do Conselho Fiscal do Atlético Clube Bougadense desde 2019.",
      "Cidadão comum sem passado político, é uma pessoa que identifica as oportunidades de melhoria e toma a iniciativa de as concretizar. Acredita que as experiências que enfrentou na vida, os lugares que conheceu e as pessoas com quem conviveu o ajudaram a melhorar a sua visão de comunidade, e quer agora retribuir à terra que tão bem o acolheu.",
      "Apresenta-se a esta candidatura de forma honesta, para melhorar Bougado, com ideias, visão e energia. É independente, mas identifica-se com a visão liberal e acredita que um Bougado mais liberal será um Bougado mais desenvolvido, com melhores condições de vida para todos.",
    ],
    roles: [
      "Assistente Técnico no Município da Trofa (desde 2023)",
      "Ex-DREN e Agrupamento de Escolas da Trofa",
      "Presidente do Conselho Fiscal do Atlético Clube Bougadense (desde 2019)",
      "Candidato independente em lista liberal",
    ],
    priorities: [
      "Reforço da educação no 1.º ciclo",
      "Valorização dos espaços públicos",
      "Melhoria da limpeza urbana",
    ],
    prioritiesLabel: "Prioridades locais",
    quote: {
      text: "Queremos ser uma alternativa positiva e credível, com ideias claras para melhorar a qualidade de vida dos bougadenses.",
      cite: "Pedro Rebelo",
    },
    programUrl: "/programas/programa-bougado.pdf",
  },
  {
    slug: "bruno-magalhaes",
    name: "Bruno Magalhães",
    role: "Candidato à Junta de Freguesia de Alvarelhos",
    tagline: "Trazer uma nova vida à Junta.",
    photo: "/images/candidatos/bruno-magalhaes.webp",
    bio: [
      "Bruno Silva Magalhães, nascido a 5 de novembro de 1992, é natural de Alvarelhos, freguesia onde cresceu e sempre viveu, tal como a sua mãe. O pai chegou à freguesia aos 9 anos e por cá ficou, reforçando a ligação da família à terra.",
      "Profissionalmente, é técnico especializado em máquinas CNC na área metalúrgica, habituado ao rigor, à precisão e à responsabilidade. São essas qualidades que quer agora colocar ao serviço da comunidade.",
      "Durante mais de meia década, integrou o Grupo de Jovens de Alvarelhos, onde aprendeu o valor da participação ativa, do trabalho em equipa e da dedicação à terra que o viu crescer. É membro ativo da Iniciativa Liberal há vários anos, participando nas campanhas e eventos locais.",
      "Candidato à Junta de Freguesia de Alvarelhos pela Iniciativa Liberal, apresenta-se com um objetivo claro: trazer uma nova vida à junta. Quer pôr fim a uma gestão adormecida e passiva, substituindo-a por uma Junta mais próxima, mais presente e mais proativa — capaz de antecipar problemas, ouvir as pessoas e agir com transparência, rapidez e bom senso.",
    ],
    roles: [
      "Técnico especializado em máquinas CNC na área metalúrgica",
      "Membro ativo da Iniciativa Liberal há vários anos",
      "Ex-membro do Grupo de Jovens de Alvarelhos",
      "Natural e residente em Alvarelhos",
    ],
    priorities: ["Dinamismo", "Transparência", "Modernização", "Justiça Social"],
    prioritiesLabel: "Eixos da campanha",
    quote: {
      text: "O nosso objetivo não é conquistar cargos. É honrar Alvarelhos, melhorar a vida de quem cá vive e retribuir com o que a terra nos deu.",
      cite: "Bruno Magalhães",
    },
    programUrl: "/programas/programa-alvarelhos.pdf",
  },
];

export const programs = [
  {
    title: "Programa Trofa Para Cima",
    text: "O programa autárquico completo para o concelho: menos burocracia, mais liberdade, e uma Trofa mais próspera para todos.",
    fileUrl: "/programas/programa-trofa-para-cima.pdf",
  },
  {
    title: "Programa Alvarelhos Liberal",
    text: "Propostas específicas para a freguesia de Alvarelhos, mais próximas, mais presentes e mais proativas.",
    fileUrl: "/programas/programa-alvarelhos.pdf",
  },
  {
    title: "Programa Bougado Liberal",
    text: "Um plano de ação para Bougado, com ideias concretas para melhorar o dia a dia da freguesia.",
    fileUrl: "/programas/programa-bougado.pdf",
  },
];

export const events = {
  lit: {
    title: "LIT — Jornadas Liberais da Trofa",
    editions: [
      {
        title: "1.ª Edição — Educação",
        text: "A primeira edição das Jornadas Liberais da Trofa juntou a comunidade para debater o futuro da Educação no concelho, com galeria de fotos e relatório disponíveis em breve.",
      },
      {
        title: "Próximas edições",
        text: "Novos temas e datas serão anunciados brevemente. Fica atento aos nossos canais.",
      },
    ],
  },
  parlamento: {
    title: "Aqui Há Parlamento",
    text: "Uma iniciativa de proximidade que leva o debate político para o dia a dia da Trofa, com galeria de fotos dos encontros realizados.",
  },
};

export const pressNote =
  "Notícias, artigos de opinião de membros do núcleo e comunicados oficiais. Este espaço mantém-te informado sobre a nossa atividade política e decisões partidárias.";

export const storeProducts = [
  {
    name: "Pin IL Trofa",
    price: "3€",
    text: "O símbolo liberal ao peito, discreto e com atitude.",
    icon: "pin",
  },
  {
    name: "Crachá",
    price: "2€",
    text: "Mostra o teu apoio em qualquer evento ou reunião.",
    icon: "badge",
  },
  {
    name: "T-Shirt — Trofa Para Cima 2025",
    price: "15€",
    text: "A t-shirt oficial da campanha autárquica 2025.",
    icon: "shirt",
  },
] as const;
