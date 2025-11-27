"use client";

import { motion } from "framer-motion";
import { FolderGit } from "lucide-react";

export default function Projetos() {

  const projetos = [
    {
      name: "Projeto: Costs",
      descricao: "Sistema para gerenciar orçamentos e custos de projetos.",
      site: "https://costs-projeto.vercel.app/",
      github: "https://github.com/kayquemab/Projeto_Costs",
      video: "/video_costs.mp4",
    },


  ];

  // Variantes de animação
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, type: "spring", stiffness: 300, damping: 20 },
    }),
  };

  return (

    <section className="
  min-h-screen 
  flex flex-col justify-center items-center 
  px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32
  text-center 
  pb-16 sm:pb-20 md:pb-24 lg:pb-32
  pt-16 sm:pt-20 md:pt-24 lg:pt-32
">

      {/* Título */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-white mb-8"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Meus Projetos
      </motion.h2>

      {/* Subtítulo */}
      <motion.p
        className="text-gray-300 mb-8 text-center max-w-2xl"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Confira meus projetos e as soluções criativas que desenvolvi.
      </motion.p>

      {/* Card de exibição */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">

        {projetos.map((proj, i) => (

          <motion.div
            key={proj.name}
            className="bg-neutral-800 rounded-xl shadow-md overflow-hidden flex flex-col"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            whileHover={{ scale: 1.05 }}
          >

            <div className="bg-white dark:bg-white/5 border dark:border-white/10 rounded-2xl shadow-md overflow-hidden backdrop-blur-md flex flex-col h-full">

              <div className="p-4 flex flex-col h-full">

                {/* Vídeo do projeto */}
                {proj.video && (
                  <video
                    src={proj.video}
                    controls
                    className="w-full h-45 rounded-md mb-4 object-cover"
                  />
                )}

                {/* Nome do projeto */}
                <h3 className="text-lg font-semibold dark:text-white flex-grow">
                  {proj.name}
                </h3>

                {/* Nome do projeto */}
                <p className="text-sm text-left dark:text-white flex-grow mt-4">
                  <strong>Descrição:</strong> {proj.descricao}
                </p>

                {/* Botões (sempre embaixo) */}
                <div className="flex gap-3 mt-4">

                  {proj.site && (
                    <a
                      href={proj.site}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 rounded-lg bg-black text-white dark:bg-white dark:text-black text-sm hover:opacity-80 transition"
                    >
                      Ver Projeto
                    </a>
                  )}

                  {proj.github && (
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 rounded-lg border dark:border-white/50 text-sm text-black dark:text-white hover:opacity-80 transition"
                    >
                      GitHub
                    </a>
                  )}

                </div>

              </div>

            </div>

          </motion.div>

        ))}

      </div>

      {/* Botão */}
      <motion.a
        href="/pagina_projetos"
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

        <span className="inline-flex items-center gap-2">
          <FolderGit size={16} className="inline-block" />
          Ver todos os projetos
        </span>

      </motion.a>

    </section>

  );
}
