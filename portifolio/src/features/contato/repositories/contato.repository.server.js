import { Resend } from "resend";

export async function enviarContatoRepositoryServer({ nome, email, mensagem }) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error("Serviço de e-mail não configurado.");
  }

  const resend = new Resend(apiKey);
  const to = process.env.CONTACT_TO || "kayquemiqueias17@gmail.com";

  const { data, error } = await resend.emails.send({
    from: "Portfolio <onboarding@resend.dev>",
    to,
    replyTo: email,
    subject: `Contato do portfólio: ${nome}`,
    text: `Nome: ${nome}\nEmail: ${email}\n\nMensagem:\n${mensagem}`,
  });

  if (error) {
    throw new Error("Falha ao enviar e-mail.");
  }

  return { id: data?.id };
}
