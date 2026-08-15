"use client";

import { buscarStack } from "@/shared/data/stacks.data";

export default function IconeStack({ nome, className = "size-5" }) {
  const stack = buscarStack(nome);

  if (!stack) return null;

  const Icone = stack.icone;

  return <Icone className={className} style={{ color: stack.cor }} />;
}
