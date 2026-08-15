import { enviarContatoRepositoryClient } from "../repositories/contato.repository.client";

export async function enviarContatoUseCaseClient(formulario) {
  const nome = formulario.nome.trim();
  const email = formulario.email.trim();
  const mensagem = formulario.mensagem.trim();
  const tiposProjeto = formulario.tiposProjeto || [];
  const contextoProjeto = tiposProjeto.length
    ? `Interesse: ${tiposProjeto.join(", ")}\n\n`
    : "";

  if (!nome || !email || !mensagem) {
    throw new Error("Preencha todos os campos.");
  }

  const payload = {
    nome,
    email,
    mensagem: `${contextoProjeto}${mensagem}`,
  };

  return enviarContatoRepositoryClient(payload);
}
