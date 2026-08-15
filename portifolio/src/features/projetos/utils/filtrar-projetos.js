export function filtrarProjetos(projetos, busca) {
  const buscaNormalizada = busca.toLowerCase();
  return projetos.filter(
    (projeto) =>
      projeto.name.toLowerCase().includes(buscaNormalizada) ||
      projeto.descricao.toLowerCase().includes(buscaNormalizada) ||
      projeto.tecnologias.some((tecnologia) => tecnologia.toLowerCase().includes(buscaNormalizada)),
  );
}
