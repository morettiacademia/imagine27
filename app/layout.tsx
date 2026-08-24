import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "IMAGINE · Magic Makers Ao Vivo 2027",
  description:
    "15 e 16 de maio de 2027, em Barueri - SP. Dois dias para entender o que está mudando, escolher o que realmente importa e imaginar o negócio e a vida que você quer construir. Um evento da Academia da Magia para agentes de viagens e profissionais do turismo.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={montserrat.variable}>
      <body>{children}</body>
    </html>
  );
}
