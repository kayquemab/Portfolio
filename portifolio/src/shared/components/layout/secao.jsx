export default function Secao({ id, children }) {
  return (
    <div id={id} className="scroll-mt-20">
      {children}
    </div>
  );
}