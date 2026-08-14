"use client";

import { motion } from "framer-motion";
import { FaLaptopCode } from "react-icons/fa6";

const variantes = {
  hidden: { opacity: 0, y: 20 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.08, duration: 0.4 },
  }),
};

export default function CartaoCertificado({ certificado, index, aoAbrir }) {
  const possuiImagem = Boolean(certificado.imagem);

  return (
    <motion.article
      role={possuiImagem ? "button" : undefined}
      tabIndex={possuiImagem ? 0 : undefined}
      aria-label={possuiImagem ? `Ampliar ${certificado.titulo}` : undefined}
      onClick={possuiImagem ? aoAbrir : undefined}
      onKeyDown={(event) => {
        if (possuiImagem && (event.key === "Enter" || event.key === " ")) {
          event.preventDefault();
          aoAbrir();
        }
      }}
      className={[
        "flex flex-col overflow-hidden rounded-xl bg-neutral-800 text-left shadow-md",
        possuiImagem ? "cursor-pointer" : "cursor-default opacity-90",
      ].join(" ")}
      variants={variantes}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index}
      whileHover={possuiImagem ? { y: -5 } : undefined}
    >
      <div className="h-[180px] w-full bg-neutral-700">
        {possuiImagem ? (
          <img
            src={certificado.imagem}
            alt={certificado.titulo}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-3 text-gray-300">
            <FaLaptopCode size={34} />
            <span className="text-sm font-medium">Certificado</span>
          </div>
        )}
      </div>

      <div className="flex items-start gap-3 p-4">
        <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/10">
          <FaLaptopCode size={18} className="text-white" />
        </span>
        <div className="min-w-0">
          <h3 className="text-[13px] font-medium leading-snug text-white xl:text-sm">
            {certificado.titulo}
          </h3>
          <p className="mt-1 text-xs text-gray-300 xl:text-sm">
            {certificado.org}
          </p>
          <p className="mt-3 w-fit rounded-full bg-white/10 px-3 py-1 text-[11px] text-gray-400">
            {certificado.data}
          </p>
        </div>
      </div>
    </motion.article>
  );
}
