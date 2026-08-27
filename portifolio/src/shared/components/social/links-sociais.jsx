import Link from "next/link";

export default function LinksSociais({ links }) {
  return (
    <div className="flex items-center gap-2">
      {links.map(({ nome, link, icon: Icone }) => (
        <Link
          key={nome}
          href={link}
          target={link.startsWith("http") ? "_blank" : undefined}
          rel={link.startsWith("http") ? "noopener noreferrer" : undefined}
          aria-label={nome}
          title={nome}
          className="group relative flex size-11 items-center justify-center rounded-full border border-white/10 text-white/55 transition-all hover:border-[#43b9ff] hover:bg-[#43b9ff] hover:text-black"
        >
          <Icone className="size-5 stroke-[1.6]" />
          <span className="pointer-events-none absolute -bottom-8 hidden whitespace-nowrap rounded-md border border-white/10 bg-[#111411] px-2 py-1 text-[10px] text-white opacity-0 shadow-xl transition-opacity group-hover:opacity-100 sm:block">
            {nome}
          </span>
        </Link>
      ))}
    </div>
  );
}
