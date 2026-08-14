"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, GraduationCap } from "lucide-react";
import Link from "next/link";
import CabecalhoSecao from "@/shared/components/cabecalho-secao";

const formacoes = [
  {
    instituicao: "Universidade Cruzeiro do Sul",
    titulo: "Análise e Desenvolvimento de Sistemas",
    tipo: "Tecnólogo",
    periodo: "Fev 2022 — Dez 2024",
    status: "Concluído",
  },
  {
    instituicao: "Impacta",
    titulo: "Full Stack Development",
    tipo: "Pós-graduação",
    periodo: "Próxima formação",
    status: "Planejada",
    link: "https://digital.impacta.com.br/curso/full-stack-development?utm_variant=videopage&utm_variant_id=44",
  },
  {
    instituicao: "FIAP",
    titulo: "Software Architecture",
    tipo: "Pós-graduação",
    periodo: "Próxima formação",
    status: "Planejada",
    link: "https://postech.fiap.com.br/curso/software-architecture",
  },
  // {
  //   instituicao: "Nome da instituição",
  //   titulo: "Nome do curso",
  //   tipo: "Pós-graduação",
  //   periodo: "2027 — 2028",
  //   status: "Planejada",
  //   link: "https://exemplo.com",
  // },
];

const certificacoes = [
  {
    titulo: "AWS Certified Cloud Practitioner",
    nivel: "Foundational",
    foco: "Fundamentos de nuvem e dos principais serviços da AWS.",
    selo: "Cloud Practitioner",
    link: "https://aws.amazon.com/certification/certified-cloud-practitioner/",
  },
  {
    titulo: "AWS Certified AI Practitioner",
    nivel: "Foundational",
    foco: "Conceitos de inteligência artificial, machine learning e IA generativa.",
    selo: "AI Practitioner",
    link: "https://aws.amazon.com/certification/certified-ai-practitioner/",
  },
  {
    titulo: "AWS Certified Developer – Associate",
    nivel: "Associate",
    foco: "Desenvolvimento, implantação, teste e depuração de aplicações na AWS.",
    selo: "Developer",
    link: "https://aws.amazon.com/certification/certified-developer-associate/",
  },
  // {
  //   titulo: "Nome da certificação",
  //   nivel: "Foundational",
  //   foco: "Descrição objetiva da certificação.",
  //   selo: "Nome curto",
  //   link: "https://aws.amazon.com/certification/",
  // },
];

const animacaoCard = {
  hidden: { opacity: 0, y: 20 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: index * 0.08 },
  }),
};

export default function FormacaoCertificacoes() {
  return (
    <section
      id="certificados"
      className="flex min-h-screen flex-col items-center justify-center px-4 py-14 sm:px-6 sm:py-20 md:px-10 md:py-24 lg:px-16 lg:py-32"
    >
      <div className="w-full max-w-4xl">
        <CabecalhoSecao
          rotulo="Jornada profissional"
          titulo="Formação & Certificações"
          descricao="Uma base sólida em desenvolvimento e os próximos passos da minha especialização em full stack e cloud."
        />

        <div className="mb-10 md:mb-16">
          <div className="mb-4 flex items-end justify-between gap-4 sm:mb-5">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-white/35">
                01
              </p>
              <h3 className="mt-1 text-xl font-semibold text-white">Formação</h3>
            </div>
            <span className="text-xs text-white/35">{formacoes.length} cursos</span>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] divide-y divide-white/[0.07] sm:overflow-visible sm:rounded-none sm:border-x-0 sm:border-b-0 sm:border-t sm:bg-transparent sm:divide-y-0">
            {formacoes.map((formacao, index) => (
              <motion.article
                key={`${formacao.instituicao}-${formacao.titulo}`}
                className="group grid grid-cols-[40px_minmax(0,1fr)_40px] items-start gap-x-3 px-4 py-5 text-left sm:flex sm:items-center sm:gap-5 sm:border-b sm:border-white/10 sm:px-0 sm:py-6"
                variants={animacaoCard}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                custom={index}
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/[0.07] text-white sm:size-11">
                  <GraduationCap className="size-[18px]" />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <p className="text-[10px] font-medium uppercase tracking-wider text-white/40 sm:text-xs">
                      {formacao.instituicao}
                    </p>
                    <span className="rounded-full border border-white/10 px-2 py-0.5 text-[9px] text-white/50 sm:px-2.5 sm:text-[10px]">
                      {formacao.status}
                    </span>
                  </div>
                  <h4 className="text-[15px] font-semibold leading-snug text-white sm:text-lg">
                    {formacao.titulo}
                  </h4>
                  <p className="mt-2 text-xs leading-5 text-gray-400">
                    {formacao.tipo} <span className="mx-2 text-white/20">•</span>{" "}
                    {formacao.periodo}
                  </p>
                </div>

                {formacao.link ? (
                  <a
                    href={formacao.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Conhecer ${formacao.titulo}`}
                    className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-white/60 transition-colors hover:bg-white hover:text-neutral-950 sm:size-11"
                  >
                    <ExternalLink className="size-4" />
                  </a>
                ) : (
                  <span className="size-10 shrink-0 sm:size-11" />
                )}
              </motion.article>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-4 flex items-end justify-between gap-4 sm:mb-5">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-white/35">
                02
              </p>
              <h3 className="mt-1 text-xl font-semibold text-white">
                Próximas certificações
              </h3>
            </div>
            <Link
              href="/certificados"
              className="hidden items-center gap-2 text-xs font-medium text-white/55 transition-colors hover:text-white sm:flex"
            >
              Certificados concluídos
              <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] divide-y divide-white/[0.07] sm:overflow-visible sm:rounded-none sm:border-x-0 sm:border-b-0 sm:border-t sm:bg-transparent sm:divide-y-0">
            {certificacoes.map((certificacao, index) => (
              <motion.a
                key={certificacao.titulo}
                href={certificacao.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Conhecer ${certificacao.titulo}`}
                className="group grid grid-cols-[48px_minmax(0,1fr)_36px] items-start gap-x-3 px-4 py-5 text-left sm:flex sm:items-center sm:gap-5 sm:border-b sm:border-white/10 sm:px-0 sm:py-6"
                variants={animacaoCard}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={formacoes.length + index}
              >
                <div className="flex size-12 shrink-0 flex-col items-center justify-center rounded-xl border border-white/[0.08] bg-neutral-900 text-center text-white/75 sm:hidden">
                  <span className="text-[9px] font-semibold tracking-wide">AWS</span>
                  <span className="mt-0.5 text-[7px] uppercase tracking-wider text-white/30">
                    {certificacao.nivel === "Associate" ? "Associate" : "Found."}
                  </span>
                </div>

                <div
                  className="hidden size-20 shrink-0 flex-col items-center justify-center bg-gradient-to-br from-neutral-600 to-neutral-950 px-3 text-center text-white ring-1 ring-white/15 sm:flex"
                  style={{
                    clipPath:
                      "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)",
                  }}
                >
                  <span className="text-[10px] font-light">aws</span>
                  <span className="my-0.5 h-px w-9 bg-white/40" />
                  <strong className="text-[9px] leading-tight">
                    {certificacao.selo}
                  </strong>
                </div>

                <div className="min-w-0 flex-1">
                  <p className="mb-1.5 text-[9px] font-medium uppercase tracking-[0.16em] text-white/35 sm:mb-2 sm:text-[10px] sm:tracking-[0.18em]">
                    AWS • {certificacao.nivel}
                  </p>
                  <h4 className="text-[15px] font-semibold leading-snug text-white sm:text-base">
                    {certificacao.titulo}
                  </h4>
                  <p className="mt-2 max-w-2xl text-xs leading-5 text-gray-400 sm:text-sm sm:leading-6">
                    {certificacao.foco}
                  </p>
                </div>

                <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-white/60 transition-colors group-hover:bg-white group-hover:text-neutral-950 sm:size-10">
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </motion.a>
            ))}
          </div>

          <Link
            href="/certificados"
            className="mt-4 flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/10 text-sm font-medium text-white/70 sm:hidden"
          >
            Ver certificados concluídos
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
