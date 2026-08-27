import Link from "next/link";
import { ArrowRight } from "lucide-react";

const estilos = {
  claro: "border-[#43b9ff] bg-[#43b9ff] text-[#090b0a] hover:bg-[#78cdff]",
  escuro:
    "border-white/10 bg-white/[0.04] text-white/75 hover:bg-white/[0.07] hover:text-white",
};

export default function BotaoAcao({
  children,
  href,
  externo = false,
  variante = "claro",
  className = "",
  type = "button",
  disabled = false,
  onClick,
}) {
  const classes = `group inline-flex min-h-12 items-center justify-center overflow-hidden rounded-full border px-6 text-sm font-semibold transition duration-200 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 ${estilos[variante]} ${className}`;

  const conteudo = (
    <>
      <span>{children}</span>
      <span className="ml-0 flex w-0 translate-x-2 items-center overflow-hidden opacity-0 transition-all duration-200 group-hover:ml-2 group-hover:w-4 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:ml-2 group-focus-visible:w-4 group-focus-visible:translate-x-0 group-focus-visible:opacity-100">
        <ArrowRight className="size-4 shrink-0" aria-hidden="true" />
      </span>
    </>
  );

  if (href && externo) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {conteudo}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} className={classes}>
        {conteudo}
      </Link>
    );
  }

  return (
    <button type={type} disabled={disabled} onClick={onClick} className={classes}>
      {conteudo}
    </button>
  );
}
