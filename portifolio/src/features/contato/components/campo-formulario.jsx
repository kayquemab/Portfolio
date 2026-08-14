export default function CampoFormulario({
  id,
  tipo = "text",
  valor,
  aoAlterar,
  placeholder,
  icon: Icone,
  multiline = false,
}) {
  const classes = [
    "w-full rounded-lg border border-gray-700 bg-transparent py-3 pr-4 text-white",
    "placeholder-gray-400 transition-colors hover:border-gray-300",
    "focus:border-gray-300 focus:outline-none",
    Icone ? "pl-10" : "pl-4",
    multiline ? "resize-none" : "",
  ].join(" ");

  return (
    <div className="relative">
      {Icone && (
        <Icone
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />
      )}

      {multiline ? (
        <textarea
          id={id}
          value={valor}
          onChange={(event) => aoAlterar(event.target.value)}
          placeholder={placeholder}
          rows={5}
          className={classes}
        />
      ) : (
        <input
          id={id}
          type={tipo}
          value={valor}
          onChange={(event) => aoAlterar(event.target.value)}
          placeholder={placeholder}
          className={classes}
        />
      )}
    </div>
  );
}
