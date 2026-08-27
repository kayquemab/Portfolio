"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MonitorPlay, X } from "lucide-react";

import BotaoAcao from "@/shared/components/button/botao-acao";
import { buscarStacks } from "@/shared/data/stacks.data";

import IconeStack from "./icone-stack";

export default function ModalProjeto({ projeto, onClose }) {
  const nomeProjeto = projeto?.name?.replace(/^Projeto:\s*/i, "");
  const stacksProjeto = buscarStacks(projeto?.tecnologias || []);

  useEffect(() => {
    if (!projeto) {
      return;
    }

    function fecharComEscape(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", fecharComEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", fecharComEscape);
    };
  }, [projeto, onClose]);

  return (
    <AnimatePresence>
      {projeto && (
        <motion.div
          className="fixed inset-0 z-[70] overflow-y-auto bg-black/60 p-3 backdrop-blur-[2px] sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <div className="flex min-h-full items-center justify-center">
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="projeto-modal-title"
              className="w-full max-w-4xl rounded-3xl border border-white/10 bg-[#0b0d0b] p-5 text-left text-white shadow-2xl shadow-black/50 sm:p-7"
              initial={{
                opacity: 0,
                y: 20,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 16,
                scale: 0.98,
              }}
              transition={{ duration: 0.2 }}
              onClick={(event) => event.stopPropagation()}
            >
              <header className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                    Projeto selecionado
                  </p>

                  <h3
                    id="projeto-modal-title"
                    className="mt-2 text-xl font-semibold sm:text-2xl"
                  >
                    {nomeProjeto}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Fechar modal"
                  className="flex size-9 cursor-pointer items-center justify-center rounded-full bg-white/[0.04] text-white/55 transition hover:bg-white/[0.07] hover:text-white"
                >
                  <X className="size-[18px]" />
                </button>
              </header>

              <div className="grid gap-7 md:grid-cols-[1.5fr_1fr]">
                <div>
                  {projeto.video ? (
                    <div className="aspect-video overflow-hidden rounded-2xl bg-[#111411]">
                      <video
                        src={projeto.video}
                        controls
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="flex aspect-video items-center justify-center rounded-2xl bg-white/[0.04]">
                      <div className="flex flex-col items-center gap-2 text-white/35">
                        <MonitorPlay className="size-9" />

                        <span className="text-sm">
                          Preview indisponível
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="mt-4 flex flex-wrap gap-2">
                    {projeto.site && (
                      <BotaoAcao
                        href={projeto.site}
                        externo
                      >
                        Ver projeto
                      </BotaoAcao>
                    )}

                    {projeto.github && (
                      <BotaoAcao
                        href={projeto.github}
                        externo
                        variante="escuro"
                      >
                        GitHub
                      </BotaoAcao>
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  <section className="border-b border-white/[0.07] pb-6">
                    <h4 className="text-xs font-medium uppercase tracking-[0.16em] text-white/35">
                      Stacks
                    </h4>

                    {stacksProjeto.length > 0 ? (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {stacksProjeto.map((stack) => (
                          <div
                            key={stack.nome}
                            title={stack.nome}
                            aria-label={stack.nome}
                            className="flex size-11 items-center justify-center rounded-xl bg-white/[0.04] text-white/75"
                          >
                            <IconeStack
                              nome={stack.nome}
                              className="size-6"
                            />
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="mt-3 text-sm text-white/35">
                        Nenhuma tecnologia informada.
                      </p>
                    )}
                  </section>

                  <section>
                    <h4 className="text-xs font-medium uppercase tracking-[0.16em] text-white/35">
                      Sobre o projeto
                    </h4>

                    <p className="mt-4 text-sm leading-7 text-white/55">
                      {projeto.descricaoDetalhada ||
                        projeto.descricao}
                    </p>
                  </section>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
