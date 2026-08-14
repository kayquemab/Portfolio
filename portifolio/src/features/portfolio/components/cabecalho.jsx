"use client";

export default function Cabecalho() {
  const irParaInicio = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-transparent">
      <nav className="mx-auto flex max-w-7xl items-center px-5 py-5 sm:px-6">
        <button
          type="button"
          onClick={irParaInicio}
          className="cursor-pointer text-lg font-semibold tracking-tight text-white transition-opacity hover:opacity-70 sm:text-xl"
          aria-label="Voltar ao início"
        >
          Kayque Miqueias
        </button>
      </nav>
    </header>
  );
}
