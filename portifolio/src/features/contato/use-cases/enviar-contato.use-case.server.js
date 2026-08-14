import { enviarContatoRepositoryServer } from "../repositories/contato.repository.server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function enviarContatoUseCaseServer(body) {
  const contato = {
    nome: String(body?.nome || "").trim(),
    email: String(body?.email || "").trim(),
    mensagem: String(body?.mensagem || "").trim(),
  };

  if (!contato.nome || !contato.email || !contato.mensagem) {
    throw new ErroContato("Preencha todos os campos.", 400);
  }

  if (!emailPattern.test(contato.email)) {
    throw new ErroContato("E-mail inválido.", 400);
  }

  if (contato.mensagem.length > 5000) {
    throw new ErroContato("Mensagem muito longa.", 400);
  }

  return enviarContatoRepositoryServer(contato);
}

export class ErroContato extends Error {
  constructor(message, status = 500) {
    super(message);
    this.status = status;
  }
}
