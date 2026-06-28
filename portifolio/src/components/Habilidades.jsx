"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Front-End
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa6";
import { FaAngular } from "react-icons/fa6";
import { SiNextdotjs } from "react-icons/si";
import { SiVite } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { SiMui } from "react-icons/si";
import { RiSvelteFill } from "react-icons/ri";
import { RiRemixRunLine } from "react-icons/ri";
import { SiNuxtdotjs } from "react-icons/si";

// Back-End
import { FaNodeJs } from "react-icons/fa6";
import { FaPhp } from "react-icons/fa6";
import { FaLaravel } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { FaPython } from "react-icons/fa6";
import { SiDjango } from "react-icons/si";
import { SiFastapi } from "react-icons/si";
import { SiPandas } from "react-icons/si";
import { SiNumpy } from "react-icons/si";
import { SiSqlalchemy } from "react-icons/si";
import { SiPytest } from "react-icons/si";
import { SiScikitlearn } from "react-icons/si";
import { DiRuby } from "react-icons/di";
import { RiSupabaseFill } from "react-icons/ri";
import { SiPrisma } from "react-icons/si";
import { SiGo } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";

// DevOps / Tools / Cloud
import { FaDocker } from "react-icons/fa";
import { RiVercelLine } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { VscAzureDevops } from "react-icons/vsc";
import { SiGooglecloud } from "react-icons/si";
import { FaAws } from "react-icons/fa6";

// Databases
import { DiMysql } from "react-icons/di";
import { DiPostgresql } from "react-icons/di";
import { TbBrandMongodb } from "react-icons/tb";
import { GrOracle } from "react-icons/gr";
import { DiMsqlServer } from "react-icons/di";

// Mobile
import { FaFlutter } from "react-icons/fa6";
import { FaSwift } from "react-icons/fa6";

export default function Habilidades() {
  const [abaAtiva, setAbaAtiva] = useState("Frontend");

  const gruposDeTecnologias = {
    Frontend: [
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: IoLogoCss3 },
      { name: "JavaScript", icon: IoLogoJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React", icon: FaReact },
      { name: "Vue", icon: FaVuejs },
      { name: "Angular", icon: FaAngular },
      { name: "Next", icon: SiNextdotjs },
      { name: "Vite", icon: SiVite },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "Bootstrap", icon: FaBootstrap },
      { name: "MUI", icon: SiMui },
      { name: "Svelte", icon: RiSvelteFill },
      { name: "Remix", icon: RiRemixRunLine },
      { name: "Nuxt", icon: SiNuxtdotjs },
    ],

    Backend: [
      { name: "Node", icon: FaNodeJs },
      { name: "PHP", icon: FaPhp },
      { name: "Laravel", icon: FaLaravel },
      { name: "Express", icon: SiExpress },
      { name: "Python", icon: FaPython },
      { name: "Django", icon: SiDjango },
      { name: "FastAPI", icon: SiFastapi },
      { name: "Pandas", icon: SiPandas },
      { name: "NumPy", icon: SiNumpy },
      { name: "SQLAlchemy", icon: SiSqlalchemy },
      { name: "Pytest", icon: SiPytest },
      { name: "scikit-learn", icon: SiScikitlearn },
      { name: "Ruby", icon: DiRuby },
      { name: "Prisma", icon: SiPrisma },
      { name: "Go", icon: SiGo },
    ],

    Tools: [
      { name: "Docker", icon: FaDocker },
      { name: "Vercel", icon: RiVercelLine },
      { name: "Git", icon: FaGitAlt },
      { name: "Postman", icon: SiPostman },
      { name: "DevOps", icon: VscAzureDevops },
      { name: "Google Cloud", icon: SiGooglecloud },
      { name: "AWS", icon: FaAws },
    ],

    Databases: [
      { name: "MySQL", icon: DiMysql },
      { name: "PostgreSQL", icon: DiPostgresql },
      { name: "MongoDB", icon: TbBrandMongodb },
      { name: "Oracle", icon: GrOracle },
      { name: "SQL Server", icon: DiMsqlServer },
      { name: "Supabase", icon: RiSupabaseFill },
      { name: "Firebase", icon: IoLogoFirebase },
    ],

    Mobile: [
      { name: "React Native", icon: FaReact },
      { name: "Flutter", icon: FaFlutter },
      { name: "Swift", icon: FaSwift },
    ],
  };

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

  const tecnologiasAtivas = gruposDeTecnologias[abaAtiva];

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
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-white mb-4"
        initial={{ opacity: 0, y: -22 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Linguagens e Tecnologias
      </motion.h2>

      <motion.p
        className="text-gray-300 mb-8 sm:mb-10 text-center max-w-2xl"
        initial={{ opacity: 0, y: -14 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        Tecnologias que utilizo para construir aplicações modernas, eficientes e
        bem estruturadas.
      </motion.p>

      <div
        className="
          mb-8 sm:mb-10
          flex flex-wrap items-center justify-center
          gap-2 sm:gap-3
        "
      >
        {abas.map((aba) => {
          const estaAtiva = abaAtiva === aba;

          return (
            <button
              key={aba}
              onClick={() => setAbaAtiva(aba)}
              className={[
                "rounded-full px-4 py-2 text-xs sm:px-5 sm:text-sm transition cursor-pointer",
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

      <div className="w-full max-w-6xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={abaAtiva}
            variants={animacaoGrid}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="
              grid grid-cols-2 gap-2.5
              sm:grid-cols-3 sm:gap-4
              md:grid-cols-4
              lg:grid-cols-5
            "
          >
            {tecnologiasAtivas.map((tech, i) => {
              const Icone = tech.icon;

              return (
                <motion.div
                  key={tech.name}
                  className="
                    h-12
                    rounded-2xl border border-white/10
                    bg-neutral-900/60
                    px-2.5
                    flex items-center justify-start gap-2
                    backdrop-blur-md

                    sm:h-auto sm:min-h-[130px]
                    sm:rounded-2xl sm:p-5
                    sm:flex-col sm:items-center sm:justify-center
                    sm:shadow-[0_10px_30px_rgba(0,0,0,0.35)]

                    lg:min-h-0
                  "
                  variants={animacaoCard}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  custom={i}
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                >
                  <div
                    className="
                      flex h-8 w-8 shrink-0 items-center justify-center
                      rounded-xl bg-white/10

                      sm:h-auto sm:w-auto
                      sm:rounded-none sm:bg-transparent
                    "
                  >
                    <Icone className="text-base text-white sm:text-[40px]" />
                  </div>

                  <p className="truncate text-xs text-white sm:mt-2 sm:text-sm sm:text-center">
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