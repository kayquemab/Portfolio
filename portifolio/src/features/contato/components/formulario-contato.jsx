"use client";

import { Check, Loader2, Send } from "lucide-react";

const tiposProjeto = [
  "Site",
  "Aplicação web",
  "Aplicativo mobile",
  "E-commerce",
  "API / Backend",
  "Outro",
];

const estiloCampo =
  "w-full rounded-xl border border-white/10 bg-white/[0.025] px-4 py-3 text-sm text-white outline-none placeholder:text-white/25 focus:border-white/30";

export default function FormularioContato({
  formulario,
  carregando,
  atualizarCampo,
  aoEnviar,
}) {
  function selecionarTipo(tipo) {
    let novosTipos;

    if (formulario.tiposProjeto.includes(tipo)) {
      novosTipos = formulario.tiposProjeto.filter((item) => item !== tipo);
    } else {
      novosTipos = formulario.tiposProjeto.concat(tipo);
    }

    atualizarCampo("tiposProjeto", novosTipos);
  }

  return (
    <form onSubmit={aoEnviar} className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-left">
          <span className="text-xs text-white/55">Seu nome</span>
          <input
            type="text"
            value={formulario.nome}
            onChange={(event) => atualizarCampo("nome", event.target.value)}
            placeholder="Como posso chamar você?"
            className={estiloCampo}
            required
          />
        </label>

        <label className="space-y-2 text-left">
          <span className="text-xs text-white/55">Seu e-mail</span>
          <input
            type="email"
            value={formulario.email}
            onChange={(event) => atualizarCampo("email", event.target.value)}
            placeholder="voce@email.com"
            className={estiloCampo}
            required
          />
        </label>
      </div>

      <label className="space-y-2 text-left">
        <span className="text-xs text-white/55">Sua mensagem</span>
        <textarea
          value={formulario.mensagem}
          onChange={(event) => atualizarCampo("mensagem", event.target.value)}
          placeholder="Conte um pouco sobre sua ideia ou oportunidade..."
          className={`${estiloCampo} min-h-28 resize-none`}
          required
        />
      </label>

      <div className="space-y-3 text-left">
        <p className="text-xs text-white/45">Estou procurando por</p>

        <div className="flex flex-wrap gap-2">
          {tiposProjeto.map((tipo) => {
            const selecionado = formulario.tiposProjeto.includes(tipo);

            return (
              <button
                key={tipo}
                type="button"
                onClick={() => selecionarTipo(tipo)}
                className={`flex min-h-9 cursor-pointer items-center gap-2 rounded-full border px-3.5 text-xs transition ${
                  selecionado
                    ? "border-white bg-white text-neutral-950"
                    : "border-white/10 text-white/50 hover:border-white/20 hover:text-white"
                }`}
              >
                {selecionado && <Check className="size-3.5" />}
                {tipo}
              </button>
            );
          })}
        </div>
      </div>

      <button
        type="submit"
        disabled={carregando}
        className="flex min-h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-white px-5 text-sm font-semibold text-neutral-950 hover:bg-neutral-200 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {carregando ? (
          <Loader2 className="size-4 animate-spin" />
        ) : (
          <Send className="size-4" />
        )}
        {carregando ? "Enviando..." : "Enviar mensagem"}
      </button>
    </form>
  );
}
