export function filtrarCertificados(certificados, busca) {
  const termo = busca.toLowerCase().trim();

  return certificados.filter(
    (grupo) =>
      grupo.instituicao.toLowerCase().includes(termo) ||
      grupo.certificados.some((certificado) =>
        certificado.titulo.toLowerCase().includes(termo),
      ),
  );
}