"use client";

import { useEffect, useRef } from "react";

const ESPACAMENTO = 32;
const RAIO_PONTO = 0.75;
const RAIO_INTERACAO = 145;
const DESLOCAMENTO_MAXIMO = 9;

export default function FundoPontilhadoInterativo() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const contexto = canvas?.getContext("2d");

    if (!canvas || !contexto) return;

    const aceitaHover = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduzirMovimento = window.matchMedia("(prefers-reduced-motion: reduce)");
    const cursor = {
      x: -RAIO_INTERACAO,
      y: -RAIO_INTERACAO,
      destinoX: -RAIO_INTERACAO,
      destinoY: -RAIO_INTERACAO,
      ativo: false,
    };

    let largura = 0;
    let altura = 0;
    let animacaoId = null;

    function desenhar() {
      contexto.clearRect(0, 0, largura, altura);

      for (let y = ESPACAMENTO, linha = 1; y < altura; y += ESPACAMENTO, linha++) {
        for (let x = ESPACAMENTO, coluna = 1; x < largura; x += ESPACAMENTO, coluna++) {
          const pontoPrincipal = linha % 2 === 0 && coluna % 2 === 0;
          const distanciaX = x - cursor.x;
          const distanciaY = y - cursor.y;
          const distancia = Math.hypot(distanciaX, distanciaY);
          const influencia = cursor.ativo
            ? Math.max(0, 1 - distancia / RAIO_INTERACAO)
            : 0;
          const deslocamento = influencia * influencia * DESLOCAMENTO_MAXIMO;
          const direcaoX = distancia > 0 ? distanciaX / distancia : 0;
          const direcaoY = distancia > 0 ? distanciaY / distancia : 0;
          const raioBase = pontoPrincipal ? 1 : RAIO_PONTO;
          const opacidadeBase = pontoPrincipal ? 0.24 : 0.16;
          const raio = raioBase + influencia * 0.55;
          const opacidade = opacidadeBase + influencia * 0.46;
          const vermelho = Math.round(244 - influencia * 177);
          const verde = Math.round(244 - influencia * 59);

          contexto.beginPath();
          contexto.arc(
            x + direcaoX * deslocamento,
            y + direcaoY * deslocamento,
            raio,
            0,
            Math.PI * 2,
          );
          contexto.fillStyle = `rgba(${vermelho}, ${verde}, 255, ${opacidade})`;
          contexto.fill();
        }
      }
    }

    function animar() {
      cursor.x += (cursor.destinoX - cursor.x) * 0.18;
      cursor.y += (cursor.destinoY - cursor.y) * 0.18;
      desenhar();

      const distanciaRestante = Math.hypot(
        cursor.destinoX - cursor.x,
        cursor.destinoY - cursor.y,
      );

      if (distanciaRestante > 0.2) {
        animacaoId = window.requestAnimationFrame(animar);
      } else {
        animacaoId = null;
      }
    }

    function iniciarAnimacao() {
      if (animacaoId === null) {
        animacaoId = window.requestAnimationFrame(animar);
      }
    }

    function redimensionar() {
      const proporcao = Math.min(window.devicePixelRatio || 1, 2);

      largura = window.innerWidth;
      altura = window.innerHeight;
      canvas.width = largura * proporcao;
      canvas.height = altura * proporcao;
      canvas.style.width = `${largura}px`;
      canvas.style.height = `${altura}px`;
      contexto.setTransform(proporcao, 0, 0, proporcao, 0, 0);
      desenhar();
    }

    function moverCursor(evento) {
      if (!aceitaHover.matches || reduzirMovimento.matches) return;

      if (!cursor.ativo) {
        cursor.x = evento.clientX;
        cursor.y = evento.clientY;
      }

      cursor.destinoX = evento.clientX;
      cursor.destinoY = evento.clientY;
      cursor.ativo = true;
      iniciarAnimacao();
    }

    function removerCursor() {
      cursor.ativo = false;
      cursor.destinoX = -RAIO_INTERACAO;
      cursor.destinoY = cursor.y;
      iniciarAnimacao();
    }

    redimensionar();
    window.addEventListener("resize", redimensionar);
    window.addEventListener("pointermove", moverCursor, { passive: true });
    document.documentElement.addEventListener("pointerleave", removerCursor);

    return () => {
      window.removeEventListener("resize", redimensionar);
      window.removeEventListener("pointermove", moverCursor);
      document.documentElement.removeEventListener("pointerleave", removerCursor);

      if (animacaoId !== null) {
        window.cancelAnimationFrame(animacaoId);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0"
    />
  );
}
