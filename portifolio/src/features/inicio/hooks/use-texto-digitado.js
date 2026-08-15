"use client";

import { useEffect, useState } from "react";

export function useTextoDigitado(frases) {
  const [indiceFrase, setIndiceFrase] = useState(0);
  const [indiceCaractere, setIndiceCaractere] = useState(0);
  const fraseAtual = frases[indiceFrase];

  useEffect(() => {
    const terminou = indiceCaractere >= fraseAtual.length;
    const temporizador = setTimeout(
      () => {
        if (!terminou) {
          setIndiceCaractere((indice) => indice + 1);
          return;
        }

        setIndiceFrase((indiceAtual) => {
          let proximoIndice = indiceAtual;
          while (proximoIndice === indiceAtual) {
            proximoIndice = Math.floor(Math.random() * frases.length);
          }
          return proximoIndice;
        });
        setIndiceCaractere(0);
      },
      terminou ? 1200 : 55,
    );

    return () => clearTimeout(temporizador);
  }, [fraseAtual, frases, indiceCaractere]);

  return fraseAtual.slice(0, indiceCaractere);
}
