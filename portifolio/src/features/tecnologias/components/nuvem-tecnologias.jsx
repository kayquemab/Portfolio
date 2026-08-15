"use client";

import { Cloud } from "react-icon-cloud";
import { renderToStaticMarkup } from "react-dom/server";
import { stacks } from "@/shared/data/stacks.data";

const cloudProps = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
  },
};

function renderizarIcone({ nome, icone: Icone, cor }) {
  const svg = renderToStaticMarkup(
    <Icone color={cor} size={42} aria-hidden="true" />,
  );
  const src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;

  return (
    <a key={nome} title={nome} onClick={(event) => event.preventDefault()}>
      <img src={src} width={42} height={42} alt={nome} />
    </a>
  );
}

export default function NuvemTecnologias() {
  return (
    <Cloud
      id="nuvem-tecnologias"
      containerProps={cloudProps.containerProps}
      options={cloudProps.options}
    >
      {stacks.map(renderizarIcone)}
    </Cloud>
  );
}
