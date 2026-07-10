"use client";

export default function Header({ scrollToSection }) {

  return (

    <header className="fixed top-0 left-0 w-full z-50 bg-transparent">

      <nav className="max-w-7xl mx-auto px-6 py-5 flex justify-center md:justify-between items-center">

        {/* Logo */}
        <h1 className="text-xl font-semibold tracking-tight text-white dark:text-white font-sans">

          {/* No mobile, o nome some */}
          <span className="block md:hidden"></span>

          {/* Desktop: nome completo */}
          <ul>
            <li>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="hidden md:block hover:opacity-70 transition-opacity cursor-pointer"
              >
                Kayque Miqueias
              </button>
            </li>
          </ul>

        </h1>

        {/* Links */}
        <ul className="flex items-center gap-6 text-sm font-medium text-gray-200 dark:text-gray-200 font-sans">

          {/* Sobre mim */}
          <li>
            <button
              onClick={() => scrollToSection("apresentacao")}
              className="hover:opacity-70 transition-opacity cursor-pointer"
            >
              Sobre mim
            </button>
          </li>

          {/* Projetos */}
          <li>
            <button
              onClick={() => scrollToSection("projetos")}
              className="hover:opacity-70 transition-opacity cursor-pointer"
            >
              Projetos
            </button>
          </li>

          {/* Contato */}
          <li>
            <button
              onClick={() => scrollToSection("contato")}
              className="hover:opacity-70 transition-opacity cursor-pointer"
            >
              Contato
            </button>
          </li>

        </ul>

      </nav>

    </header>

  );

}