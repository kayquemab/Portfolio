import GridResponsivo from "@/shared/components/layout/grid-responsivo";
import CartaoCertificado from "./cartao-certificado";

export default function ListaCertificados({ busca, certificados, aoAbrir }) {
  if (certificados.length === 0) {
    return (
      <p className="mt-6 text-center text-lg text-white/60">
        Nenhum certificado encontrado para "<strong>{busca}</strong>".
      </p>
    );
  }

  return (
    <GridResponsivo>
      {certificados.map((certificado, index) => (
        <CartaoCertificado key={certificado.titulo} certificado={certificado} index={index} aoAbrir={() => aoAbrir(certificado)} />
      ))}
    </GridResponsivo>
  );
}
