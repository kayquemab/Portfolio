"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MonitorPlay, X } from "lucide-react";
import IconeStack from "./icone-stack";
import BotaoAcao from "@/shared/components/button/botao-acao";

export default function ProjetoModal({ projeto, onClose }) {
    const nomeProjeto = projeto?.name?.replace(/^Projeto:\s*/i, "");

    useEffect(() => {
        if (!projeto) return;

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [projeto, onClose]);

    return (
        <AnimatePresence>
            {projeto && (
                <motion.div
                    className="fixed inset-0 z-50 overflow-y-auto bg-black/85 p-3 backdrop-blur-md sm:p-5"
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
                            className="w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-neutral-950 text-left text-white shadow-2xl shadow-black/50"
                            initial={{ opacity: 0, y: 20, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 16, scale: 0.98 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            onClick={(event) => event.stopPropagation()}
                        >
                            <header className="flex items-start justify-between gap-4 border-b border-white/[0.07] px-4 py-4 sm:px-6 sm:py-5">
                                <div className="text-left">
                                    <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35">
                                        Projeto selecionado
                                    </span>

                                    <h3
                                        id="projeto-modal-title"
                                        className="mt-2 text-xl font-semibold text-white sm:text-2xl"
                                    >
                                        Projeto:{" "}
                                        <span className="text-neutral-300">
                                            {nomeProjeto}
                                        </span>
                                    </h3>
                                </div>

                                <button
                                    type="button"
                                    onClick={onClose}
                                    aria-label="Fechar modal"
                                    className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full border border-white/10 text-neutral-400 transition hover:bg-white hover:text-neutral-950 sm:h-10 sm:w-10"
                                >
                                    <X size={20} />
                                </button>
                            </header>

                            <div className="grid gap-4 p-4 sm:p-6 md:grid-cols-5 lg:gap-5">
                                <div className="flex flex-col gap-3 md:col-span-3 lg:gap-4">
                                    {projeto.video ? (
                                        <div className="h-44 overflow-hidden rounded-xl border border-white/[0.07] bg-neutral-900 sm:h-56 md:h-72 lg:h-80">
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
                                        <div className="flex h-44 items-center justify-center rounded-xl border border-white/[0.07] bg-neutral-900 sm:h-56 md:h-72 lg:h-80">
                                            <div className="flex flex-col items-center gap-3 text-white/40">
                                                <MonitorPlay size={42} />

                                                <span className="text-sm">
                                                    Preview indisponível
                                                </span>
                                            </div>
                                        </div>
                                    )}

                                    <div className="grid grid-cols-2 gap-2 md:flex md:items-center">
                                        {projeto.site && (
                                            <BotaoAcao
                                                href={projeto.site}
                                                externo
                                                className="min-h-10 px-3 text-xs md:px-4"
                                            >
                                                Ver projeto
                                            </BotaoAcao>
                                        )}

                                        {projeto.github && (
                                            <BotaoAcao
                                                href={projeto.github}
                                                externo
                                                variante="escuro"
                                                className="min-h-10 px-3 text-xs md:px-4"
                                            >
                                                GitHub
                                            </BotaoAcao>
                                        )}
                                    </div>
                                </div>

                                <div className="flex flex-col gap-4 md:col-span-2">
                                    <section className="rounded-xl border border-white/[0.07] bg-neutral-900/60 p-4 sm:p-5">
                                        <h4 className="text-sm font-semibold text-white">
                                            Stacks
                                        </h4>

                                        {projeto.tecnologias?.length > 0 ? (
                                            <div className="mt-4 grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4">
                                                {projeto.tecnologias.map((tecnologia) => (
                                                    <div
                                                        key={tecnologia}
                                                        title={tecnologia}
                                                        aria-label={tecnologia}
                                                        className="flex h-14 items-center justify-center rounded-lg border border-white/[0.06] bg-neutral-950 text-white transition hover:bg-white/10"
                                                    >
                                                        <IconeStack
                                                            name={tecnologia}
                                                            className="h-10 w-10 shrink-0 text-white"
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            <p className="mt-4 text-sm text-neutral-500">
                                                Nenhuma tecnologia informada.
                                            </p>
                                        )}
                                    </section>

                                    <section className="rounded-xl border border-white/[0.07] bg-neutral-900/60 p-4 sm:p-5">
                                        <h4 className="text-sm font-semibold text-white">
                                            Descrição
                                        </h4>

                                        <div className="mt-2 h-px w-16 bg-white/20 sm:w-20" />

                                        <p className="mt-4 text-sm leading-6 text-neutral-300">
                                            {projeto.descricaoDetalhada || projeto.descricao}
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
