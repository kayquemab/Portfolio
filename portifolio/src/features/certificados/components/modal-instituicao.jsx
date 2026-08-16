"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

import CartaoCertificado from "./cartao-certificado";

export default function ModalInstituicao({
    instituicao,
    aoFechar,
    aoAbrirCertificado,
}) {
    useEffect(() => {
        if (!instituicao) {
            return;
        }

        const overflowAnterior = document.body.style.overflow;

        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = overflowAnterior;
        };
    }, [instituicao]);

    const icone = instituicao?.icone
        ? `/${instituicao.icone.replace(/^\/+/, "")}`
        : null;

    return (
        <AnimatePresence>
            {instituicao && (
                <motion.div
                    className="fixed inset-0 z-40 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.18 }}
                    onClick={aoFechar}
                >
                    <motion.div
                        className="flex max-h-[85vh] min-h-[420px] w-full max-w-5xl flex-col rounded-2xl border border-white/10 bg-neutral-900 p-8 shadow-2xl"
                        initial={{
                            opacity: 0,
                            y: 12,
                            scale: 0.98,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                        }}
                        exit={{
                            opacity: 0,
                            y: 8,
                            scale: 0.98,
                        }}
                        transition={{
                            duration: 0.18,
                            ease: "easeOut",
                        }}
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div className="relative mb-8 flex shrink-0 items-center justify-center">
                            <div className="flex items-center gap-3">


                                <h2 className="text-xl font-semibold text-white">
                                    {instituicao.instituicao}
                                </h2>
                            </div>

                            <button
                                type="button"
                                onClick={aoFechar}
                                className="absolute right-0 flex size-9 cursor-pointer items-center justify-center rounded-lg text-white/50 transition hover:bg-white/10 hover:text-white"
                                aria-label="Fechar"
                            >
                                <X className="size-5" />
                            </button>
                        </div>

                        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain pr-2">
                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                                {instituicao.certificados.map((certificado) => (
                                    <CartaoCertificado
                                        key={certificado.titulo}
                                        certificado={certificado}
                                        iconeInstituicao={icone}
                                        aoAbrir={() => aoAbrirCertificado(certificado)}
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}