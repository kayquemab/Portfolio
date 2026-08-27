"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

const larguraItens = {
  padrao: "2.9rem",
  distante: "3.05rem",
  vizinho: "3.35rem",
  ativo: "3.8rem",
};

function buscarLarguraItem(index, indexAtivo) {
  if (indexAtivo === null) {
    return larguraItens.padrao;
  }

  const distancia = Math.abs(index - indexAtivo);

  if (distancia === 0) {
    return larguraItens.ativo;
  }

  if (distancia === 1) {
    return larguraItens.vizinho;
  }

  if (distancia === 2) {
    return larguraItens.distante;
  }

  return larguraItens.padrao;
}

export default function DockHover({
  itens,
  buscarChave,
  renderizarItem,
  duracao = 0.42,
  className = "",
}) {
  const [indexAtivo, setIndexAtivo] = useState(null);
  const reduzirMovimento = useReducedMotion();

  const transicao = reduzirMovimento
    ? { duration: 0 }
    : { duration: duracao, ease: [0.16, 1, 0.3, 1] };

  return (
    <ul
      className={`mb-0 flex list-none flex-row items-end justify-center p-0 text-sm ${className}`}
    >
      {itens.map((item, index) => {
        const sobCursor = indexAtivo === index;

        return (
          <motion.li
            key={buscarChave(item, index)}
            className="relative flex items-center justify-center"
            initial={false}
            animate={{ width: buscarLarguraItem(index, indexAtivo) }}
            transition={transicao}
            onMouseEnter={() => setIndexAtivo(index)}
            onMouseLeave={() => setIndexAtivo(null)}
          >
            {renderizarItem(item, index, sobCursor)}

            <motion.div
              className="pointer-events-none absolute top-0 z-0 whitespace-nowrap rounded-md border border-white/10 bg-[#111411] px-2.5 py-1.5 text-[11px] font-normal text-white shadow-xl"
              initial={false}
              animate={{
                opacity: sobCursor ? 1 : 0,
                y: sobCursor ? "-140%" : "-80%",
              }}
              transition={transicao}
            >
              <div>{item.label}</div>
            </motion.div>
          </motion.li>
        );
      })}
    </ul>
  );
}
