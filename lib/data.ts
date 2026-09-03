export const CTA_LABEL = "GARANTIR MEU INGRESSO";
export const HERO_CTA_LABEL = "QUERO VIVER O IMAGINE";
export const HERO_CTA_SECONDARY_LABEL = "Conheça as experiências";
export const LOTE_LABEL = "Lote 0";

export const NAV_LINKS = [
  { href: "#evento", label: "O Evento" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#palestrantes", label: "Palestrantes" },
  { href: "#ingressos", label: "Ingressos" },
  { href: "#faq", label: "FAQ" },
];

export const INFO_STRIP = [
  { label: "QUANDO", value: "15 e 16 de maio de 2027" },
  { label: "ONDE", value: "Apogeo Nobre Alphaville, Alphaville, SP" },
  { label: "PARA QUEM", value: "Agentes e profissionais do turismo" },
  { label: "EDIÇÃO", value: "5ª · Academia da Magia" },
];

export const EDITION_HIGHLIGHTS = [
  { label: "Profissionais", color: "cyan" },
  { label: "Ideias", color: "purple" },
  { label: "Experiências", color: "magenta" },
  { label: "Histórias", color: "white" },
] as const;

export const O_QUE_E_STATS = [
  { big: "2", label: "dias de imersão", color: "cyan" },
  { title: "Conteúdo", label: "transformador", color: "purple" },
  { title: "Conexões", label: "reais", color: "magenta" },
  { title: "Experiências", label: "inesquecíveis", color: "coral" },
];

export const EXPERIENCE_FORCES = [
  { label: "Conteúdo", color: "cyan" },
  { label: "Relacionamento", color: "purple" },
  { label: "Experiência", color: "magenta" },
  { label: "Comunidade", color: "coral" },
] as const;

export const PILARES = [
  {
    key: "inteligencia",
    color: "cyan",
    shape: "ring",
    eyebrow: "INTELIGÊNCIA",
    title: "Entender",
    text: "Compreender o novo mundo: IA, tecnologia, dados, mercado e comportamento para tomar decisões melhores e enxergar novos caminhos com mais clareza.",
    word: "ENTENDER.",
  },
  {
    key: "estrategia",
    color: "purple",
    shape: "diamond",
    eyebrow: "ESTRATÉGIA",
    title: "Escolher",
    text: "Nem toda possibilidade precisa virar prioridade. Crescer também significa decidir onde colocar sua energia, seu tempo e sua atenção entre tudo aquilo que você poderia fazer. Imaginar abre possibilidades. Escolher transforma possibilidades em decisões.",
    word: "ESCOLHER.",
  },
  {
    key: "proposito",
    color: "magenta",
    shape: "dot",
    eyebrow: "PROPÓSITO",
    title: "Direcionar",
    text: "Que negócio quero construir? Que vida esse negócio está construindo para mim? Direcionar é dar sentido a cada escolha, para que o caminho leve a algum lugar que valha a pena chegar.",
    word: "DIRECIONAR.",
  },
  {
    key: "possibilidades",
    color: "coral",
    shape: "sparkle",
    eyebrow: "POSSIBILIDADES",
    title: "Transformar",
    text: "E se fosse possível criar algo que ainda não existe? Transformar é dar o primeiro passo: sair da possibilidade imaginada para o futuro construído.",
    word: "TRANSFORMAR.",
  },
] as const;

export const HUMAN_SKILLS = [
  "Empatia",
  "Confiança",
  "Presença",
  "Relacionamento",
  "Criatividade",
  "Propósito",
  "Imaginação",
];

export const GALLERY = [
  { src: "/assets/evento-1.jpg", alt: "Palco do Magic Makers Ao Vivo" },
  { src: "/assets/evento-2.jpg", alt: "Público do Magic Makers Ao Vivo" },
  { src: "/assets/evento-3.jpg", alt: "Experiência do Magic Makers Ao Vivo" },
  { src: "/assets/evento-4.jpg", alt: "Comunidade do Magic Makers Ao Vivo" },
];

export const TIMELINE = [
  { name: "MAGIC MAKERS AO VIVO", note: "O nascimento", color: "blue", current: false },
  { name: "RELOADED", note: "A renovação", color: "cyan", current: false },
  { name: "FIRE", note: "A energia", color: "purple", current: false },
  { name: "ROCKET", note: "O impulso", color: "coral", current: false },
  { name: "IMAGINE", note: "A direção", color: "gradient", current: true },
] as const;

export const SPEAKERS = [
  {
    name: "Camila Moretti",
    specialty: "MENTORIA, VENDAS E TRANSFORMAÇÃO DE NEGÓCIOS",
    bio: "Especialista em vendas, processos e desenvolvimento de agências de viagens, atua na transformação de profissionais do turismo em empresários mais estratégicos e preparados para crescer.",
    photo: "/speakers/camila-moretti.jpg",
    color: "magenta",
  },
  {
    name: "Joice Ferreira",
    specialty: "TURISMO, EXPERIÊNCIA E EXCELÊNCIA",
    bio: "Há mais de 30 anos no mercado de Orlando, fundadora da Magic Blue Turismo, une vivência prática, conhecimento de mercado e excelência para inspirar e formar profissionais capazes de encantar pessoas por meio do turismo.",
    photo: "/speakers/joice-ferreira.jpg",
    color: "cyan",
  },
  {
    name: "Paulo Soares",
    specialty: "ESTRATÉGIA, INOVAÇÃO E VISÃO DE FUTURO",
    bio: "Lidera projetos de posicionamento, produtos, eventos e Inteligência Artificial na Academia da Magia, com olhar para transformar possibilidades em negócios sustentáveis.",
    photo: "/speakers/paulo-soares.jpg",
    color: "coral",
  },
];

export const TICKETS = [
  {
    key: "spark",
    name: "SPARK",
    tagline: "Acenda novas possibilidades.",
    price: "R$ 750",
    color: "cyan",
    featured: false,
    badge: null,
    benefits: [
      "Kit de boas-vindas SPARK",
      "Acesso completo à programação dos 2 dias",
    ],
    ctaStyle: "outline",
    checkoutUrl: "https://pay.hotmart.com/A107452607L?off=y67b77ji",
  },
  {
    key: "inspire",
    name: "INSPIRE",
    tagline: "Expanda sua visão.",
    price: "R$ 1.550",
    color: "magenta",
    featured: true,
    badge: "MAIS ESCOLHIDO",
    benefits: [
      "Kit de boas-vindas INSPIRE",
      "Almoço nos 2 dias de evento",
      "Snack Box exclusivo",
      "Sessão de fotos executiva",
    ],
    ctaStyle: "solid",
    checkoutUrl: "https://pay.hotmart.com/A107452607L?off=iqfd32ix",
  },
  {
    key: "imagine",
    name: "IMAGINE ✨",
    tagline: "Transforme possibilidades em realidade.",
    price: "R$ 2.200",
    color: "coral",
    featured: false,
    premium: true,
    badge: "EXPERIÊNCIA COMPLETA",
    benefits: [
      "Kit de boas-vindas IMAGINE",
      "Almoço nos 2 dias de evento",
      "Assentos próximos ao palco",
      "Área VIP exclusiva com acesso nos 2 dias",
      "Happy Hour/Coquetel exclusivo no fim do dia 1",
      "Sessão de fotos executiva",
      "Snack Box",
      "Mesa de snacks exclusiva nos 2 dias",
    ],
    ctaStyle: "gradient",
    checkoutUrl: "https://pay.hotmart.com/A107452607L?off=f6ag4cv2",
  },
] as const;

export const FAQ_ITEMS = [
  {
    q: "O que é o Magic Makers Ao Vivo?",
    a: "É o grande encontro presencial da comunidade da Academia da Magia, reunindo profissionais do turismo em dois dias de conteúdo, estratégia, experiências, conexões e transformação. Na 5ª edição, o tema IMAGINE convida você a pensar os próximos passos do seu negócio com mais inteligência, estratégia e propósito.",
  },
  {
    q: "Para quem é o evento?",
    a: "Para agentes de viagens, donos de agências, empreendedores e profissionais do turismo que desejam construir negócios mais estruturados, estratégicos e preparados para as transformações do mercado, do iniciante ao operador consolidado.",
  },
  {
    q: "Preciso ser aluno da Academia da Magia para participar?",
    a: "Não. O Magic Makers Ao Vivo é aberto a profissionais do turismo, mesmo que você nunca tenha participado de nenhum curso ou programa da Academia da Magia.",
  },
  {
    q: "O evento será somente sobre Orlando?",
    a: "Não. Orlando faz parte da nossa história e estará naturalmente presente, mas o Magic Makers vai muito além de um destino específico, falaremos sobre negócios, vendas, estratégia, inovação, tecnologia, IA, gestão, propósito e o futuro do turismo.",
  },
  {
    q: "O IMAGINE é um evento sobre Inteligência Artificial?",
    a: "Não. A IA será parte importante das discussões, mas o IMAGINE é, acima de tudo, sobre como profissionais do turismo podem usar inteligência, estratégia e tecnologia sem perder o que nenhuma máquina substitui: relacionamento, confiança, presença, criatividade e conexão humana.",
  },
  {
    q: "Quais são os tipos de ingresso?",
    a: "Três experiências: SPARK (acenda novas possibilidades), INSPIRE (expanda sua visão) e IMAGINE (transforme possibilidades em realidade). Compare os benefícios completos na seção de ingressos.",
  },
  {
    q: "Qual ingresso devo escolher?",
    a: "Depende de como você quer viver o evento. Para o conteúdo e a experiência principal, comece pelo SPARK. Para benefícios adicionais e uma experiência mais completa, escolha o INSPIRE. Para viver o máximo que o Magic Makers pode oferecer, o IMAGINE é a categoria mais completa.",
  },
  {
    q: "Os ingressos são limitados? O preço pode aumentar?",
    a: "Sim. A capacidade total e algumas categorias têm disponibilidade limitada, e a venda é organizada em lotes, os valores podem aumentar conforme a virada. Garantir seu ingresso antecipadamente assegura a categoria e o valor do lote atual.",
  },
  {
    q: "Onde será realizado o evento?",
    a: "No Apogeo Nobre Alphaville, Av. Tamboré, 1009, Alphaville, SP. As informações completas de acesso serão enviadas aos participantes.",
  },
  {
    q: "Posso parcelar meu ingresso?",
    a: "Sim, as condições de parcelamento disponíveis serão apresentadas antes da conclusão da compra.",
  },
  {
    q: "O ingresso é individual? Posso transferir para outra pessoa?",
    a: "O ingresso dá direito à participação de uma pessoa, vinculado aos dados cadastrados na inscrição. A política de transferência será confirmada pela organização antes do evento.",
  },
  {
    q: "Haverá espaço para networking?",
    a: 'Sim, e não apenas como intervalo entre palestras. Conexões humanas fazem parte do conceito do IMAGINE: a experiência é pensada para estimular encontros, conversas e aproximação com marcas e parceiros do mercado.',
  },
  {
    q: "Ainda tenho dúvidas. Com quem posso falar?",
    a: 'Nossa equipe pode ajudar você, use o botão "Falar com a equipe do Magic Makers" abaixo para atendimento direto.',
  },
];
