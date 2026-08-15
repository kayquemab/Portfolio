"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Cloud,
  fetchSimpleIcons,
  renderSimpleIcon,
} from "react-icon-cloud";
import { tecnologias } from "../data/tecnologias.data";

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

function renderIcon(icon) {
  return renderSimpleIcon({
    icon,
    bgHex: "#171717",
    fallbackHex: "#ffffff",
    minContrastRatio: 2,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (event) => event.preventDefault(),
    },
  });
}

export default function NuvemTecnologias() {
  const [data, setData] = useState(null);

  useEffect(() => {
    let ativo = true;

    fetchSimpleIcons({ slugs: tecnologias }).then((icons) => {
      if (ativo) setData(icons);
    });

    return () => {
      ativo = false;
    };
  }, []);

  const icons = useMemo(() => {
    if (!data) return null;

    return Object.values(data.simpleIcons).map(renderIcon);
  }, [data]);

  if (!icons) return null;

  return (
    <Cloud
      containerProps={cloudProps.containerProps}
      options={cloudProps.options}
    >
      {icons}
    </Cloud>
  );
}
