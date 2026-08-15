export function filtrarCertificados(certificados, busca) {
  const buscaNormalizada = busca.toLowerCase().trim();
  return certificados.filter((certificado) =>
    [certificado.titulo, certificado.org, certificado.data]
      .some((valor) => valor.toLowerCase().includes(buscaNormalizada)),
  );
}
