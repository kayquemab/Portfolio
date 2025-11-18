"use client";

import { motion } from "framer-motion";
import { FileBadge, ScrollText } from "lucide-react";
import { FaGraduationCap } from "react-icons/fa6";

export default function FormacaoCertificacoes({ onVerCertificados }) {

  const formacao = [
    {
      titulo: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
      instituicao: "Universidade Cruzeiro do Sul",
      periodo: "Fev 2022 - Dez 2024",
      icon: <FaGraduationCap className="text-white" size={20} />,
    },
    // {
    //   titulo: "Pós Graduação em Arquitetura de Software",
    //   instituicao: "FIAP",
    //   periodo: "Fev 2027 - Dez 2027",
    //   icon: <FaGraduationCap className="text-white" size={20} />,
    // },
  ];

  const certificacoesTeste = [
    // {
    //   id: 1,
    //   titulo: "CERTIFICAÇÃO AWS",
    //   instituicao: "Amazon Web Services",
    //   data: "Emitido: Fev 2028",
    // },
    // {
    //   id: 2,
    //   titulo: "CERTIFICAÇÃO GOOGLE CLOUD",
    //   instituicao: "Google Cloud",
    //   data: "Emitido: Dez 2028",
    // },
  ];

  // animação suave, inspirada em Habilidades mas um pouco mais devagar
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.12, // um tiquinho mais devagar
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

      {/* Título */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-white mb-8"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Formação & Certificações
      </motion.h2>

      {/* Subtítulo */}
      <motion.p
        className="text-gray-300 mb-8 text-center max-w-2xl"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Resumo da minha formação acadêmica e da minha qualificação profissional.
      </motion.p>

      {/* Container das duas colunas */}
      <motion.div
        className="w-full flex flex-col lg:flex-row gap-16"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true, amount: 0.3 }}
      >

        {/* Coluna Formação */}
        <div className="flex-1 text-left">

          <motion.h3
            className="text-xl font-semibold mb-6 text-center lg:text-left text-white"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Formação
          </motion.h3>

          <div className="relative pl-6">
            <div className="absolute left-2 top-0 h-full w-[3px] bg-gray-700/80" />

            {formacao.map((item, index) => (
              <motion.div
                key={item.titulo}
                className="relative mb-8 last:mb-0"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.4 + index * 0.12,
                }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{
                  scale: 1.06,
                  transition: {
                    type: "spring",
                    stiffness: 220,
                    damping: 20,
                  },
                }}
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

        {/* Coluna Certificações */}
        <div className="flex-1 flex flex-col justify-center items-center">
          <motion.h3
            className="text-xl font-semibold mb-6 text-center text-white"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Certificações
          </motion.h3>

          {/* Lista de certificações em GRID responsivo */}
          <motion.div
            className="w-full max-w-3xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6">
              {certificacoesTeste.map((cert, i) => (

                <motion.div
                  key={cert.titulo}
                  className="bg-neutral-800 p-5 rounded-xl text-left flex gap-4 items-start shadow-md"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  whileHover={{
                    scale: 1.08,
                    transition: {
                      type: "spring",
                      stiffness: 220,
                      damping: 24,
                    },
                  }}
                >

                  <ScrollText size={20} className="text-white mt-1 shrink-0" />
                  <div>
                    <p className="text-white font-medium text-sm">
                      {cert.titulo}
                    </p>
                    <p className="text-gray-300 text-xs">
                      {cert.instituicao}
                    </p>
                    <p className="text-gray-500 text-[11px] mt-1">
                      {cert.data}
                    </p>
                  </div>

                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Botão para certificados */}
          <motion.a
            href="/pagina_certificados"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onVerCertificados}
            className="mt-8 px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg shadow-md inline-block transition-none"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{
              scale: 1.05,
              y: -2,
              boxShadow: "0px 10px 22px rgba(0,0,0,0.32)",
              transition: { duration: 0.12, ease: "easeOut" },
            }}
            whileTap={{
              scale: 0.97,
              y: 0,
              boxShadow: "0px 4px 10px rgba(0,0,0,0.22)",
              transition: { duration: 0.08, ease: "easeIn" },
            }}
          >
            <span className="inline-flex items-center gap-2">
              <FileBadge size={16} className="inline-block" />
              Ver todos os certificados
            </span>
          </motion.a>
        </div>

      </motion.div>

    </section>

  );
}
