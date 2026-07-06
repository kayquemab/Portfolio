"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { House, Search } from "lucide-react";

import ProjetoModal from "@/components/ProjetoModal";
import ResponsiveGrid from "@/components/common/ResponsiveGrid";

export default function Projetos() {
    const [busca, setBusca] = useState("");
    const [projetoSelecionado, setProjetoSelecionado] = useState(null);

    const projetos = [
        {
            name: "Projeto: Costs",
            descricao: "Sistema para gerenciar orçamentos e custos de projetos.",
            descricaoDetalhada:
                "Sistema desenvolvido para praticar conceitos de React, rotas, componentes, formulários e gerenciamento de dados. A proposta do projeto é permitir o cadastro, visualização e acompanhamento de custos relacionados a diferentes projetos.",
            tecnologias: ["React", "JavaScript"],
            site: "https://costs-projeto.vercel.app/",
            github: "https://github.com/kayquemab/Projeto_Costs",
            video: "/VideosProjetos/video_costs.mp4",
        },
        {
            name: "Projeto: 100 Algoritmos",
            descricao: "Repositório com 100 algoritmos de lógica de programação.",
            descricaoDetalhada:
                "Repositório criado para praticar lógica de programação através de exercícios progressivos, trabalhando raciocínio lógico, estruturas condicionais, repetições e resolução de problemas.",
            tecnologias: ["Algoritmos"],
            github: "https://github.com/kayquemab/Projeto_Algoritmos",
            video: "/VideosProjetos/video_algoritmos.mp4",
        },
        {
            name: "Projeto: Google Glass",
            descricao: "Site informativo sobre o Google Glass e suas especificações.",
            descricaoDetalhada:
                "Site informativo criado para praticar estruturação de páginas, semântica, estilização e organização de conteúdo. O projeto apresenta informações sobre o Google Glass com foco em layout, navegação e prática de HTML, CSS e JavaScript.",
            tecnologias: ["HTML5", "CSS3", "JavaScript"],
            site: "https://google-glass-projeto.vercel.app/",
            github: "https://github.com/kayquemab/Projeto_GoogleGlass",
            video: "/VideosProjetos/video_googleglass.mp4",
        },
        {
            name: "Projeto: PokeNext",
            descricao: "Sistema informativo sobre o mundo Pokémon.",
            descricaoDetalhada:
                "Aplicação desenvolvida para praticar conceitos de Next.js, consumo de dados, rotas e construção de interfaces dinâmicas. O projeto apresenta informações sobre Pokémon em uma interface simples, organizada e responsiva.",
            tecnologias: ["Next.js", "JavaScript", "Tailwind CSS"],
            site: "https://poke-next-projeto.vercel.app/",
            github: "https://github.com/kayquemab/Projeto_PokeNext",
            video: "/VideosProjetos/video_pokenext.mp4",
        },
        {
            name: "Projeto: StarBucks",
            descricao: "Clone da página inicial do StarBucks com design responsivo.",
            descricaoDetalhada:
                "Clone visual da página inicial do StarBucks desenvolvido para praticar composição de layout, responsividade, organização de seções e estilização com HTML, CSS e JavaScript.",
            tecnologias: ["HTML5", "CSS3", "JavaScript"],
            site: "https://star-bucks-projeto.vercel.app/",
            github: "https://github.com/kayquemab/Projeto_StarBucks",
            video: "/VideosProjetos/video_starbucks.mp4",
        },
        {
            name: "Projeto: Food",
            descricao:
                "Criação e desenvolvimento de uma página voltada para um site gastronômico.",
            descricaoDetalhada:
                "Página desenvolvida para praticar criação de interfaces modernas, organização visual, responsividade e apresentação de conteúdo para um site gastronômico. O foco foi trabalhar estrutura, espaçamento, imagens e chamada visual.",
            tecnologias: ["HTML5", "CSS3", "JavaScript"],
            site: "https://food-projeto.vercel.app/",
            github: "https://github.com/kayquemab/Projeto_Food",
            video: "/VideosProjetos/video_food.mp4",
        },
        {
            name: "Projeto: Clone Spotify",
            descricao:
                "Clone da interface do Spotify com funcionalidades básicas de reprodução de música.",
            descricaoDetalhada:
                "Clone da interface do Spotify desenvolvido para praticar componentização, organização visual, responsividade e criação de uma experiência parecida com um player de música.",
            tecnologias: ["React", "JavaScript", "Vite", "Tailwind CSS"],
            site: "https://clone-spotify-projeto.vercel.app/",
            github: "https://github.com/kayquemab/Projeto_CloneSpotify",
            video: "/VideosProjetos/video_spotify.mp4",
        },
        {
            name: "Projeto: Text To Voice",
            descricao: "Sistema que converte texto em voz utilizando API.",
            descricaoDetalhada:
                "Aplicação criada para converter textos em áudio, utilizando recursos de voz no navegador. O projeto foi desenvolvido para praticar manipulação de inputs, eventos, integração com API do navegador e criação de uma interface simples e funcional.",
            tecnologias: ["HTML5", "CSS3", "JavaScript"],
            site: "https://text-to-voice-projeto.vercel.app/",
            github: "https://github.com/kayquemab/Projeto_TextToVoice",
            video: "/VideosProjetos/video_texttovoice.mp4",
        },
        {
            name: "Projeto: Socially",
            descricao: "Mini página animada para apresentação de uma rede social.",
            descricaoDetalhada:
                "Página visual desenvolvida para praticar animações, composição de layout e construção de uma interface moderna. O foco do projeto foi trabalhar apresentação visual, responsividade e elementos de destaque com HTML e CSS.",
            tecnologias: ["HTML5", "CSS3"],
            site: "https://socially-projeto.vercel.app/",
            github: "https://github.com/kayquemab/Projeto_Socially",
            video: "/VideosProjetos/video_socially.mp4",
        },
        {
            name: "Projeto: Tela de Login",
            descricao: "Tela de login com design moderno e responsivo.",
            descricaoDetalhada:
                "Interface de autenticação desenvolvida para praticar construção de formulários, organização de campos, responsividade e estilização visual. O projeto tem foco em apresentação, experiência visual e estruturação de uma tela comum em aplicações web.",
            tecnologias: ["React", "JavaScript", "CSS3"],
            site: "https://tela-de-login-projeto.vercel.app/",
            github: "https://github.com/kayquemab/Projeto_TelaDeLogin",
            video: "/VideosProjetos/video_teladelogin.mp4",
        },
        {
            name: "Projeto: Buscar Imagens",
            descricao:
                "Sistema para buscar e filtrar imagens por categorias utilizando API.",
            descricaoDetalhada:
                "Aplicação desenvolvida para praticar consumo de API, busca, renderização de resultados e interação com o usuário. O projeto permite pesquisar imagens e visualizar resultados de forma simples, trabalhando lógica, eventos e manipulação de dados.",
            tecnologias: ["HTML5", "CSS3", "JavaScript"],
            site: "https://buscar-imagens-projeto.vercel.app/",
            github: "https://github.com/kayquemab/Projeto_BuscarImagens",
            video: "/VideosProjetos/video_buscarimagens.mp4",
        },
        {
            name: "Projeto: Cia. Consagração",
            descricao:
                "Site institucional para a Cia. Consagração, especializada em eventos e celebrações.",
            descricaoDetalhada:
                "Site institucional desenvolvido para apresentar a Cia. Consagração de forma profissional, com páginas organizadas, identidade visual, seções informativas e foco em responsividade. O projeto trabalha uma estrutura mais moderna com React, TypeScript, Vite, Tailwind e componentes reutilizáveis.",
            tecnologias: ["React", "TypeScript", "Vite", "Tailwind CSS",],
            site: "https://cia-consagracao-projeto.vercel.app/",
            github: "https://github.com/kayquemab/Projeto_CiaConsagracao",
            video: "/VideosProjetos/video_ciaconsagracao.mp4",
        },
        {
            name: "Projeto: Clone Amazon",
            descricao:
                "Clone da interface da Amazon com foco em layout, navegação básica e responsividade.",
            descricaoDetalhada:
                "Clone da interface da Amazon desenvolvido para praticar estruturação de layout, cards de produtos, organização visual e navegação básica em páginas web.",
            tecnologias: ["HTML5", "CSS3", "JavaScript"],
            site: "https://clone-amazon-projeto.vercel.app/",
            github: "https://github.com/kayquemab/Projeto_CloneAmazon",
            video: "",
        },
        {
            name: "Projeto: Vizinho Indica",
            descricao: "Marketplace de serviços confiáveis para comunidades e condomínios.",
            descricaoDetalhada:
                "Aplicação desenvolvida para conectar moradores a profissionais e serviços indicados pela própria comunidade, permitindo anúncios, avaliações, favoritos, mensagens e busca por categorias.",
            tecnologias: ["React", "TypeScript", "Vite", "Supabase", "PostgreSQL", "Tailwind CSS"],
            site: "https://vizinho-indica-projeto.vercel.app/",
            github: "https://github.com/kayquemab/Projeto_VizinhoIndica",
            video: "/VideosProjetos/video_vizinhoindica.mp4",
        }
    ];

    const projetosFiltrados = projetos.filter((proj) => {
        const buscaNormalizada = busca.toLowerCase();

        return (
            proj.name.toLowerCase().includes(buscaNormalizada) ||
            proj.descricao.toLowerCase().includes(buscaNormalizada) ||
            proj.tecnologias.some((tecnologia) =>
                tecnologia.toLowerCase().includes(buscaNormalizada)
            )
        );
    });

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

    const abrirModalPeloTeclado = (event, projeto) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            setProjetoSelecionado(projeto);
        }
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
            <motion.h2
                className="text-3xl md:text-4xl font-bold text-white mb-8"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                Meus Projetos
            </motion.h2>

            <div className="w-full max-w-md mb-10 relative">
                <Search size={18} className="absolute left-3 top-3 text-white/60" />

                <input
                    type="text"
                    placeholder="Pesquisar por projeto, descrição ou tecnologia..."
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

            <ResponsiveGrid>
                {projetosFiltrados.length > 0 ? (
                    projetosFiltrados.map((proj, i) => (
                        <motion.div
                            key={proj.name}
                            role="button"
                            tabIndex={0}
                            aria-label={`Abrir detalhes do ${proj.name}`}
                            className="
                                overflow-hidden rounded-xl
                                border border-white/10
                                bg-neutral-800
                                text-left shadow-md
                                flex flex-col
                                cursor-pointer
                            "
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={i}
                            whileHover={{ scale: 1.04 }}
                            onClick={() => setProjetoSelecionado(proj)}
                            onKeyDown={(event) => abrirModalPeloTeclado(event, proj)}
                        >
                            {proj.video ? (
                                <div className="relative h-[180px] w-full overflow-hidden bg-neutral-700">
                                    <video
                                        src={proj.video}
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        className="
                                            pointer-events-none
                                            absolute inset-0
                                            h-full w-full
                                            object-cover
                                        "
                                    />
                                </div>
                            ) : (
                                <div className="flex h-[180px] w-full items-center justify-center bg-neutral-700 text-sm text-white/50">
                                    Preview indisponível
                                </div>
                            )}

                            <div className="flex min-h-[150px] flex-col px-3 py-3 sm:min-h-[156px] sm:px-4 sm:py-4">
                                <h3 className="text-sm sm:text-base font-semibold text-white">
                                    {proj.name}
                                </h3>

                                <p className="mt-2 text-[11px] sm:text-xs text-gray-300">
                                    {proj.descricao}
                                </p>

                                <p className="mt-auto pt-4 text-[11px] font-medium text-white/50 sm:text-xs">
                                    Clique para ver detalhes
                                </p>
                            </div>
                        </motion.div>
                    ))
                ) : (
                    <p className="col-span-full text-white/60 text-lg mt-6 text-center">
                        Nenhum projeto encontrado para "<strong>{busca}</strong>".
                    </p>
                )}
            </ResponsiveGrid>

            <motion.a
                href="/"
                className="mt-8 px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg shadow-md inline-block transition-none cursor-pointer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 70, damping: 15, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{
                    scale: 1.12,
                    y: -6,
                    boxShadow: "0px 12px 25px rgba(0,0,0,0.35)",
                }}
                whileTap={{
                    scale: 0.96,
                    y: 0,
                }}
            >
                <span className="inline-flex items-center gap-2">
                    <House size={16} />
                    Voltar para Home
                </span>
            </motion.a>

            <ProjetoModal
                projeto={projetoSelecionado}
                onClose={() => setProjetoSelecionado(null)}
            />
        </section>
    );
}