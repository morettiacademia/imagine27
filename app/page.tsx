import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Tensao from "@/components/Tensao";
import OQueE from "@/components/OQueE";
import Pilares from "@/components/Pilares";
import Experiencia from "@/components/Experiencia";
import Timeline from "@/components/Timeline";
import Palestrantes from "@/components/Palestrantes";
import PorQueImagine from "@/components/PorQueImagine";
import Ingressos from "@/components/Ingressos";
import MapaSetores from "@/components/MapaSetores";
import Programacao from "@/components/Programacao";
import Faq from "@/components/Faq";
import CtaFinal from "@/components/CtaFinal";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Tensao />
        <OQueE />
        <Pilares />
        <Timeline />
        <Experiencia />
        <Palestrantes />
        <PorQueImagine />
        <Ingressos />
        <MapaSetores />
        <Programacao />
        <Faq />
        <CtaFinal />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
