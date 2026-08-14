export async function enviarContatoRepositoryClient(payload) {
  const resposta = await fetch("/api/contato", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const dados = await resposta.json().catch(() => ({}));

  if (!resposta.ok || dados?.ok === false) {
    throw new Error(dados?.message || "Falha ao enviar. Tente novamente.");
  }

  return dados;
}
