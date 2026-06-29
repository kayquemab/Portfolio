"use client";

// Geral
import { FaCode } from "react-icons/fa6";


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
import { SiPrisma } from "react-icons/si";
import { SiGo } from "react-icons/si";

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
import { RiSupabaseFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";

// Mobile
import { FaFlutter } from "react-icons/fa6";
import { FaSwift } from "react-icons/fa6";
import { IoLogoElectron } from "react-icons/io5";

const STACK_ICONS = {
    html: FaHtml5,
    html5: FaHtml5,

    css: IoLogoCss3,
    css3: IoLogoCss3,

    javascript: IoLogoJavascript,
    js: IoLogoJavascript,

    typescript: SiTypescript,
    ts: SiTypescript,

    react: FaReact,
    "react native": FaReact,

    vue: FaVuejs,
    vuejs: FaVuejs,
    "vue.js": FaVuejs,

    angular: FaAngular,

    next: SiNextdotjs,
    nextjs: SiNextdotjs,
    "next.js": SiNextdotjs,

    vite: SiVite,

    tailwind: SiTailwindcss,
    "tailwind css": SiTailwindcss,

    bootstrap: FaBootstrap,
    mui: SiMui,
    svelte: RiSvelteFill,
    remix: RiRemixRunLine,
    nuxt: SiNuxtdotjs,

    node: FaNodeJs,
    nodejs: FaNodeJs,
    "node.js": FaNodeJs,

    php: FaPhp,
    laravel: FaLaravel,
    express: SiExpress,
    python: FaPython,
    django: SiDjango,
    fastapi: SiFastapi,
    pandas: SiPandas,
    numpy: SiNumpy,
    sqlalchemy: SiSqlalchemy,
    pytest: SiPytest,
    "scikit-learn": SiScikitlearn,
    ruby: DiRuby,
    prisma: SiPrisma,
    go: SiGo,

    docker: FaDocker,
    vercel: RiVercelLine,
    git: FaGitAlt,
    postman: SiPostman,
    devops: VscAzureDevops,
    "google cloud": SiGooglecloud,
    aws: FaAws,

    mysql: DiMysql,
    postgresql: DiPostgresql,
    postgres: DiPostgresql,
    mongodb: TbBrandMongodb,
    mongo: TbBrandMongodb,
    oracle: GrOracle,
    "sql server": DiMsqlServer,
    supabase: RiSupabaseFill,
    firebase: IoLogoFirebase,

    flutter: FaFlutter,
    swift: FaSwift,
    electron: IoLogoElectron,

    algoritmos: FaCode,
    "lógica de programação": FaCode,


};

function normalizarStack(stack) {
    return String(stack).toLowerCase().trim();
}

export default function StackIcon({ name, className = "h-5 w-5" }) {
    const key = normalizarStack(name);
    const Icon = STACK_ICONS[key] || FaCode;

    return <Icon className={className} />;
}