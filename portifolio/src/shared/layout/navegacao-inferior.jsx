"use client";

import {
  Code2,
  FolderOpen,
  GraduationCap,
  Home,
  Mail,
} from "lucide-react";
import DockHover from "@/shared/components/navigation/dock-hover";
import { useNavegacaoSecoes } from "./use-navegacao-secoes";

const opcoes = [
  { id: "inicio", label: "Início", icon: Home },
  { id: "tecnologias", label: "Tecnologias", icon: Code2 },
  { id: "formacao", label: "Formação", icon: GraduationCap },
  { id: "projetos", label: "Projetos", icon: FolderOpen },
  { id: "contato", label: "Contato", icon: Mail },
];

const idsSecoes = opcoes.map(({ id }) => id);

export default function NavegacaoInferior() {
  const { navegarPara, secaoAtiva } = useNavegacaoSecoes(idsSecoes);

  return (
    <nav
      className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 sm:bottom-6"
      aria-label="Navegação principal"
    >
      <div className="rounded-full border border-white/[0.1] bg-[#111411]/90 p-1 shadow-2xl shadow-black/50 backdrop-blur-xl">
        <DockHover
          itens={opcoes}
          buscarChave={(opcao) => opcao.id}
          className="w-full"
          renderizarItem={({ id, label, icon: Icone }, _index, sobCursor) => {
          const ativa = secaoAtiva === id;

          return (
            <button
              type="button"
              onClick={() => navegarPara(id)}
              aria-label={label}
              aria-current={ativa ? "page" : undefined}
              title={label}
              className={[
                "relative z-[1] flex size-12 cursor-pointer items-center justify-center rounded-full text-white/55 transition-colors duration-300 hover:text-white",
                ativa ? "bg-[#43b9ff] text-[#071016] shadow-[0_0_20px_rgba(67,185,255,0.18)]" : "hover:bg-white/[0.07]",
              ].join(" ")}
            >
              <Icone
                className={`size-[22px] stroke-[1.5] transition-transform duration-300 ${sobCursor ? "-translate-y-0.5 scale-[1.18]" : ""}`}
              />
            </button>
          );
        }}
        />
      </div>
    </nav>
  );
}
