"use client";

import { useState } from "react";
import { todosProjetos } from "../data/todos-projetos.data";
import { filtrarTodosProjetos } from "../utils/filtrar-todos-projetos";

export function useTodosProjetos() {
  const [busca, setBusca] = useState("");
  const [projetoSelecionado, setProjetoSelecionado] = useState(null);
  return {
    busca,
    projetosFiltrados: filtrarTodosProjetos(todosProjetos, busca),
    projetoSelecionado,
    selecionarProjeto: setProjetoSelecionado,
    setBusca,
  };
}
