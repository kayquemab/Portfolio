"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Front-End
import { FaHtml5 } from "react-icons/fa";                 // HTML5: linguagem de marcação usada para estruturar páginas web.
import { IoLogoCss3 } from "react-icons/io5";             // CSS3: linguagem de estilização usada para definir aparência visual.
import { IoLogoJavascript } from "react-icons/io5";       // JavaScript: linguagem de programação principal da web.
import { SiTypescript } from "react-icons/si";            // TypeScript: versão do JavaScript com tipagem.
import { FaReact } from "react-icons/fa";                 // React: biblioteca JavaScript para criar interfaces.
import { FaVuejs } from "react-icons/fa6";                // Vue: framework JavaScript para criar interfaces.
import { FaAngular } from "react-icons/fa6";              // Angular: framework front-end completo criado pelo Google.
import { SiNextdotjs } from "react-icons/si";             // Next.js: framework React para aplicações web modernas.
import { SiVite } from "react-icons/si";                  // Vite: ferramenta rápida para criar e rodar projetos front-end.
import { SiTailwindcss } from "react-icons/si";           // Tailwind CSS: framework CSS baseado em classes utilitárias.
import { FaBootstrap } from "react-icons/fa";             // Bootstrap: framework CSS com componentes prontos.
import { SiMui } from "react-icons/si";                   // MUI: biblioteca de componentes React baseada no Material Design.
import { RiSvelteFill } from "react-icons/ri";            // Svelte: framework front-end focado em performance e simplicidade.
import { RiRemixRunLine } from "react-icons/ri";          // Remix: framework web baseado em React.
import { SiNuxtdotjs } from "react-icons/si";             // Nuxt: framework baseado em Vue.

// Back-End
import { FaNodeJs } from "react-icons/fa6";               // Node.js: ambiente para executar JavaScript no servidor.
import { FaPhp } from "react-icons/fa6";                  // PHP: linguagem muito usada no desenvolvimento web.
import { FaLaravel } from "react-icons/fa6";              // Laravel: framework PHP para back-end.
import { SiExpress } from "react-icons/si";               // Express: framework minimalista para Node.js.
import { FaPython } from "react-icons/fa6";               // Python: linguagem de programação versátil, usada no back-end e dados.
import { SiDjango } from "react-icons/si";                // Django: framework Python completo para aplicações web.
import { SiFastapi } from "react-icons/si";               // FastAPI: framework Python moderno para criação de APIs.
import { SiPandas } from "react-icons/si";                // Pandas: biblioteca Python para análise e manipulação de dados.
import { SiNumpy } from "react-icons/si";                 // NumPy: biblioteca Python para computação numérica.
import { SiSqlalchemy } from "react-icons/si";            // SQLAlchemy: biblioteca Python para trabalhar com banco de dados.
import { SiPytest } from "react-icons/si";                // Pytest: ferramenta Python para testes automatizados.
import { SiScikitlearn } from "react-icons/si";           // Scikit-learn: biblioteca Python para machine learning.
import { DiRuby } from "react-icons/di";                  // Ruby: linguagem de programação usada no desenvolvimento web.
import { RiSupabaseFill } from "react-icons/ri";          // Supabase: plataforma back-end baseada em PostgreSQL.
import { SiPrisma } from "react-icons/si";                // Prisma: ORM para trabalhar com banco de dados em JS/TS.
import { SiGo } from "react-icons/si";                    // Go: linguagem de programação focada em performance e simplicidade.
import { IoLogoFirebase } from "react-icons/io5";         // Firebase: plataforma do Google para auth, banco de dados e hospedagem.

// DevOps / Tools / Cloud
import { FaDocker } from "react-icons/fa";                // Docker: ferramenta para criar e rodar aplicações em containers.
import { RiVercelLine } from "react-icons/ri";            // Vercel: plataforma de deploy usada com front-end e Next.js.
import { FaGitAlt } from "react-icons/fa";                // Git: sistema de versionamento de código.
import { SiPostman } from "react-icons/si";               // Postman: ferramenta para testar APIs.
import { VscAzureDevops } from "react-icons/vsc";         // Azure DevOps: plataforma para DevOps, pipelines e gestão de projetos.
import { SiGooglecloud } from "react-icons/si";           // Google Cloud: plataforma de serviços em nuvem do Google.
import { FaAws } from "react-icons/fa6";                  // AWS: plataforma de serviços em nuvem da Amazon.

// Databases
import { DiMysql } from "react-icons/di";                 // MySQL: banco de dados relacional.
import { DiPostgresql } from "react-icons/di";            // PostgreSQL: banco de dados relacional avançado.
import { TbBrandMongodb } from "react-icons/tb";          // MongoDB: banco de dados NoSQL baseado em documentos.
import { GrOracle } from "react-icons/gr";                // Oracle: banco de dados relacional corporativo.
import { DiMsqlServer } from "react-icons/di";            // SQL Server: banco de dados relacional da Microsoft.

// Mobile
import { FaFlutter } from "react-icons/fa6";              // Flutter: framework para criar aplicativos mobile multiplataforma.
import { FaSwift } from "react-icons/fa6";                // Swift: linguagem usada principalmente para apps iOS.




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
        className="text-gray-300 mb-10 text-center max-w-2xl"
        initial={{ opacity: 0, y: -14 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        Tecnologias que utilizo para construir aplicações modernas, eficientes e
        bem estruturadas.
      </motion.p>

      <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
        {abas.map((aba) => {
          const estaAtiva = abaAtiva === aba;

          return (
            <button
              key={aba}
              onClick={() => setAbaAtiva(aba)}
              className={[
                "rounded-full px-5 py-2 text-sm transition cursor-pointer",
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