"use client";

import { useState } from "react";

import { certificados } from "../data/certificados.data";
import { filtrarCertificados } from "../utils/filtrar-certificados";

export function useCertificados() {
  const [busca, setBusca] = useState("");
  const [instituicaoSelecionada, setInstituicaoSelecionada] = useState(null);
  const [certificadoSelecionado, setCertificadoSelecionado] = useState(null);

  function fecharInstituicao() {
    setInstituicaoSelecionada(null);
    setCertificadoSelecionado(null);
  }

  return {
    busca,
    certificacoesFiltradas: filtrarCertificados(certificados, busca),
    instituicaoSelecionada,
    certificadoSelecionado,
    selecionarInstituicao: setInstituicaoSelecionada,
    selecionarCertificado: setCertificadoSelecionado,
    fecharInstituicao,
    setBusca,
  };
}