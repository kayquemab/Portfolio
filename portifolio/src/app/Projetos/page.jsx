"use client";

import { motion } from "framer-motion";
import { House, Search } from "lucide-react";
import { useState } from "react";

export default function Projetos() {
    const projetos = [
        {
            name: "Projeto: Costs",
            descricao: "Sistema para gerenciar orçamentos e custos de projetos.",
            site: "https://costs-projeto.vercel.app/",
            github: "https://github.com/kayquemab/Projeto_Costs",
            video: "/VideosProjetos/video_costs.mp4",
        },
        {
            name: "Projeto: 100 Algotitmos",
            descricao: "Repositório com 100 algoritmos de lógica de programação.",
            github: "https://github.com/kayquemab/Projeto_Algoritmos",
            video: "/VideosProjetos/video_algoritmos.mp4",
        },
        {
            name: "Projeto: Google Glass",
            descricao: "Site informativo sobre o Google Glass e suas especificações.",
            site: "https://google-glass-projeto.vercel.app/",
            github: "https://github.com/kayquemab/Projeto_GoogleGlass",
            video: "/VideosProjetos/video_googleglass.mp4",
        },
        {
            name: "Projeto: PokeNext",
            descricao: "Sistema informativo sobre o mundo Pokémon.",
            site: "https://poke-next-projeto.vercel.app/",
            github: "https://github.com/kayquemab/Projeto_PokeNext",
            video: "/VideosProjetos/video_pokenext.mp4",
        },
        {
            name: "Projeto: StarBucks",
            descricao: "Clone da página inicial do StarBucks com design responsivo.",
            site: "https://star-bucks-projeto.vercel.app/",
            github: "https://github.com/kayquemab/Projeto_StarBucks",
            video: "/VideosProjetos/video_starbucks.mp4",
        },
        {
            name: "Projeto: Food",
            descricao:
                "Criação e desenvolvimento de uma página voltada para um site gastronômico.",
            site: "https://food-projeto.vercel.app/",
            github: "https://github.com/kayquemab/Projeto_Food",
            video: "/VideosProjetos/video_food.mp4",
        },
        {
            name: "Projeto: Clone Spotify",
            descricao:
                "Clone da interface do Spotify com funcionalidades básicas de reprodução de música.",
            site: "https://clone-spotify-projeto.vercel.app/",
            github: "https://github.com/kayquemab/Projeto_CloneSpotify",
            video: "/VideosProjetos/video_spotify.mp4",
        },
        {
            name: "Projeto: Text To Voice",
            descricao: "Sistema que converte texto em voz utilizando API",
            site: "https://text-to-voice-projeto.vercel.app/",
            github: "https://github.com/kayquemab/Projeto_TextToVoice",
            video: "/VideosProjetos/video_texttovoice.mp4",
        },
        {
            name: "Projeto: Socially",
            descricao: "Rede social para conectar pessoas com interesses em comum.",
            site: "https://socially-projeto.vercel.app/",
            github: "https://github.com/kayquemab/Projeto_Socially",
            video: "/VideosProjetos/video_socially.mp4",
        },
        {
            name: "Projeto: Tela de login",
            descricao: "Tela de login com design moderno e responsivo.",
            site: "https://tela-de-login-projeto.vercel.app/",
            github: "https://github.com/kayquemab/Projeto_TelaDeLogin",
            video: "/VideosProjetos/video_teladelogin.mp4",
        },
        {
            name: "Projeto: Buscar Imagens",
            descricao:
                "Sistema para buscar e filtrar imagens por categorias utilizando API.",
            site: "https://buscar-imagens-projeto.vercel.app/",
            github: "https://github.com/kayquemab/Projeto_BuscarImagens",
            video: "/VideosProjetos/video_buscarimagens.mp4",
        },
        {
            name: "Projeto: Cia. Consagração",
            descricao:
                "Site institucional para a Cia. Consagração, especializada em eventos e celebrações.",
            site: "https://cia-consagracao-projeto.vercel.app/",
            github: "https://github.com/kayquemab/Projeto_CiaConsagracao",
            video: "/VideosProjetos/video_ciaconsagracao.mp4",
        },
        {
            name: "Projeto: Clone Amazon",
            descricao:
                "Clone da interface do Amazon com funcionalidades básicas de navegação e compra.",
            site: "https://clone-amazon-projeto.vercel.app/",
            github: "https://github.com/kayquemab/Projeto_CloneAmazon",
            video: "/VideosProjetos/video_amazon.mp4",
        },
    ];

    // Estado da busca
    const [busca, setBusca] = useState("");

    // Filtrar por NOME ou DESCRIÇÃO
    const projetosFiltrados = projetos.filter(
        (proj) =>
            proj.name.toLowerCase().includes(busca.toLowerCase()) ||
            proj.descricao.toLowerCase().includes(busca.toLowerCase())
    );

    // Variantes de animação
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
                type: "spring",
                stiffness: 300,
                damping: 20,
            },
        }),
    };

    return (
        <section
            className="
        flex flex-col justify-center items-center
        px-4 sm:px-6 md:px-10 lg:px-0
        text-center
        pb-16 sm:pb-20 md:pb-24 lg:pb-32
        pt-16 sm:pt-20 md:pt-24 lg:pt-8
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
                Meus Projetos
            </motion.h2>

            {/* Barra de Pesquisa */}
            <div className="w-full max-w-md mb-10 relative">
                <Search size={18} className="absolute left-3 top-3 text-white/60" />

                <input
                    type="text"
                    placeholder="Pesquisar por projeto ou descrição..."
                    value={busca}
                    onChange={(e) => setBusca(e.target.value)}
                    className="
            w-full pl-10 pr-4 py-2 rounded-xl
            bg-neutral-900 border border-white/10
            text-white placeholder-white/40
            focus:outline-none focus:ring-2 focus:ring-white/30
          "
                />
            </div>

            {/* Cards */}
            <div className="grid w-full items-start gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4">
                {projetosFiltrados.length > 0 ? (
                    projetosFiltrados.map((proj, i) => (
                        <motion.div
                            key={proj.name}
                            className="
                overflow-hidden rounded-xl
                border border-white/10
                bg-neutral-800
                text-left shadow-md
                flex flex-col
              "
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={i}
                            whileHover={{ scale: 1.04 }}
                        >
                            {/* Vídeo do projeto com altura padronizada */}
                            {proj.video && (
                                <div className="relative h-[180px] w-full overflow-hidden bg-neutral-700">
                                    <video
                                        src={proj.video}
                                        controls
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        className="
                      absolute inset-0
                      h-full w-full
                      object-cover
                    "
                                    />
                                </div>
                            )}

                            {/* Conteúdo do card com altura padronizada */}
                            <div className="flex h-[128px] flex-col px-3 py-3">
                                {/* Nome do projeto */}
                                <h3 className="text-sm sm:text-base font-semibold text-white leading-snug">
                                    {proj.name}
                                </h3>

                                {/* Descrição */}
                                <p className="mt-2 line-clamp-2 text-[11px] sm:text-xs leading-relaxed text-gray-300">
                                    {proj.descricao}
                                </p>

                                {/* Botões */}
                                <div className="mt-auto flex flex-wrap gap-2 pt-3">
                                    {proj.site && (
                                        <a
                                            href={proj.site}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="
                        rounded-md bg-white px-3 py-1
                        text-[11px] sm:text-xs font-medium text-black
                        hover:opacity-80 transition cursor-pointer
                      "
                                        >
                                            Ver Projeto
                                        </a>
                                    )}

                                    {proj.github && (
                                        <a
                                            href={proj.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="
                        rounded-md border border-white/50 px-3 py-1
                        text-[11px] sm:text-xs font-medium text-white
                        hover:opacity-80 transition cursor-pointer
                      "
                                        >
                                            GitHub
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))
                ) : (
                    <p className="col-span-full text-white/60 text-lg mt-6 text-center">
                        Nenhum projeto encontrado para "<strong>{busca}</strong>".
                    </p>
                )}
            </div>

            {/* Botão Home */}
            <motion.a
                href="/"
                rel="noopener noreferrer"
                className="
          mt-8 px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg
          shadow-md inline-block transition-none cursor-pointer
        "
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 70, damping: 15, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{
                    scale: 1.12,
                    y: -6,
                    boxShadow: "0px 12px 25px rgba(0,0,0,0.35)",
                    transition: { duration: 0.15, ease: "easeOut" },
                }}
                whileTap={{
                    scale: 0.96,
                    y: 0,
                    boxShadow: "0px 4px 10px rgba(0,0,0,0.25)",
                    transition: { duration: 0.1, ease: "easeIn" },
                }}
            >
                <span className="inline-flex items-center gap-2">
                    <House size={16} />
                    Voltar para Home
                </span>
            </motion.a>
        </section>
    );
}