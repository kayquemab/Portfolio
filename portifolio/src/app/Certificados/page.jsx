"use client";

import { motion, AnimatePresence } from "framer-motion";
import { House, Search, X } from "lucide-react";
import { FaLaptopCode } from "react-icons/fa6";
import { useState, useEffect } from "react";
import ResponsiveGrid from "@/components/common/ResponsiveGrid";

export default function Certificados() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [busca, setBusca] = useState("");

  const certificacoes = [
    {
      titulo: "Typescript [40 horas]",
      org: "Hora de Codar",
      data: "Emitido: Fev 2026",
    },
    {
      titulo: "Javascript do zero [10 horas]",
      org: "Trybe",
      data: "Emitido: Nov 2025",
      imagem: "certificados/Trybe/JavascriptDoZero.png",
    },
    {
      titulo: "Lógica de Programação [10 horas]",
      org: "Trybe",
      data: "Emitido: Nov 2025",
      imagem: "certificados/Trybe/LogicaDeProgramacao.png",
    },
    {
      titulo: "IA Generativa com AWS [10 horas]",
      org: "Trybe",
      data: "Emitido: Nov 2025",
    },
    {
      titulo: "Fundamentos de JavaScript",
      org: "GreatStack",
      data: "Emitido: Fev 2026",
      imagem: "certificados/GreatStack/FundamentosJavaScript.png",
    },
    {
      titulo: "Curso Intensivo de React Hooks",
      org: "GreatStack",
      data: "Emitido: Fev 2026",
      imagem: "certificados/GreatStack/ReactHooks.png",
    },
    {
      titulo: "E-Commerce Site",
      org: "GreatStack",
      data: "Emitido: Fev 2026",
    },
    {
      titulo: "YouTube Clone",
      org: "GreatStack",
      data: "Emitido: Fev 2026",
    },
    {
      titulo: "E-Commerce App",
      org: "GreatStack",
      data: "Emitido: Fev 2026",
    },
    {
      titulo: "Food Delivery App",
      org: "GreatStack",
      data: "Emitido: Fev 2026",
    },
  ];

  const buscaNormalizada = busca.toLowerCase().trim();

  const certificacoesFiltradas = certificacoes.filter((cert) => {
    const titulo = cert.titulo.toLowerCase();
    const org = cert.org.toLowerCase();
    const data = cert.data.toLowerCase();

    return (
      titulo.includes(buscaNormalizada) ||
      org.includes(buscaNormalizada) ||
      data.includes(buscaNormalizada)
    );
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.12,
        ease: "easeOut",
      },
    }),
  };

  useEffect(() => {
    function handleEsc(e) {
      if (e.key === "Escape") setSelectedCert(null);
    }

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section
      className="
        flex flex-col justify-center items-center
        px-4 sm:px-6 md:px-10 lg:px-0
        text-center
        pb-16 sm:pb-20 md:pb-24 lg:pb-32
        pt-16 sm:pt-20 md:pt-24 lg:pt-8
      "
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-white mb-8"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Meus Certificados
      </motion.h2>

      <motion.p
        className="text-gray-300 mb-8 text-center max-w-2xl mx-auto"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Clique em um certificado para ampliá-lo.
      </motion.p>

      <div className="relative mb-10 w-full max-w-md">
        <Search size={18} className="absolute left-3 top-3 text-white/60" />

        <input
          type="text"
          placeholder="Pesquisar por certificado, escola ou data..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className="
            w-full rounded-xl border border-white/10
            bg-neutral-900 py-2 pl-10 pr-4
            text-white placeholder-white/40
            focus:outline-none focus:ring-2 focus:ring-white/30
          "
        />
      </div>

      {certificacoesFiltradas.length > 0 ? (
        <ResponsiveGrid>
          {certificacoesFiltradas.map((cert, i) => (
            <motion.div
              key={cert.titulo}
              onClick={() => cert.imagem && setSelectedCert(cert)}
              className={[
                "bg-neutral-800 rounded-xl overflow-hidden text-left shadow-md",
                "flex flex-col",
                cert.imagem ? "cursor-pointer" : "cursor-default opacity-90",
              ].join(" ")}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              whileHover={
                cert.imagem
                  ? {
                    scale: 1.05,
                    transition: {
                      type: "spring",
                      stiffness: 200,
                      damping: 20,
                    },
                  }
                  : undefined
              }
            >
              <div className="h-[180px] w-full bg-neutral-700">
                {cert.imagem ? (
                  <img
                    src={cert.imagem}
                    alt={cert.titulo}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-gray-300">
                    <FaLaptopCode size={34} />
                    <span className="text-sm font-medium">Certificado</span>
                  </div>
                )}
              </div>

              <div className="flex gap-3 p-4 items-start">
                <div
                  className="
                    flex h-9 w-9 shrink-0 items-center justify-center
                    rounded-full bg-white/10
                  "
                >
                  <FaLaptopCode size={18} className="text-white" />
                </div>

                <div className="min-w-0 flex flex-col">
                  <p className="text-[13px] font-medium leading-snug text-white xl:text-sm">
                    {cert.titulo}
                  </p>

                  <p className="mt-1 text-xs text-gray-300 xl:text-sm">
                    {cert.org}
                  </p>

                  <p className="mt-3 w-fit rounded-full bg-white/10 px-3 py-1 text-[11px] text-gray-400">
                    {cert.data}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </ResponsiveGrid>
      ) : (
        <p className="mt-6 text-center text-lg text-white/60">
          Nenhum certificado encontrado para "<strong>{busca}</strong>".
        </p>
      )}

      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              className="relative max-w-5xl w-full"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 180, damping: 22 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute -top-4 -right-4 bg-neutral-900 text-white p-2 rounded-full hover:bg-neutral-800 transition cursor-pointer"
              >
                <X size={20} />
              </button>

              <img
                src={selectedCert.imagem}
                alt={selectedCert.titulo}
                className="w-full max-h-[85vh] object-contain rounded-xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href="/"
        className="mt-8 px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg shadow-md inline-block transition-none cursor-pointer"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 70, damping: 15, delay: 0.3 }}
        viewport={{ once: true }}
        whileHover={{
          scale: 1.12,
          y: -6,
          boxShadow: "0px 12px 25px rgba(0,0,0,0.35)",
        }}
        whileTap={{
          scale: 0.96,
          y: 0,
        }}
      >
        <span className="inline-flex items-center gap-2">
          <House size={16} />
          Voltar para Home
        </span>
      </motion.a>
    </section>
  );
}