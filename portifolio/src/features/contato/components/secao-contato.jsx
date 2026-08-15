"use client";

import { X } from "lucide-react";
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
    <section className="flex min-h-screen items-center justify-center px-4 py-16 sm:px-6">
      <div className="w-full max-w-xl text-white">
        <header className="mb-8 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-white/35">Contato</p>
          <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">Vamos conversar?</h2>
          <p className="mt-3 text-sm text-white/45">
            Envie uma mensagem e responderei assim que possível.
          </p>
        </header>

        <FormularioContato
          formulario={formulario}
          carregando={carregando}
          atualizarCampo={atualizarCampo}
          aoEnviar={enviarFormulario}
        />
      </div>

      {aviso && (
        <div
          className={`fixed bottom-24 left-1/2 z-[60] flex w-[calc(100%-2rem)] max-w-md -translate-x-1/2 items-center gap-3 rounded-xl border px-4 py-3 text-sm shadow-lg ${
            aviso.tipo === "sucesso"
              ? "border-emerald-500/30 bg-emerald-950 text-emerald-100"
              : "border-red-500/30 bg-red-950 text-red-100"
          }`}
          role="status"
        >
          <p className="flex-1 text-left">{aviso.mensagem}</p>
          <button type="button" onClick={fecharAviso} aria-label="Fechar aviso">
            <X className="size-4" />
          </button>
        </div>
      )}
    </section>
  );
}
