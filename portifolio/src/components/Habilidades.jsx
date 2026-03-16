"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Front-End
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3, IoLogoJavascript, IoLogoElectron } from "react-icons/io5";
import { SiTypescript, SiNextdotjs, SiVite, SiTailwindcss, SiMui } from "react-icons/si";
import { FaReact, FaBootstrap } from "react-icons/fa";
import { FaAngular, FaVuejs } from "react-icons/fa6";
import { RiSvelteFill } from "react-icons/ri";

// Back-End
import { FaNodeJs, FaPhp, FaLaravel, FaPython } from "react-icons/fa6";
import { SiExpress, SiDjango, SiFastapi, SiPandas, SiNumpy, SiSqlalchemy, SiPytest, SiScikitlearn } from "react-icons/si";
import { DiRuby } from "react-icons/di";

// DevOps / Tools
import { FaDocker, FaGitAlt } from "react-icons/fa";
import { FaAws } from "react-icons/fa6";
import { RiVercelLine } from "react-icons/ri";
import { SiPostman, SiGooglecloud } from "react-icons/si";
import { VscAzureDevops } from "react-icons/vsc";

// Databases
import { DiMysql, DiPostgresql, DiMsqlServer } from "react-icons/di";
import { TbBrandMongodb } from "react-icons/tb";
import { GrOracle } from "react-icons/gr";

export default function Habilidades() {

  const [abaAtiva, setAbaAtiva] = useState("Frontend");

  const gruposDeTecnologias = {
    // Cada chave representa uma aba, e o valor é um array de tecnologias com nome e ícone
    Frontend: [
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: IoLogoCss3 },
      { name: "JavaScript", icon: IoLogoJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React", icon: FaReact },
      // { name: "Vue", icon: FaVuejs },
      // { name: "Angular", icon: FaAngular },
      { name: "Next", icon: SiNextdotjs },
      { name: "Vite", icon: SiVite },
      { name: "Tailwind", icon: SiTailwindcss },
      // { name: "Bootstrap", icon: FaBootstrap },
      // { name: "MUI", icon: SiMui },
      // { name: "Svelte", icon: RiSvelteFill },
    ],

    Backend: [
      // { name: "Node", icon: FaNodeJs },
      // { name: "PHP", icon: FaPhp },
      // { name: "Laravel", icon: FaLaravel },
      // { name: "Express", icon: SiExpress },
      // { name: "Python", icon: FaPython },
      // { name: "Django", icon: SiDjango },
      { name: "FastAPI", icon: SiFastapi },
      // { name: "Pandas", icon: SiPandas },
      // { name: "NumPy", icon: SiNumpy },
      // { name: "SQLAlchemy", icon: SiSqlalchemy },
      // { name: "Pytest", icon: SiPytest },
      // { name: "scikit-learn", icon: SiScikitlearn },
      // { name: "Ruby", icon: DiRuby },
    ],

    Tools: [
      // { name: "Docker", icon: FaDocker },
      { name: "Vercel", icon: RiVercelLine },
      { name: "Git", icon: FaGitAlt },
      { name: "Postman", icon: SiPostman },
      // { name: "DevOps", icon: VscAzureDevops },
      // { name: "Google Cloud", icon: SiGooglecloud },
      // { name: "AWS", icon: FaAws },
    ],

    // Databases: [
    //   { name: "MySQL", icon: DiMysql },
    //   { name: "PostgreSQL", icon: DiPostgresql },
    //   { name: "MongoDB", icon: TbBrandMongodb },
    //   { name: "Oracle", icon: GrOracle },
    //   { name: "SQL Server", icon: DiMsqlServer },
    // ],

    // Mobile: [
    //   { name: "React Native", icon: FaReact },
    //   { name: "Electron", icon: IoLogoElectron },
    // ],
  };

  // Gerar as abas dinamicamente a partir das chaves do objeto de tecnologias
  const abas = Object.keys(gruposDeTecnologias);

  const animacaoCard = {
    hidden: { opacity: 0, y: 24 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, delay: i * 0.06, ease: "easeOut" },
    }),
    exit: { opacity: 0, y: 16, transition: { duration: 0.2 } },
  };

  const animacaoGrid = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.25 } },
    exit: { opacity: 0, y: 8, transition: { duration: 0.18 } },
  };

  // Obter as tecnologias do grupo ativo para renderizar no grid
  const tecnologiasAtivas = gruposDeTecnologias[abaAtiva];

  // Renderização do componente
  return (
    <section
      className="
        min-h-screen flex flex-col justify-center items-center
        px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32
        text-center
        pb-16 sm:pb-20 md:pb-24 lg:pb-32
        pt-16 sm:pt-20 md:pt-24 lg:pt-32
      "
    >

      {/* Título */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-white mb-4"
        initial={{ opacity: 0, y: -22 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Linguagens e Tecnologias
      </motion.h2>

      {/* Subtítulo */}
      <motion.p
        className="text-gray-300 mb-10 text-center max-w-2xl"
        initial={{ opacity: 0, y: -14 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        Tecnologias que utilizo para construir aplicações modernas, eficientes e
        bem estruturadas.
      </motion.p>

      {/* Abas de navegação */}
      <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
        {abas.map((aba) => {
          const estaAtiva = abaAtiva === aba;

          return (
            <button
              key={aba}
              onClick={() => setAbaAtiva(aba)}
              className={[
                "rounded-full px-5 py-2 text-sm transition",
                "border border-white/10 bg-white/5 text-white/80 hover:bg-white/10",
                estaAtiva ? "bg-white/10 text-white border-white/20" : "",
              ].join(" ")}
            >
              <span className="inline-flex items-center gap-2">
                {estaAtiva && (
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                )}
                {aba}
              </span>
            </button>
          );
        })}
      </div>

      {/* Conteúdo das tecnologias */}
      <div className="w-full max-w-6xl">

        {/* Grid de tecnologias */}
        <AnimatePresence mode="wait">
          <motion.div
            key={abaAtiva}
            variants={animacaoGrid}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          >
            {tecnologiasAtivas.map((tech, i) => {
              const Icone = tech.icon;

              return (
                <motion.div
                  key={tech.name}
                  className="
                    bg-neutral-900/60 border border-white/10
                    p-5 rounded-2xl
                    flex flex-col items-center justify-center
                    shadow-[0_10px_30px_rgba(0,0,0,0.35)]
                    backdrop-blur-md
                  "
                  variants={animacaoCard}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  custom={i}
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                >
                  <Icone size={40} className="text-white" />
                  <p className="mt-2 text-sm text-center text-white">
                    {tech.name}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}