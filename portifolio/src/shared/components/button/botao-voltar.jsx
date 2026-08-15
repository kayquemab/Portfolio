import BotaoAcao from "./botao-acao";

export default function BotaoVoltar({ texto = "Voltar para Home" }) {
  return (
    <BotaoAcao href="/" className="mt-8">
      {texto}
    </BotaoAcao>
  );
}
