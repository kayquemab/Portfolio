"use client";

import { motion } from "framer-motion";

/* =========================
  🎨 Front-End
========================= */
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

/* =========================
  ⚙️ Back-End
========================= */
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


/* =========================
  ☁️ DevOps / Cloud
========================= */
import { FaDocker } from "react-icons/fa";
import { RiVercelLine } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { VscAzureDevops } from "react-icons/vsc";
import { SiGooglecloud } from "react-icons/si";
import { FaAws } from "react-icons/fa6";

/* =========================
  🗄️ Databases
========================= */
import { DiMysql } from "react-icons/di";
import { DiPostgresql } from "react-icons/di";
import { TbBrandMongodb } from "react-icons/tb";
import { GrOracle } from "react-icons/gr";
import { DiMsqlServer } from "react-icons/di";

export default function Habilidades() {
  const frontEnd = [
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
  ];

  const backEnd = [
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
    // { name: "Ruby", icon: DiRuby }
  ];

  const devOpsCloud = [
    // { name: "Docker", icon: FaDocker },
    { name: "Vercel", icon: RiVercelLine },
    { name: "Git", icon: FaGitAlt },
    { name: "Postman", icon: SiPostman },
    // { name: "DevOps", icon: VscAzureDevops },
    // { name: "Google Cloud", icon: SiGooglecloud },
    // { name: "AWS", icon: FaAws },
  ];

  const databases = [
    // { name: "MySQL", icon: DiMysql },
    // { name: "PostgreSQL", icon: DiPostgresql },
    // { name: "MongoDB", icon: TbBrandMongodb },
    // { name: "Oracle", icon: GrOracle },
    // { name: "SQL Server", icon: DiMsqlServer },
  ];

  // animação padrão para surgimento
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

  const renderSkillCard = (skill, i) => {
    const Icon = skill.icon;

    return (
      <motion.div
        key={skill.name}
        className="bg-neutral-800 p-5 rounded-xl flex flex-col items-center justify-center shadow-md"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={i}
        whileHover={{ scale: 1.15 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Icon size={40} className="text-white" />
        <p className="mt-2 text-sm text-center text-white">{skill.name}</p>
      </motion.div>
    );
  };

  return (
    <section
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
        Linguagens e Tecnologias
      </motion.h2>

      {/* Subtítulo */}
      <motion.p
        className="text-gray-300 mb-12 text-center max-w-2xl"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Tecnologias que utilizo para construir aplicações modernas, eficientes e
        bem estruturadas.
      </motion.p>

      {/* Wrapper com espaçamento vertical */}
      <div className="flex flex-col gap-20 w-full">

        {/* Linha de cima */}
        <div className="flex flex-col lg:flex-row gap-16 w-full">

          {/* Front-End */}
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-6 text-center text-white">
              Front-End
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-4">
              {frontEnd.map((skill, i) => renderSkillCard(skill, i))}
            </div>
          </div>

          {/* Back-End */}
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-6 text-center text-white">
              Back-End
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-4">
              {backEnd.map((skill, i) => renderSkillCard(skill, i))}
            </div>
          </div>

        </div>

        {/* Linha de baixo */}
        <div className="flex flex-col lg:flex-row gap-16 w-full">

          {/* DevOps, Cloud e Tools */}
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-6 text-center text-white">
              DevOps, Cloud e Tools
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-4">
              {devOpsCloud.map((skill, i) => renderSkillCard(skill, i))}
            </div>
          </div>

          {/* Databases */}
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-6 text-center text-white">
              Databases
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-4">
              {databases.map((skill, i) => renderSkillCard(skill, i))}
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
