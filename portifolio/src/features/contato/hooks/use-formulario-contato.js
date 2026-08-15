"use client";

import { useState } from "react";
import { enviarContatoUseCaseClient } from "../use-cases/enviar-contato.use-case.client";

const formularioVazio = {
  nome: "",
  email: "",
  mensagem: "",
  tiposProjeto: [],
};

export function useFormularioContato() {
  const [formulario, setFormulario] = useState(formularioVazio);
  const [carregando, setCarregando] = useState(false);
  const [aviso, setAviso] = useState(null);

  function atualizarCampo(campo, valor) {
    setFormulario((formularioAtual) => ({
      nome: campo === "nome" ? valor : formularioAtual.nome,
      email: campo === "email" ? valor : formularioAtual.email,
      mensagem: campo === "mensagem" ? valor : formularioAtual.mensagem,
      tiposProjeto:
        campo === "tiposProjeto" ? valor : formularioAtual.tiposProjeto,
    }));
  }

  async function enviarFormulario(event) {
    event.preventDefault();

    if (carregando) return;

    setCarregando(true);
    setAviso(null);

    try {
      await enviarContatoUseCaseClient(formulario);
      setFormulario(formularioVazio);
      setAviso({ tipo: "sucesso", mensagem: "Enviado com sucesso." });
    } catch (error) {
      setAviso({
        tipo: "erro",
        mensagem: error.message || "Erro de conexão. Tente novamente.",
      });
    } finally {
      setCarregando(false);
    }
  }

  function fecharAviso() {
    setAviso(null);
  }

  return {
    formulario,
    carregando,
    aviso,
    atualizarCampo,
    enviarFormulario,
    fecharAviso,
  };
}
