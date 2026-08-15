import { buscarStacks } from "@/shared/data/stacks.data";

export function filtrarTodosProjetos(projetos, busca) {
  const buscaNormalizada = busca.toLowerCase();
  return projetos.filter(
    (projeto) =>
      projeto.name.toLowerCase().includes(buscaNormalizada) ||
      projeto.descricao.toLowerCase().includes(buscaNormalizada) ||
      buscarStacks(projeto.tecnologias).some((stack) =>
        stack.nome.toLowerCase().includes(buscaNormalizada),
      ),
  );
}
