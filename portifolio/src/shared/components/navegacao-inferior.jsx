"use client";

import {
  Code2,
  FolderOpen,
  GraduationCap,
  Home,
  Mail,
} from "lucide-react";
import { useEffect, useState } from "react";

const opcoes = [
  { id: "inicio", label: "Início", icon: Home },
  { id: "tecnologias", label: "Tecnologias", icon: Code2 },
  { id: "formacao", label: "Formação", icon: GraduationCap },
  { id: "projetos", label: "Projetos", icon: FolderOpen },
  { id: "contato", label: "Contato", icon: Mail },
];

export default function NavegacaoInferior() {
  const [opcaoAtiva, setOpcaoAtiva] = useState("inicio");

  useEffect(() => {
    const secoes = opcoes
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visivel = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visivel) setOpcaoAtiva(visivel.target.id);
      },
      { rootMargin: "-35% 0px -50%", threshold: [0, 0.15, 0.4] },
    );

    secoes.forEach((secao) => observer.observe(secao));
    return () => observer.disconnect();
  }, []);

  const navegarPara = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpcaoAtiva(id);
  };

  return (
    <nav
      className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 sm:bottom-6"
      aria-label="Navegação principal"
    >
      <div className="flex items-center gap-1 rounded-[20px] border border-white/[0.08] bg-neutral-950/95 p-1 shadow-2xl shadow-black/50 backdrop-blur-xl sm:gap-1.5 sm:rounded-[22px]">
        {opcoes.map(({ id, label, icon: Icone }) => {
          const ativa = opcaoAtiva === id;

          return (
            <button
              key={id}
              type="button"
              onClick={() => navegarPara(id)}
              aria-label={label}
              aria-current={ativa ? "page" : undefined}
              title={label}
              className={[
                "group relative flex size-10 cursor-pointer items-center justify-center rounded-2xl text-white/55 transition-all duration-300 hover:text-white sm:size-11",
                ativa ? "bg-neutral-800 text-white" : "hover:bg-white/[0.06]",
              ].join(" ")}
            >
              <Icone className="size-[19px] stroke-[1.5] sm:size-5" />
              <span className="pointer-events-none absolute -top-9 hidden whitespace-nowrap rounded-md bg-neutral-800 px-2 py-1 text-[11px] text-white opacity-0 transition-opacity group-hover:opacity-100 sm:block">
                {label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
