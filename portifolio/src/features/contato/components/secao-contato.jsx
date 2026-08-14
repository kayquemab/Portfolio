"use client";

import { Github, Linkedin, Mail, Loader2, X } from "lucide-react";
import { FaEnvelope, FaUser } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useFormularioContato } from "../hooks/use-formulario-contato";
import LinksSociais from "@/shared/components/links-sociais";
import CabecalhoSecao from "@/shared/components/cabecalho-secao";
import CampoFormulario from "./campo-formulario";
import BotaoAcao from "@/shared/components/botao-acao";

const redes = [
  { nome: "GitHub", link: "https://github.com/kayquemab", icon: Github },
  {
    nome: "LinkedIn",
    link: "https://www.linkedin.com/in/kayque-miqueias/",
    icon: Linkedin,
  },
  {
    nome: "E-mail",
    link: "mailto:kayquemiqueias17@gmail.com?subject=Contato%20via%20Portfólio",
    icon: Mail,
  },
];

export default function Contato() {
  const {
    formulario,
    carregando,
    aviso,
    atualizarCampo,
    enviarFormulario,
    fecharAviso,
  } = useFormularioContato();

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
      <CabecalhoSecao
        rotulo="Vamos conversar"
        titulo="Contatos"
        descricao="Tem um projeto em mente ou quer bater um papo? Me envie uma mensagem!"
      />

      {/* Formulário */}
      <motion.form
        onSubmit={enviarFormulario}
        className="w-full max-w-md flex flex-col gap-4 relative"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <CampoFormulario
          id="nome"
          valor={formulario.nome}
          aoAlterar={(valor) => atualizarCampo("nome", valor)}
          placeholder="Digite seu nome:"
          icon={FaUser}
        />

        <CampoFormulario
          id="email"
          tipo="email"
          valor={formulario.email}
          aoAlterar={(valor) => atualizarCampo("email", valor)}
          placeholder="Digite seu e-mail:"
          icon={FaEnvelope}
        />

        <CampoFormulario
          id="mensagem"
          valor={formulario.mensagem}
          aoAlterar={(valor) => atualizarCampo("mensagem", valor)}
          placeholder="Escreva sua mensagem:"
          multiline
        />

        {/* Botão */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 70, damping: 15, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <BotaoAcao type="submit" disabled={carregando} className="w-full">
            <span className="inline-flex items-center gap-2">
              {carregando && <Loader2 size={16} className="animate-spin" />}
              {carregando ? "Enviando..." : "Enviar"}
            </span>
          </BotaoAcao>
        </motion.div>
      </motion.form>

      <motion.div
        className="mt-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <LinksSociais links={redes} />
      </motion.div>

      {/* Snackbar / Toast */}
      <AnimatePresence>
        {aviso.open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className={`
              fixed bottom-6 left-1/2 -translate-x-1/2 z-50
              w-[calc(100%-2rem)] max-w-md
              rounded-xl border px-4 py-3 shadow-lg backdrop-blur
              flex items-start gap-3
              ${aviso.type === "success"
                ? "bg-emerald-500/15 border-emerald-500/30 text-emerald-100"
                : "bg-red-500/15 border-red-500/30 text-red-100"
              }
            `}
            role="status"
            aria-live="polite"
          >
            <div className="flex-1 text-sm text-left">{aviso.message}</div>

            <button
              type="button"
              onClick={fecharAviso}
              className="opacity-80 hover:opacity-100 transition cursor-pointer"
              aria-label="Fechar"
            >
              <X size={16} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
