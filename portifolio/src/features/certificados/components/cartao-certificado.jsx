"use client";

import { Award } from "lucide-react";

export default function CartaoCertificado({
  certificado,
  iconeInstituicao,
  aoAbrir,
}) {
  const imagem = certificado.imagem
    ? `/${certificado.imagem.replace(/^\/+/, "")}`
    : null;

  return (
    <button
      type="button"
      onClick={aoAbrir}
      className="group flex min-w-0 cursor-pointer flex-col items-center rounded-xl px-4 py-5 transition hover:bg-white/[0.07]"
    >
      <div className="flex h-24 w-36 items-center justify-center">
        {imagem ? (
          <img
            src={imagem}
            alt={certificado.titulo}
            className="max-h-24 max-w-36 rounded-md object-contain"
          />
        ) : iconeInstituicao ? (
          <img
            src={iconeInstituicao}
            alt=""
            className="size-14 object-contain"
          />
        ) : (
          <Award className="size-12 text-white/40" />
        )}
      </div>

      <p className="mt-3 line-clamp-2 text-center text-sm font-medium leading-5 text-white/90">
        {certificado.titulo}
      </p>

      <p className="mt-1 text-center text-xs text-white/40">
        {certificado.data}
      </p>
    </button>
  );
}