"use client";

import { X } from "lucide-react";

import CabecalhoSecao from "@/shared/components/layout/cabecalho-secao";
import SecaoPadrao from "@/shared/components/layout/secao-padrao";

import FormularioContato from "./formulario-contato";
import { useFormularioContato } from "../hooks/use-formulario-contato";

export default function SecaoContato() {
  const {
    formulario,
    carregando,
    aviso,
    atualizarCampo,
    enviarFormulario,
    fecharAviso,
  } = useFormularioContato();

  return (
    <SecaoPadrao>
      <CabecalhoSecao
        rotulo="Contato"
        titulo="Vamos conversar?"
        descricao="Envie uma mensagem e responderei assim que possível."
      />

      <div className="w-full max-w-xl text-white">
        <FormularioContato
          formulario={formulario}
          carregando={carregando}
          atualizarCampo={atualizarCampo}
          aoEnviar={enviarFormulario}
        />
      </div>

      {aviso && (
        <div
          className={`fixed bottom-24 left-1/2 z-[60] flex w-[calc(100%-2rem)] max-w-md -translate-x-1/2 items-center gap-3 rounded-xl border px-4 py-3 text-sm shadow-lg ${aviso.tipo === "sucesso"
              ? "border-emerald-500/30 bg-emerald-950 text-emerald-100"
              : "border-red-500/30 bg-red-950 text-red-100"
            }`}
          role="status"
        >
          <p className="flex-1 text-left">{aviso.mensagem}</p>

          <button
            type="button"
            onClick={fecharAviso}
            aria-label="Fechar aviso"
          >
            <X className="size-4" />
          </button>
        </div>
      )}
    </SecaoPadrao>
  );
}