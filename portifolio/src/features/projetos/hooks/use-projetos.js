"use client";

import { useState } from "react";
import { projetos } from "../data/projetos.data";
import { filtrarProjetos } from "../utils/filtrar-projetos";

export function useProjetos() {
  const [busca, setBusca] = useState("");
  const [projetoSelecionado, setProjetoSelecionado] = useState(null);
  return {
    busca,
    projetosFiltrados: filtrarProjetos(projetos, busca),
    projetoSelecionado,
    selecionarProjeto: setProjetoSelecionado,
    setBusca,
  };
}
