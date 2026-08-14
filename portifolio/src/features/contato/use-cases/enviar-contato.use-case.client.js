import { enviarContatoRepositoryClient } from "../repositories/contato.repository.client";

export async function enviarContatoUseCaseClient(formulario) {
  const payload = {
    nome: formulario.nome.trim(),
    email: formulario.email.trim(),
    mensagem: formulario.mensagem.trim(),
  };

  if (!payload.nome || !payload.email || !payload.mensagem) {
    throw new Error("Preencha todos os campos.");
  }

  return enviarContatoRepositoryClient(payload);
}
