"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Github, MonitorPlay, X } from "lucide-react";
import StackIcon from "./StackIcon";

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
                    className="fixed inset-0 z-50 overflow-y-auto bg-black/80 p-3 backdrop-blur-sm sm:p-4"
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
                            className="w-full max-w-6xl rounded-2xl bg-neutral-950 text-left text-white shadow-2xl lg:overflow-hidden"
                            initial={{ opacity: 0, y: 20, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 16, scale: 0.98 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            onClick={(event) => event.stopPropagation()}
                        >
                            <header className="flex items-start justify-between gap-4 px-4 py-4 sm:px-5 md:px-6 md:py-5">
                                <div className="text-left">
                                    <span className="block text-xs text-slate-400 sm:text-sm">
                                        Detalhes do projeto
                                    </span>

                                    <h3
                                        id="projeto-modal-title"
                                        className="mt-1 text-xl font-semibold text-white sm:text-2xl lg:text-3xl"
                                    >
                                        Projeto:{" "}
                                        <span className="text-slate-300">
                                            {nomeProjeto}
                                        </span>
                                    </h3>
                                </div>

                                <button
                                    type="button"
                                    onClick={onClose}
                                    aria-label="Fechar modal"
                                    className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-lg text-slate-400 transition hover:bg-white/10 hover:text-white sm:h-10 sm:w-10"
                                >
                                    <X size={20} />
                                </button>
                            </header>

                            <div className="grid gap-4 px-4 pb-4 sm:px-5 md:grid-cols-5 md:px-6 md:pb-6 lg:gap-5">
                                <div className="flex flex-col gap-3 md:col-span-3 lg:gap-4">
                                    {projeto.video ? (
                                        <div className="h-44 overflow-hidden rounded-xl bg-neutral-900 sm:h-56 md:h-72 lg:h-96">
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
                                        <div className="flex h-44 items-center justify-center rounded-xl bg-neutral-900 sm:h-56 md:h-72 lg:h-96">
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
                                            <a
                                                href={projeto.site}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="
                                                    inline-flex cursor-pointer items-center justify-center gap-2
                                                    rounded-md border border-white/10 bg-white px-3 py-2
                                                    text-xs font-medium text-black
                                                    transition hover:bg-slate-200
                                                    md:px-4
                                                "
                                            >
                                                <ExternalLink size={14} />
                                                Ver projeto
                                            </a>
                                        )}

                                        {projeto.github && (
                                            <a
                                                href={projeto.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="
                                                    inline-flex cursor-pointer items-center justify-center gap-2
                                                    rounded-md border border-white/10 px-3 py-2
                                                    text-xs font-medium text-slate-300
                                                    transition hover:bg-white/10 hover:text-white
                                                    md:px-4
                                                "
                                            >
                                                <Github size={14} />
                                                GitHub
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <div className="flex flex-col gap-4 md:col-span-2">
                                    <section className="rounded-xl bg-white/5 p-4 sm:p-5">
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
                                                        className="flex h-14 items-center justify-center rounded-lg bg-neutral-900 text-white transition hover:bg-white/10"
                                                    >
                                                        <StackIcon
                                                            name={tecnologia}
                                                            className="h-10 w-10 shrink-0 text-white"
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            <p className="mt-4 text-sm text-slate-500">
                                                Nenhuma tecnologia informada.
                                            </p>
                                        )}
                                    </section>

                                    <section className="rounded-xl bg-white/5 p-4 sm:p-5">
                                        <h4 className="text-sm font-semibold text-white">
                                            Descrição
                                        </h4>

                                        <div className="mt-2 h-0.5 w-16 bg-slate-500 sm:w-20" />

                                        <p className="mt-4 text-sm text-slate-300">
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