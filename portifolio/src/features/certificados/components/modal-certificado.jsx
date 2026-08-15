"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

export default function ModalCertificado({
  certificado,
  aoFechar,
}) {
  useEffect(() => {
    if (!certificado) return undefined;

    function fecharComEsc(event) {
      if (event.key === "Escape") {
        aoFechar();
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", fecharComEsc);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", fecharComEsc);
    };
  }, [certificado, aoFechar]);

  return (
    <AnimatePresence>
      {certificado && (
        <motion.div
          className="fixed inset-0 z-50 overflow-y-auto bg-black/80 p-3 backdrop-blur-sm sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={aoFechar}
        >
          <div className="flex min-h-full items-center justify-center">
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="certificado-modal-title"
              className="w-full max-w-5xl rounded-3xl border border-white/10 bg-neutral-950 p-5 text-left text-white shadow-2xl shadow-black/50 sm:p-7"
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
                    Certificado selecionado
                  </p>

                  <h3
                    id="certificado-modal-title"
                    className="mt-2 text-xl font-semibold sm:text-2xl"
                  >
                    {certificado.titulo}
                  </h3>

                  <p className="mt-2 text-sm text-white/45">
                    {certificado.org} • {certificado.data}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={aoFechar}
                  aria-label="Fechar modal"
                  className="flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-full bg-white/[0.04] text-white/45 transition hover:bg-white/10 hover:text-white"
                >
                  <X className="size-[18px]" />
                </button>
              </header>

              <div className="overflow-hidden rounded-2xl bg-white/[0.025]">
                {certificado.imagem ? (
                  <img
                    src={certificado.imagem}
                    alt={certificado.titulo}
                    className="max-h-[75vh] w-full object-contain"
                  />
                ) : (
                  <div className="flex min-h-64 items-center justify-center">
                    <p className="text-sm text-white/35">
                      Imagem do certificado indisponível.
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}