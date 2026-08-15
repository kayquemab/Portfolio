"use client";

import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { FaEnvelope, FaUser } from "react-icons/fa";
import BotaoAcao from "@/shared/components/button/botao-acao";
import CampoFormulario from "./campo-formulario";

export default function FormularioContato({ formulario, carregando, atualizarCampo, aoEnviar }) {
  return (
    <motion.form onSubmit={aoEnviar} className="w-full max-w-md flex flex-col gap-4 relative" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.3 }} viewport={{ once: true }}>
      <CampoFormulario id="nome" valor={formulario.nome} aoAlterar={(valor) => atualizarCampo("nome", valor)} placeholder="Digite seu nome:" icon={FaUser} />
      <CampoFormulario id="email" tipo="email" valor={formulario.email} aoAlterar={(valor) => atualizarCampo("email", valor)} placeholder="Digite seu e-mail:" icon={FaEnvelope} />
      <CampoFormulario id="mensagem" valor={formulario.mensagem} aoAlterar={(valor) => atualizarCampo("mensagem", valor)} placeholder="Escreva sua mensagem:" multiline />

      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ type: "spring", stiffness: 70, damping: 15, delay: 0.3 }} viewport={{ once: true }}>
        <BotaoAcao type="submit" disabled={carregando} className="w-full">
          <span className="inline-flex items-center gap-2">
            {carregando && <Loader2 size={16} className="animate-spin" />}
            {carregando ? "Enviando..." : "Enviar"}
          </span>
        </BotaoAcao>
      </motion.div>
    </motion.form>
  );
}
