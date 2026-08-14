"use client";

import { Github, Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import LinksSociais from "@/shared/components/links-sociais";

const frases = [
  '<h1 class="text-4xl font-bold">Hello World</h1>',
  'console.log("Hello World");',
  'const message: string = "Hello World";',
  'export default function App() { return <h1>Hello World</h1>; }',
  'app.get("/", (req, res) => res.send("Hello World"));',
  'print("Hello World")',
  'await prisma.message.create({ data: { text: "Hello World" } });',
  'git commit -m "Hello World"',
  'SELECT \'Hello World\';',
  'db.messages.insertOne({ text: "Hello World" });',
  'const Text("Hello World")',
  'export const handler = async () => ({ body: "Hello World" });',
];

const redes = [
  {
    nome: "GitHub",
    link: "https://github.com/kayquemab",
    icon: Github,
  },
  {
    nome: "LinkedIn",
    link: "https://www.linkedin.com/in/kayque-miqueias/",
    icon: Linkedin,
  },
  {
    nome: "Instagram",
    link: "https://www.instagram.com/kayque.mab/",
    icon: Instagram,
  },
];

export default function Inicio() {
  const [indiceFrase, setIndiceFrase] = useState(0);
  const [indiceCaractere, setIndiceCaractere] = useState(0);
  const fraseAtual = frases[indiceFrase];

  useEffect(() => {
    const terminou = indiceCaractere >= fraseAtual.length;

    const temporizador = setTimeout(
      () => {
        if (!terminou) {
          setIndiceCaractere((indice) => indice + 1);
          return;
        }

        setIndiceFrase((indiceAtual) => {
          let proximoIndice = indiceAtual;

          while (proximoIndice === indiceAtual) {
            proximoIndice = Math.floor(Math.random() * frases.length);
          }

          return proximoIndice;
        });
        setIndiceCaractere(0);
      },
      terminou ? 1200 : 55,
    );

    return () => clearTimeout(temporizador);
  }, [fraseAtual, indiceCaractere]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className="flex min-h-screen flex-col items-center justify-center px-4 py-24 text-center sm:px-6 md:px-10"
    >
      <div className="flex w-full max-w-3xl flex-col items-center">
        <div className="mb-8 flex min-h-12 max-w-2xl items-center justify-center px-2 sm:mb-10">
          <p className="break-words font-mono text-xs leading-5 text-white/50 sm:text-sm">
            {fraseAtual.slice(0, indiceCaractere)}
            <span className="ml-0.5 animate-pulse text-white">|</span>
          </p>
        </div>

        <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl">
          Kayque Miqueias
          <span className="mt-1 block">
            Desenvolvedor <span className="whitespace-nowrap">Full-Stack</span>
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-sm leading-6 text-gray-400 sm:text-base sm:leading-7">
          Apaixonado por desenvolvimento, construo minha trajetória como full-stack,
          unindo prática em projetos reais e evolução profissional.
        </p>

        <div className="mt-8">
          <LinksSociais links={redes} />
        </div>
      </div>
    </motion.section>
  );
}
