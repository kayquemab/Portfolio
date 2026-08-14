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
    setFormulario((atual) => ({ ...atual, [campo]: valor }));
  };

  const abrirAviso = (type, message) => {
    window.clearTimeout(temporizadorRef.current);
    setAviso({ open: true, type, message });
    temporizadorRef.current = window.setTimeout(
      () => setAviso((atual) => ({ ...atual, open: false })),
      3500,
    );
  };

  const fecharAviso = () => {
    window.clearTimeout(temporizadorRef.current);
    setAviso((atual) => ({ ...atual, open: false }));
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
