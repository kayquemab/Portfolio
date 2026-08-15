"use client";

import { useEffect, useRef, useState } from "react";
import { enviarContatoUseCaseClient } from "../use-cases/enviar-contato.use-case.client";

const formularioInicial = { nome: "", email: "", mensagem: "" };
const avisoInicial = { open: false, type: "success", message: "" };

export function useFormularioContato() {
  const [formulario, setFormulario] = useState(formularioInicial);
  const [carregando, setCarregando] = useState(false);
  const [aviso, setAviso] = useState(avisoInicial);
  const temporizadorRef = useRef(null);

  useEffect(() => () => window.clearTimeout(temporizadorRef.current), []);

  const atualizarCampo = (campo, valor) => {
    setFormulario((atual) => ({
      nome: campo === "nome" ? valor : atual.nome,
      email: campo === "email" ? valor : atual.email,
      mensagem: campo === "mensagem" ? valor : atual.mensagem,
    }));
  };

  const abrirAviso = (type, message) => {
    window.clearTimeout(temporizadorRef.current);
    setAviso({ open: true, type, message });
    temporizadorRef.current = window.setTimeout(
      () =>
        setAviso((atual) => ({
          open: false,
          type: atual.type,
          message: atual.message,
        })),
      3500,
    );
  };

  const fecharAviso = () => {
    window.clearTimeout(temporizadorRef.current);
    setAviso((atual) => ({
      open: false,
      type: atual.type,
      message: atual.message,
    }));
  };

  const enviarFormulario = async (event) => {
    event.preventDefault();
    if (carregando) return;

    setCarregando(true);

    try {
      await enviarContatoUseCaseClient(formulario);
      setFormulario(formularioInicial);
      abrirAviso("success", "Enviado com sucesso.");
    } catch (error) {
      abrirAviso("error", error.message || "Erro de conexão. Tente novamente.");
    } finally {
      setCarregando(false);
    }
  };

  return {
    formulario,
    carregando,
    aviso,
    atualizarCampo,
    enviarFormulario,
    fecharAviso,
  };
}
