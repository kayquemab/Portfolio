import { Award } from "lucide-react";

export default function ListaCertificados({
  busca,
  certificados,
  aoAbrir,
}) {
  const grupos = certificados.filter(
    (grupo) => grupo.certificados.length > 0,
  );

  if (grupos.length === 0) {
    return (
      <p className="mt-6 text-center text-lg text-white/55">
        Nenhum certificado encontrado para "<strong>{busca}</strong>".
      </p>
    );
  }

  return (
    <div className="grid w-full max-w-[1000px] grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {grupos.map((grupo) => (
        <button
          key={grupo.instituicao}
          type="button"
          onClick={() => aoAbrir(grupo)}
          className="group flex w-72 cursor-pointer flex-col items-center"
        >
          <div className="grid h-64 w-72 grid-cols-2 place-items-center content-center gap-x-6 gap-y-7 rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition duration-200 group-hover:bg-white/[0.07]">
            {grupo.certificados.slice(0, 4).map((certificado) => {
              const imagem = certificado.imagem
                ? `/${certificado.imagem.replace(/^\/+/, "")}`
                : null;

              return (
                <div
                  key={certificado.titulo}
                  className="relative flex h-20 w-28 items-center justify-center"
                >
                  <Award className="absolute size-11 text-white/20" />

                  {imagem && (
                    <img
                      src={imagem}
                      alt=""
                      className="relative z-10 max-h-20 max-w-28 object-contain"
                      onError={(event) => {
                        event.currentTarget.style.display = "none";
                      }}
                    />
                  )}
                </div>
              );
            })}
          </div>

          <span className="mt-3 w-full truncate text-center text-base text-white">
            {grupo.instituicao}
          </span>
        </button>
      ))}
    </div>
  );
}
