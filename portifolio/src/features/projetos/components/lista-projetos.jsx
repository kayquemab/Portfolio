import GridResponsivo from "@/shared/components/layout/grid-responsivo";
import CartaoProjeto from "./cartao-projeto";

export default function ListaProjetos({ busca, projetos, aoAbrir }) {
  return (
    <GridResponsivo>
      {projetos.length > 0 ? (
        projetos.map((projeto, index) => (
          <CartaoProjeto key={projeto.name} projeto={projeto} index={index} aoAbrir={() => aoAbrir(projeto)} />
        ))
      ) : (
        <p className="col-span-full text-white/60 text-lg mt-6 text-center">
          Nenhum projeto encontrado para "<strong>{busca}</strong>".
        </p>
      )}
    </GridResponsivo>
  );
}
