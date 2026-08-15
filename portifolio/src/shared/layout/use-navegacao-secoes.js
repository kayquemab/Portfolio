"use client";

import { useEffect, useState } from "react";

export function useNavegacaoSecoes(ids) {
  const [secaoAtiva, setSecaoAtiva] = useState(ids[0]);

  useEffect(() => {
    const secoes = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const atualizarSecaoAtiva = () => {
      const pontoDeReferencia = window.innerHeight * 0.45;
      let secaoAtual;

      for (let indice = secoes.length - 1; indice >= 0; indice -= 1) {
        const secao = secoes[indice];

        if (secao.getBoundingClientRect().top <= pontoDeReferencia) {
          secaoAtual = secao;
          break;
        }
      }

      setSecaoAtiva(secaoAtual?.id ?? secoes[0]?.id ?? ids[0]);
    };

    atualizarSecaoAtiva();
    window.addEventListener("scroll", atualizarSecaoAtiva, { passive: true });
    window.addEventListener("resize", atualizarSecaoAtiva);

    return () => {
      window.removeEventListener("scroll", atualizarSecaoAtiva);
      window.removeEventListener("resize", atualizarSecaoAtiva);
    };
  }, [ids]);

  const navegarPara = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setSecaoAtiva(id);
  };

  return { navegarPara, secaoAtiva };
}
