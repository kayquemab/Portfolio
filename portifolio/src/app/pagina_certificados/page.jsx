"use client";

import { motion } from "framer-motion";
import { FaLaptopCode } from "react-icons/fa6";
import Link from "next/link";

export default function Certificados() {
  const certificacoes = [
    { titulo: "Algoritmo [40 Horas]", org: "Curso em Vídeo", data: "Emitido: Dez 2024" },
    { titulo: "HTML5 [40 Horas]", org: "Curso em Vídeo", data: "Emitido: Jun 2025" },
    { titulo: "Javascript [40 Horas]", org: "Curso em Vídeo", data: "Emitido: Set 2025" },
    { titulo: "Git e GitHub [20 Horas]", org: "Curso em Vídeo", data: "Emitido: Fev 2025" },
    { titulo: "Javascript do zero [10 horas]", org: "Trybe", data: "Emitido: Nov 2025" },
    { titulo: "Lógica de Programação [10 horas]", org: "Trybe", data: "Emitido: Nov 2025" },
  ];

  return (
    <section className="min-h-screen px-6 sm:px-10 md:px-16 py-24 text-center">
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-white mb-8"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Meus Certificados
      </motion.h1>

      <div className="mb-10">
        <Link
          href="/"
          className="text-gray-300 hover:text-white underline text-sm"
        >
          ← Voltar
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificacoes.map((cert, i) => (
          <motion.div
            key={cert.titulo}
            className="bg-neutral-800 p-5 rounded-xl text-left flex gap-4 items-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <FaLaptopCode size={24} className="text-white shrink-0 mt-1" />
            <div>
              <p className="text-white font-medium">{cert.titulo}</p>
              <p className="text-gray-300 text-sm">{cert.org}</p>
              <p className="text-gray-500 text-xs mt-1">{cert.data}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
