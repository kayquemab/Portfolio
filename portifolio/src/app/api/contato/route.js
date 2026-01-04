import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs"; // garante que roda em Node (não Edge)

const resend = new Resend(process.env.RESEND_API_KEY);

function isEmail(s) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(s || "").trim());
}

export async function POST(req) {
    try {
        const body = await req.json();
        const nome = (body?.nome || "").trim();
        const email = (body?.email || "").trim();
        const mensagem = (body?.mensagem || "").trim();

        if (!nome || !email || !mensagem) {
            return NextResponse.json(
                { ok: false, message: "Preencha todos os campos." },
                { status: 400 }
            );
        }

        if (!isEmail(email)) {
            return NextResponse.json(
                { ok: false, message: "E-mail inválido." },
                { status: 400 }
            );
        }

        // opcional: limite anti-spam
        if (mensagem.length > 5000) {
            return NextResponse.json(
                { ok: false, message: "Mensagem muito longa." },
                { status: 400 }
            );
        }

        const to = process.env.CONTACT_TO || "kayquemiqueias17@gmail.com";

        // DEV/teste: funciona em muitos casos, mas em produção o ideal é domínio verificado no Resend
        const from = "Portfolio <onboarding@resend.dev>";

        const { data, error } = await resend.emails.send({
            from,
            to,
            replyTo: email, // quando você responder no Gmail, vai responder pro usuário
            subject: `Contato do portfólio: ${nome}`,
            text: `Nome: ${nome}\nEmail: ${email}\n\nMensagem:\n${mensagem}`,
        });

        if (error) {
            return NextResponse.json(
                { ok: false, message: "Falha ao enviar email.", error },
                { status: 500 }
            );
        }

        return NextResponse.json({ ok: true, id: data?.id });
    } catch (err) {
        return NextResponse.json(
            { ok: false, message: "Erro no servidor." },
            { status: 500 }
        );
    }
}
