"use client";

import { motion, AnimatePresence } from "framer-motion";
import { House, X } from "lucide-react";
import { FaLaptopCode } from "react-icons/fa6";
import { useState, useEffect } from "react";

export default function Certificados() {
  const [selectedCert, setSelectedCert] = useState(null);

  const certificacoes = [
    {
      titulo: "Algoritmo [40 Horas]",
      org: "Curso em Vídeo",
      data: "Emitido: Dez 2024",
      imagem: "/certificados/algoritmo.png",
    },
    {
      titulo: "HTML5 [40 Horas]",
      org: "Curso em Vídeo",
      data: "Emitido: Jun 2025",
      imagem: "/certificados/html5.png",
    },
    {
      titulo: "Javascript [40 Horas]",
      org: "Curso em Vídeo",
      data: "Emitido: Set 2025",
      imagem: "/certificados/javascript-40h.png",
    },
    {
      titulo: "Git e GitHub [20 Horas]",
      org: "Curso em Vídeo",
      data: "Emitido: Fev 2025",
      imagem: "/certificados/git-github.png",
    },
    {
      titulo: "Javascript do zero [10 horas]",
      org: "Trybe",
      data: "Emitido: Nov 2025",
      imagem: "/certificados/banner_javascript_do_zero_trybe.png",
    },
    {
      titulo: "Lógica de Programação [10 horas]",
      org: "Trybe",
      data: "Emitido: Nov 2025",
      imagem: "/certificados/banner_logica_de_programacao_trybe.png",
    },
  ];

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

  // Fecha modal com ESC
  useEffect(() => {
    function handleEsc(e) {
      if (e.key === "Escape") setSelectedCert(null);
    }
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section className="min-h-screen px-6 sm:px-10 md:px-16 py-24 text-center">

      {/* Título */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-white mb-8"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Meus Certificados
      </motion.h2>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificacoes.map((cert, i) => (
          <motion.div
            key={cert.titulo}
            onClick={() => setSelectedCert(cert)}
            className="bg-neutral-800 rounded-xl overflow-hidden text-left shadow-md flex flex-col cursor-pointer"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            whileHover={{
              scale: 1.05,
              transition: {
                type: "spring",
                stiffness: 200,
                damping: 20,
              },
            }}
          >
            {/* Banner */}
            <div className="w-full h-[180px] bg-neutral-700">
              <img
                src={cert.imagem}
                alt={cert.titulo}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Conteúdo */}
            <div className="p-5 flex gap-4 items-start">
              <FaLaptopCode size={24} className="text-white shrink-0 mt-1" />
              <div>
                <p className="text-white font-medium">{cert.titulo}</p>
                <p className="text-gray-300 text-sm">{cert.org}</p>
                <p className="text-gray-500 text-xs mt-1">{cert.data}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* MODAL */}
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
              {/* Botão fechar */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute -top-4 -right-4 bg-neutral-900 text-white p-2 rounded-full hover:bg-neutral-800 transition"
              >
                <X size={20} />
              </button>

              {/* Imagem grande */}
              <img
                src={selectedCert.imagem}
                alt={selectedCert.titulo}
                className="w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botão */}
      <motion.a
        href="/"
        className="mt-8 px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg shadow-md inline-block transition-none"
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
