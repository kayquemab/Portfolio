"use client";

import Contato from "@/components/Contato";
import FormacaoCertificacoes from "@/components/FormacaoCertificacoes";
import Habilidades from "@/components/Habilidades";
import Header from "@/components/Header";
import Home from "@/components/Home";
import Projetos from "@/components/Projetos";
import SobreMim from "@/components/SobreMim";
import { useEffect, useRef } from "react";

export default function Page() {
  const apresentacaoRef = useRef(null);
  const projetosRef = useRef(null);
  const contatoRef = useRef(null);

  const scrollToSection = (section) => {
    const sections = {
      apresentacao: apresentacaoRef,
      projetos: projetosRef,
      contato: contatoRef,
    };
    sections[section]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, []);

  return (

    <div>

      {/* Header */}
      <div>
        <Header scrollToSection={scrollToSection} />
      </div>

      {/* Home */}
      <div>
        <Home />
      </div>

      {/* Sobre Mim */}
      <div ref={apresentacaoRef}>
        <SobreMim />
      </div>

      {/* Habilidades */}
      <div>
        <Habilidades />
      </div>

      {/* Formações e Certificados */}
      <div>
        <FormacaoCertificacoes />
      </div>

      {/* Projetos */}
      <div
        ref={projetosRef}>
        <Projetos />
      </div>

      {/* Contato */}
      <div
        ref={contatoRef}>
        <Contato />
      </div>

    </div>

  );
}