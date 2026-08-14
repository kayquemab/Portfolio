import Link from "next/link";
import { ArrowRight } from "lucide-react";

const estilos = {
  claro: "border-white bg-white text-neutral-950 hover:bg-neutral-200",
  escuro:
    "border-white/10 bg-transparent text-white/75 hover:border-white/20 hover:bg-white/[0.06] hover:text-white",
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
  const classes = `group inline-flex min-h-11 items-center justify-center overflow-hidden rounded-xl border px-5 text-sm font-semibold transition duration-200 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 ${estilos[variante]} ${className}`;

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
