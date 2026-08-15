"use client";

import { useState } from "react";
import { certificados } from "../data/certificados.data";
import { filtrarCertificados } from "../utils/filtrar-certificados";

export function useCertificados() {
  const [busca, setBusca] = useState("");
  const [certificadoSelecionado, setCertificadoSelecionado] = useState(null);
  return {
    busca,
    certificacoesFiltradas: filtrarCertificados(certificados, busca),
    certificadoSelecionado,
    selecionarCertificado: setCertificadoSelecionado,
    setBusca,
  };
}
