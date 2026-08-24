# IMAGINE — Magic Makers Ao Vivo 2027

Landing page de vendas de ingressos para o Magic Makers Ao Vivo 2027 (tema
IMAGINE), 5ª edição do evento presencial da Academia da Magia, para agentes de
viagens e profissionais do turismo.

Implementado em Next.js (App Router, TypeScript) a partir do handoff de
design em `design_handoff_imagine_site/` (prototipo HTML de alta fidelidade).

## Rodando localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Build estático

O site é exportado como HTML/CSS/JS estático (`output: "export"` em
`next.config.ts`), pronto para qualquer hosting estático:

```bash
npm run build
```

O resultado fica em `out/`.

## Estrutura

- `app/` — layout raiz, metadata e estilos globais (`app/globals.css`)
- `components/` — uma seção da página por componente (Nav, Hero, Tensao,
  OQueE, Pilares, SecaoIA, VidaNegocio, Orlando, Experiencia, Timeline,
  Palestrantes, Ingressos, Programacao, Faq, Patrocinadores, CtaFinal,
  Footer), cada um com seu CSS Module
- `lib/data.ts` — conteúdo e dados estruturados da página (links de nav,
  pilares, palestrantes, ingressos, FAQ, etc.) — fonte única de verdade para
  textos e valores
- `public/assets/` — fotos reais de edições anteriores do evento

## Conteúdo pendente

Os seguintes pontos ainda não têm informação confirmada e devem ser
atualizados quando disponíveis (ver `lib/data.ts` e o handoff original):

- Depoimentos de clientes / prova social
- Logos e níveis de patrocínio
- Grade completa de programação
- Condições de parcelamento e política de transferência de ingresso
- Data de virada do Lote 0 → Lote 1

## Logo

O lockup "IMAGIN" + barras coloridas em `components/Logo.tsx` é uma
recriação em CSS do logotipo (sem arquivo vetorial disponível no handoff).
Caso a Academia da Magia forneça um arquivo de logo oficial, substitua o
componente para usar a imagem real.
