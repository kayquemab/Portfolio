"use client";

import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa6";

export default function FormacaoCertificacoes() {

  const formacao = [
    {
      titulo: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
      instituicao: "Universidade Cruzeiro do Sul",
      periodo: "Fev 2022 - Dez 2024",
      icon: <FaGraduationCap className="text-white" size={20} />,
    },
  ];

  const certificacoes = [
    {
      titulo: "Algoritmo [40 Horas]",
      org: "Curso em Vídeo",
      data: "Emitido: Dez 2024",
      icon: <FaLaptopCode size={24} className="text-white" />,
    },
    {
      titulo: "HTML5 [40 Horas]",
      org: "Curso em Vídeo",
      data: "Emitido: Jun 2025",
      icon: <FaLaptopCode size={24} className="text-white" />,
    },
    {
      titulo: "Javascript [40 Horas]",
      org: "Curso em Vídeo",
      data: "Emitido: Set 2025",
      icon: <FaLaptopCode size={24} className="text-white" />,
    },
    {
      titulo: "Git e GitHub [20 Horas]",
      org: "Curso em Vídeo",
      data: "Emitido: Fev 2025",
      icon: <FaLaptopCode size={24} className="text-white" />,
    },
    {
      titulo: "Javascript do zero [10 horas]",
      org: "Trybe",
      data: "Emitido: Nov 2025",
      icon: <FaLaptopCode size={24} className="text-white" />,
    },
    {
      titulo: "Lógica de Programação [10 horas]",
      org: "Trybe",
      data: "Emitido: Nov 2025",
      icon: <FaLaptopCode size={24} className="text-white" />,
    },
  ];


  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.1,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      id="certificados"
      className="
        min-h-screen 
        flex flex-col justify-center items-center 
        px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32
        text-center 
        pb-16 sm:pb-20 md:pb-24 lg:pb-32
        pt-16 sm:pt-20 md:pt-24 lg:pt-32
      "
    >
      {/* Titulo */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-white mb-4"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Formação & Certificações
      </motion.h2>

      {/* Subtítulo */}
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

        {/* Formação */}
        <div className="flex-1 text-left">
          <h3 className="text-xl font-semibold mb-6 text-center lg:text-left text-white">
            Formação
          </h3>

          <div className="relative pl-6">

            {/* Linha vertical */}
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

        {/* Certificações */}
        <div className="flex-1">

          <h3 className="text-xl font-semibold mb-6 text-center lg:text-left text-white">
            Certificações
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {certificacoes.map((cert, i) => (

              <motion.div
                key={cert.titulo}
                className="bg-neutral-800 p-5 rounded-xl flex gap-4 items-start shadow-md"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="flex items-start justify-center shrink-0 pt-1">
                  {cert.icon}
                </div>
                <div className="text-left min-w-0 break-words">
                  <p className="text-white font-medium leading-tight">
                    {cert.titulo}
                  </p>
                  <p className="text-gray-300 text-sm">{cert.org}</p>
                  <p className="text-gray-500 text-xs mt-1">{cert.data}</p>
                </div>
              </motion.div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}
