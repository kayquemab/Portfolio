"use client";

import { useState } from "react";
import GridResponsivo from "@/shared/components/grid-responsivo";
import BotaoVoltar from "@/shared/components/botao-voltar";
import CabecalhoSecao from "@/shared/components/cabecalho-secao";
import CampoBusca from "@/shared/components/campo-busca";
import CartaoCertificado from "@/features/certificados/components/cartao-certificado";
import ModalCertificado from "@/features/certificados/components/modal-certificado";

export default function Certificados() {
  const [certificadoSelecionado, setCertificadoSelecionado] = useState(null);
  const [busca, setBusca] = useState("");

  const certificacoes = [
    // // Curso em Vídeo

    {
      titulo: "Algoritmo [40 Horas]",
      org: "Curso em Vídeo",
      data: "Emitido: Dez 2024",
      // imagem:
    },
    {
      titulo: "Git e GitHub [20 Horas]",
      org: "Curso em Vídeo",
      data: "Emitido: Fev 2025",
      // imagem:
    },
    // // {
    // //   titulo: "MySQL [40 Horas]",
    // //   org: "Curso em Vídeo",
    // //   data: "Emitido: Jun 2025",
    // //   // imagem:
    // // },
    {
      titulo: "HTML5 [40 Horas]",
      org: "Curso em Vídeo",
      data: "Emitido: Jun 2025",
      // imagem:
    },
    // // {
    // //   titulo: "Curso HTML5 e CSS3: módulo 1 de 5 [40 HORAS]",
    // //   org: "Curso em Vídeo",
    // //   data: "Emitido: Jun 2025",
    // //   // imagem:
    // // },
    // // {
    // //   titulo: "Curso HTML5 e CSS3: módulo 2 de 5 [40 HORAS]",
    // //   org: "Curso em Vídeo",
    // //   data: "Emitido: Jun 2025",
    // //   // imagem:
    // // },
    // // {
    // //   titulo: "Curso HTML5 e CSS3: módulo 3 de 5 [40 HORAS]",
    // //   org: "Curso em Vídeo",
    // //   data: "Emitido: Jun 2025",
    // //   // imagem:
    // // },
    // // {
    // //   titulo: "Curso HTML5 e CSS3: módulo 4 de 5 [40 HORAS]",
    // //   org: "Curso em Vídeo",
    // //   data: "Emitido: Jun 2025",
    // //   // imagem:
    // // },
    // // {
    // //   titulo: "Curso HTML5 e CSS3: módulo 5 de 5 [40 HORAS]",
    // //   org: "Curso em Vídeo",
    // //   data: "Emitido: Jun 2025",
    // //   // imagem:
    // // },
    {
      titulo: "Javascript [40 Horas]",
      org: "Curso em Vídeo",
      data: "Emitido: Set 2025",
      // imagem:
    },
    // // {
    // //   titulo: "PHP POO [40 Horas]",
    // //   org: "Curso em Vídeo",
    // //   data: "Emitido: Dez 2026",
    // //   // imagem:
    // // },
    // // {
    // //   titulo: "Python 3 – Mundo 1 [40 Horas]",
    // //   org: "Curso em Vídeo",
    // //   data: "Emitido: Dez 2026",
    // //   // imagem:
    // // },
    // // {
    // //   titulo: "Python 3 – Mundo 2 [40 Horas]",
    // //   org: "Curso em Vídeo",
    // //   data: "Emitido: Dez 2026",
    // //   // imagem:
    // // },
    // // {
    // //   titulo: "Python 3 – Mundo 3 [40 Horas]",
    // //   org: "Curso em Vídeo",
    // //   data: "Emitido: Dez 2026",
    // //   // imagem:
    // // },
    // // {
    // //   titulo: "Python 3 – Mundo 4 [40 Horas]",
    // //   org: "Curso em Vídeo",
    // //   data: "Emitido: Dez 2026",
    // //   // imagem:
    // // },
    // // {
    // //   titulo: "Bases Numéricas [20 Horas]",
    // //   org: "Curso em Vídeo",
    // //   data: "Emitido: Dez 2026",
    // //   // imagem:
    // // },
    // // {
    // //   titulo: "Hardware [20 Horas]",
    // //   org: "Curso em Vídeo",
    // //   data: "Emitido: Dez 2026",
    // //   // imagem:
    // // },
    // // {
    // //   titulo: "Linux [40 Horas]",
    // //   org: "Curso em Vídeo",
    // //   data: "Emitido: Dez 2026",
    // //   // imagem:
    // // },
    // // {
    // //   titulo: "Redes de Computadores [20 Horas]",
    // //   org: "Curso em Vídeo",
    // //   data: "Emitido: Dez 2026",
    // //   // imagem:
    // // },
    // // {
    // //   titulo: "Inteligência Artificial - Módulo 1 [40 HORAS]",
    // //   org: "Curso em Vídeo",
    // //   data: "Emitido: Dez 2026",
    // //   // imagem:
    // // },
    // // {
    // //   titulo: "Inteligência Artificial - Módulo 2 [40 HORAS]",
    // //   org: "Curso em Vídeo",
    // //   data: "Emitido: Dez 2026",
    // //   // imagem:
    // // },
    // // {
    // //   titulo: "Curso de Inglês – Módulo 01: Beginners – [20 HORAS]",
    // //   org: "Curso em Vídeo",
    // //   data: "Emitido: Dez 2026",
    // //   // imagem:
    // // },
    // // {
    // //   titulo: "Curso de Inglês – Módulo 02: Beginners – [20 HORAS]",
    // //   org: "Curso em Vídeo",
    // //   data: "Emitido: Dez 2026",
    // //   // imagem:
    // // },
    // // {
    // //   titulo: "Curso de Inglês – Módulo 03: Beginners – [20 HORAS]",
    // //   org: "Curso em Vídeo",
    // //   data: "Emitido: Dez 2026",
    // //   // imagem:
    // // },
    // // {
    // //   titulo: "Curso de Inglês – Módulo 04: Beginners – [20 HORAS]",
    // //   org: "Curso em Vídeo",
    // //   data: "Emitido: Dez 2026",
    // //   // imagem:
    // // },

    // // Hora de Codar

    // {
    //   titulo: "Typescript [40 horas]",
    //   org: "Hora de Codar",
    //   data: "Emitido: Fev 2026",
    //   // imagem:
    // },

    // // Trybe

    {
      titulo: "Javascript do zero [10 horas]",
      org: "Trybe",
      data: "Emitido: Nov 2025",
      imagem: "certificados/Trybe/JavascriptDoZero.png",
    },
    {
      titulo: "Lógica de Programação [10 horas]",
      org: "Trybe",
      data: "Emitido: Nov 2025",
      imagem: "certificados/Trybe/LogicaDeProgramacao.png",
    },
    // {
    //   titulo: "IA Generativa com AWS [10 horas]",
    //   org: "Trybe",
    //   data: "Emitido: Nov 2025",
    //   // imagem:
    // },

    // // GreatStack

    {
      titulo: "Fundamentos de JavaScript",
      org: "GreatStack",
      data: "Emitido: Fev 2026",
      imagem: "certificados/GreatStack/FundamentosJavaScript.png",
    },
    {
      titulo: "Curso Intensivo de React Hooks",
      org: "GreatStack",
      data: "Emitido: Fev 2026",
      imagem: "certificados/GreatStack/ReactHooks.png",
    },
    // {
    //   titulo: "E-Commerce Site",
    //   org: "GreatStack",
    //   data: "Emitido: Fev 2026",
    //   // imagem:
    // },
    // {
    //   titulo: "YouTube Clone",
    //   org: "GreatStack",
    //   data: "Emitido: Fev 2026",
    //   // imagem:
    // },
    // {
    //   titulo: "E-Commerce App",
    //   org: "GreatStack",
    //   data: "Emitido: Fev 2026",
    //   // imagem:
    // },
    // {
    //   titulo: "Food Delivery App",
    //   org: "GreatStack",
    //   data: "Emitido: Fev 2026",
    //   // imagem:
    // },
  ];

  const buscaNormalizada = busca.toLowerCase().trim();

  const certificacoesFiltradas = certificacoes.filter((cert) => {
    const titulo = cert.titulo.toLowerCase();
    const org = cert.org.toLowerCase();
    const data = cert.data.toLowerCase();

    return (
      titulo.includes(buscaNormalizada) ||
      org.includes(buscaNormalizada) ||
      data.includes(buscaNormalizada)
    );
  });

  return (
    <section
      className="
        flex flex-col justify-center items-center
        px-4 sm:px-6 md:px-10 lg:px-0
        text-center
        pb-16 sm:pb-20 md:pb-24 lg:pb-32
        pt-16 sm:pt-20 md:pt-24 lg:pt-8
      "
    >
      <CabecalhoSecao
        rotulo="Aprendizado contínuo"
        titulo="Meus Certificados"
        descricao="Pesquise e clique em um certificado para ampliá-lo."
      />

      <CampoBusca
        valor={busca}
        aoAlterar={setBusca}
        placeholder="Pesquisar por certificado, escola ou data..."
      />

      {certificacoesFiltradas.length > 0 ? (
        <GridResponsivo>
          {certificacoesFiltradas.map((cert, i) => (
            <CartaoCertificado
              key={cert.titulo}
              certificado={cert}
              index={i}
              aoAbrir={() => setCertificadoSelecionado(cert)}
            />
          ))}
        </GridResponsivo>
      ) : (
        <p className="mt-6 text-center text-lg text-white/60">
          Nenhum certificado encontrado para "<strong>{busca}</strong>".
        </p>
      )}

      <ModalCertificado
        certificado={certificadoSelecionado}
        aoFechar={() => setCertificadoSelecionado(null)}
      />

      <BotaoVoltar />
    </section>
  );
}
