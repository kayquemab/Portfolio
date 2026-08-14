"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

export default function ModalCertificado({ certificado, aoFechar }) {
  useEffect(() => {
    if (!certificado) return undefined;

    const fecharComEsc = (event) => {
      if (event.key === "Escape") aoFechar();
    };

    window.addEventListener("keydown", fecharComEsc);
    return () => window.removeEventListener("keydown", fecharComEsc);
  }, [certificado, aoFechar]);

  return (
    <AnimatePresence>
      {certificado && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={aoFechar}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={certificado.titulo}
            className="relative w-full max-w-5xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={aoFechar}
              aria-label="Fechar"
              className="absolute -right-3 -top-3 flex size-10 cursor-pointer items-center justify-center rounded-full bg-neutral-900 text-white transition hover:bg-neutral-800"
            >
              <X size={20} />
            </button>
            <img
              src={certificado.imagem}
              alt={certificado.titulo}
              className="max-h-[85vh] w-full rounded-xl object-contain"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
