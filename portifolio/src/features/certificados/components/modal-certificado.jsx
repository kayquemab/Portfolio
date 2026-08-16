"use client";

import { useEffect } from "react";
import { Award, X } from "lucide-react";

export default function ModalCertificado({
  certificado,
  instituicao,
  aoFechar,
}) {
  useEffect(() => {
    if (!certificado) {
      return;
    }

    const overflowAnterior = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    function fecharComEsc(event) {
      if (event.key === "Escape") {
        aoFechar();
      }
    }

    document.addEventListener("keydown", fecharComEsc);

    return () => {
      document.body.style.overflow = overflowAnterior;
      document.removeEventListener("keydown", fecharComEsc);
    };
  }, [certificado, aoFechar]);

  if (!certificado) {
    return null;
  }

  const imagem = certificado.imagem
    ? `/${certificado.imagem.replace(/^\/+/, "")}`
    : null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto overscroll-contain bg-black/80 p-4 backdrop-blur-sm"
      onClick={aoFechar}
    >
      <div className="flex min-h-full items-center justify-center">
        <div
          className="w-full max-w-4xl rounded-2xl border border-white/10 bg-neutral-950 p-5"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="mb-5 flex items-start justify-between gap-4 text-left">
            <div>
              <h2 className="text-lg font-semibold text-white">
                {certificado.titulo}
              </h2>

              <p className="mt-1 text-sm text-white/40">
                {instituicao} • {certificado.data}
              </p>
            </div>

            <button
              type="button"
              onClick={aoFechar}
              className="flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-lg text-white/50 transition hover:bg-white/10 hover:text-white"
              aria-label="Fechar"
            >
              <X className="size-4" />
            </button>
          </div>

          <div className="flex min-h-64 items-center justify-center">
            {imagem ? (
              <img
                src={imagem}
                alt={certificado.titulo}
                className="max-h-[75vh] max-w-full rounded-lg object-contain"
              />
            ) : (
              <div className="flex flex-col items-center gap-3 py-16 text-white/30">
                <Award className="size-12" />

                <p className="text-sm">
                  Imagem do certificado indisponível.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}