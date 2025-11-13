"use client";

import { Github, Linkedin, Mail, Send } from "lucide-react";
import Link from "next/link";
import { FaEnvelope, FaUser } from "react-icons/fa";

import { motion } from "framer-motion";

export default function Contato() {

  return (

    <section className="
  min-h-screen 
  flex flex-col justify-center items-center 
  px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32
  text-center 
  pb-16 sm:pb-20 md:pb-24 lg:pb-32
  pt-16 sm:pt-20 md:pt-24 lg:pt-32
">

      {/* Título */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-white mb-8"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Contatos
      </motion.h2>

      {/* Subtítulo */}
      <motion.p
        className="text-gray-300 mb-8 text-center max-w-2xl"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Tem um projeto em mente ou quer bater um papo? Me envie uma mensagem!
      </motion.p>

      {/* Formulário */}
      <motion.form
        className="w-full max-w-md flex flex-col gap-4 relative"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.3 }}
        viewport={{ once: true }}
      >

        {/* Nome */}
        <div className="relative">
          <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />

          <input
            id="nome"
            type="text"
            placeholder="Digite seu nome:"
            className="w-full pl-10 pr-4 py-3 rounded-lg bg-transparent border border-gray-700 text-white
                 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-1
                 placeholder-gray-400 transition-all duration-200
                 hover:border-gray-300"
          />

        </div>

        {/* E-mail */}
        <div className="relative">
          <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />

          <input
            id="email"
            type="email"
            placeholder="Digite seu email:"
            className="w-full pl-10 pr-4 py-3 rounded-lg bg-transparent border border-gray-700 text-white
                 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-1
                 placeholder-gray-400 transition-all duration-200
                 hover:border-gray-300"
          />

        </div>

        {/* Mensagem */}
        <div className="relative">

          <textarea
            id="mensagem"
            placeholder="Escreva sua mensagem:"
            rows="5"
            className="w-full px-4 py-3 rounded-lg bg-transparent border border-gray-700 text-white
               focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-1
               placeholder-gray-400 transition-all duration-200 resize-none
               hover:border-gray-300"
          />

        </div>

        {/* Botão */}
        <motion.button
          type="button"
          className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg
             shadow-md inline-block transition-none"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 70, damping: 15, delay: 0.3 }}
          viewport={{ once: true }}
          whileHover={{
            scale: 1.12,
            y: -6,
            boxShadow: "0px 12px 25px rgba(0,0,0,0.35)",
            transition: { duration: 0.15, ease: "easeOut" }
          }}
          whileTap={{
            scale: 0.96,
            y: 0,
            boxShadow: "0px 4px 10px rgba(0,0,0,0.25)",
            transition: { duration: 0.1, ease: "easeIn" }
          }}
          onClick={() => {
            const nome = document.getElementById("nome").value;
            const email = document.getElementById("email").value;
            const mensagem = document.getElementById("mensagem").value;

            const subject = encodeURIComponent(`Contato de ${nome}`);
            const body = encodeURIComponent(`Nome: ${nome}\nEmail: ${email}\n\nMensagem:\n${mensagem}`);

            window.location.href = `mailto:kayquemiqueias17@gmail.com?subject=${subject}&body=${body}`;
          }}
        >

          <span className="inline-flex items-center gap-2">
            <Send size={16} className="inline-block" />
            Enviar
          </span>
        </motion.button>

      </motion.form>

      {/* Botões animados */}
      <motion.div
        className="max-w-3xl flex flex-col items-center gap-6 mt-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.6 }}
        viewport={{ once: true }}
      >

        <div className="flex flex-wrap justify-center gap-4">

          {/* Github */}
          <motion.div whileHover={{ scale: 1.2, y: -5 }}>
            <Link
              href="https://github.com/kayquemab"
              target="_blank"
              className="bg-transparent text-white px-6 py-3 rounded-lg 
                       transition-all duration-300 
                       hover:text-white flex items-center justify-center"
            >
              <Github size={24} />
            </Link>
          </motion.div>

          {/* Linkedin */}
          <motion.div whileHover={{ scale: 1.2, y: -5 }}>
            <Link
              href="https://www.linkedin.com/in/kayque-miqueias/"
              target="_blank"
              className="bg-transparent text-white px-6 py-3 rounded-lg 
                       transition-all duration-300 
                       hover:text-white flex items-center justify-center"
            >
              <Linkedin size={24} />
            </Link>
          </motion.div>

          {/* E-mail */}
          <motion.div whileHover={{ scale: 1.2, y: -5 }}>
            <Link
              href={`mailto:kayquemiqueias17@gmail.com?subject=Contato%20via%20Portfólio&body=Olá,%20tudo%20bem?%0D%0A%0D%0AGostaria%20de%20entrar%20em%20contato%20com%20você%20para%20discutir%20possíveis%20projetos%20ou%20colaborações.`}
              className="bg-transparent text-white px-6 py-3 rounded-lg 
             transition-all duration-300 
             hover:text-white flex items-center justify-center"
            >
              <Mail size={24} />
            </Link>
          </motion.div>

        </div>

      </motion.div>

    </section>

  );

}