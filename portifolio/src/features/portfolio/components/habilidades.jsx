"use client";

import { motion } from "framer-motion";
import NuvemIcones from "@/shared/components/nuvem-icones-interativa";
import CabecalhoSecao from "@/shared/components/cabecalho-secao";

const tecnologias = [
  "html5",
  "css",
  "javascript",
  "typescript",
  "react",
  "vuedotjs",
  "angular",
  "nextdotjs",
  "vite",
  "tailwindcss",
  "bootstrap",
  "mui",
  "svelte",
  "remix",
  "nuxt",

  "nodedotjs",
  "php",
  "laravel",
  "express",
  "python",
  "django",
  "ruby",
  "supabase",
  "prisma",
  "go",
  "firebase",

  "docker",
  "vercel",
  "git",
  "postman",
  "n8n",
  "azuredevops",
  "googlecloud",
  "amazonwebservices",

  "mysql",
  "postgresql",
  "mongodb",
  "oracle",

  "flutter",
  "swift",
  "electron",
];

export default function Habilidades() {
  return (
    <section
      className="
        min-h-screen flex flex-col justify-center items-center
        px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32
        text-center py-16 sm:py-20 md:py-24 lg:py-32
      "
    >
      <CabecalhoSecao
        rotulo="Stack técnica"
        titulo="Linguagens e Tecnologias"
        descricao="Tecnologias que utilizo para construir aplicações modernas, eficientes e bem estruturadas."
      />

      <motion.div
        className="relative flex w-full max-w-4xl items-center justify-center overflow-hidden"
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        viewport={{ once: true }}
      >
        <NuvemIcones iconSlugs={tecnologias} />
      </motion.div>
    </section>
  );
}
