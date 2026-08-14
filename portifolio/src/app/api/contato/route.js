import { NextResponse } from "next/server";
import {
  ErroContato,
  enviarContatoUseCaseServer,
} from "@/features/contato/use-cases/enviar-contato.use-case.server";

export const runtime = "nodejs";

export async function POST(requisicao) {
  try {
    const corpo = await requisicao.json();
    const dados = await enviarContatoUseCaseServer(corpo);

    return NextResponse.json({ ok: true, ...dados });
  } catch (erro) {
    const status = erro instanceof ErroContato ? erro.status : 500;

    return NextResponse.json(
      { ok: false, message: erro.message || "Erro no servidor." },
      { status },
    );
  }
}
