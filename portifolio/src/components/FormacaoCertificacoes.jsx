"use client";

import { motion } from "framer-motion";
import { FaGraduationCap, FaLaptopCode } from "react-icons/fa6";

export default function FormacaoCertificacoes({ onVerCertificados }) {
  const formacao = [
    {
      titulo: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
      instituicao: "Universidade Cruzeiro do Sul",
      periodo: "Fev 2022 - Dez 2024",
      icon: <FaGraduationCap className="text-white" size={20} />,
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
    }),
  };

  return (
    <section
      id="certificados"
      className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32 text-center pb-16 sm:pb-20 md:pb-24 lg:pb-32 pt-16 sm:pt-20 md:pt-24 lg:pt-32"
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-white mb-4"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Formação & Certificações
      </motion.h2>

      <motion.p
        className="text-gray-300 mb-12 max-w-2xl"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Resumo da minha formação acadêmica e qualificação profissional.
      </motion.p>

      <div className="w-full flex flex-col lg:flex-row gap-16">
        <div className="flex-1 text-left">
          <h3 className="text-xl font-semibold mb-6 text-center lg:text-left text-white">
            Formação
          </h3>

          <div className="relative pl-6">
            <div className="absolute left-2 top-0 h-full w-[3px] bg-gray-700/80" />
            {formacao.map((item, index) => (
              <motion.div
                key={item.titulo}
                className="relative mb-8 last:mb-0"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="absolute -left-[31px] top-1 flex items-center justify-center w-8 h-8 rounded-full bg-neutral-800 border border-white/10">
                  {item.icon}
                </div>
                <div className="bg-neutral-800/50 border border-white/5 rounded-xl p-4">
                  <p className="text-white font-medium">{item.titulo}</p>
                  <p className="text-gray-300 text-sm">{item.instituicao}</p>
                  <p className="text-gray-500 text-xs mt-1">{item.periodo}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center items-center">
          <h3 className="text-xl font-semibold mb-6 text-center text-white">
            Certificações
          </h3>

          <motion.button
            onClick={onVerCertificados}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-neutral-800 hover:bg-neutral-700 border border-white/10 text-white px-6 py-3 rounded-xl flex items-center gap-3 font-medium shadow-md"
          >
            <FaLaptopCode className="text-white" size={22} />
            Ver todos os certificados
          </motion.button>

          {/* Botão */}
          <motion.a
            href="/pagina_certificados"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg
             shadow-md inline-block transition-none" // evita conflito com Tailwind
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 70, damping: 15, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.12,
              y: -6,
              boxShadow: "0px 12px 25px rgba(0,0,0,0.35)",
              transition: { duration: 0.15, ease: "easeOut" } // suave e rápida
            }}
            whileTap={{
              scale: 0.96,
              y: 0,
              boxShadow: "0px 4px 10px rgba(0,0,0,0.25)",
              transition: { duration: 0.1, ease: "easeIn" }
            }}
          >
            Ver todos os projetos
          </motion.a>
        </div>
      </div>
    </section>
  );
}
