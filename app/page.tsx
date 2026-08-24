import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Tensao from "@/components/Tensao";
import OQueE from "@/components/OQueE";
import Pilares from "@/components/Pilares";
import SecaoIA from "@/components/SecaoIA";
import VidaNegocio from "@/components/VidaNegocio";
import Orlando from "@/components/Orlando";
import Experiencia from "@/components/Experiencia";
import Timeline from "@/components/Timeline";
import Palestrantes from "@/components/Palestrantes";
import Ingressos from "@/components/Ingressos";
import Programacao from "@/components/Programacao";
import Faq from "@/components/Faq";
import Patrocinadores from "@/components/Patrocinadores";
import CtaFinal from "@/components/CtaFinal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Tensao />
        <OQueE />
        <Pilares />
        <SecaoIA />
        <VidaNegocio />
        <Orlando />
        <Experiencia />
        <Timeline />
        <Palestrantes />
        <Ingressos />
        <Programacao />
        <Faq />
        <Patrocinadores />
        <CtaFinal />
      </main>
      <Footer />
    </>
  );
}
