import { Search } from "lucide-react";

export default function CampoBusca({ valor, aoAlterar, placeholder }) {
  return (
    <div className="relative mb-10 w-full max-w-md">
      <Search
        size={18}
        className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-white/50"
      />
      <input
        type="search"
        value={valor}
        onChange={(event) => aoAlterar(event.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-transparent py-3 pl-10 pr-4 text-sm text-white outline-none transition placeholder:text-white/35 hover:border-white/20 focus:border-white/30"
      />
    </div>
  );
}
