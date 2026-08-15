"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Github, Linkedin, Mail, X } from "lucide-react";
import CabecalhoSecao from "@/shared/components/layout/cabecalho-secao";
import LinksSociais from "@/shared/components/social/links-sociais";
import { useFormularioContato } from "../hooks/use-formulario-contato";
import FormularioContato from "./formulario-contato";

const redes = [
  { nome: "GitHub", link: "https://github.com/kayquemab", icon: Github },
  { nome: "LinkedIn", link: "https://www.linkedin.com/in/kayque-miqueias/", icon: Linkedin },
  { nome: "E-mail", link: "mailto:kayquemiqueias17@gmail.com?subject=Contato%20via%20Portfólio", icon: Mail },
];

export default function SecaoContato() {
  const { formulario, carregando, aviso, atualizarCampo, enviarFormulario, fecharAviso } = useFormularioContato();

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32 text-center pb-16 sm:pb-20 md:pb-24 lg:pb-32 pt-16 sm:pt-20 md:pt-24 lg:pt-32">
      <CabecalhoSecao rotulo="Vamos conversar" titulo="Contatos" descricao="Tem um projeto em mente ou quer bater um papo? Me envie uma mensagem!" />
      <FormularioContato formulario={formulario} carregando={carregando} atualizarCampo={atualizarCampo} aoEnviar={enviarFormulario} />

      <motion.div className="mt-8" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.6 }} viewport={{ once: true }}>
        <LinksSociais links={redes} />
      </motion.div>

      <AnimatePresence>
        {aviso.open && (
          <motion.div initial={{ opacity: 0, y: 16, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 16, scale: 0.98 }} transition={{ duration: 0.2 }} className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-md rounded-xl border px-4 py-3 shadow-lg backdrop-blur flex items-start gap-3 ${aviso.type === "success" ? "bg-emerald-500/15 border-emerald-500/30 text-emerald-100" : "bg-red-500/15 border-red-500/30 text-red-100"}`} role="status" aria-live="polite">
            <div className="flex-1 text-sm text-left">{aviso.message}</div>
            <button type="button" onClick={fecharAviso} className="opacity-80 hover:opacity-100 transition cursor-pointer" aria-label="Fechar">
              <X size={16} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
