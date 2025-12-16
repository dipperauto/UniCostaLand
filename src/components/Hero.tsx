"use client";

import React from "react";
import { Button } from "./ui/button";
import Reveal from "./Reveal";
import InteractiveDollarField from "./InteractiveDollarField";

const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 md:pt-28 bg-gradient-to-b from-[#0a0f1f] via-[#0b1228] to-[#0c1a36] overflow-hidden">
      {/* Mar de '$' interativo no fundo */}
      <InteractiveDollarField className="absolute inset-0 -z-10 opacity-80" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <Reveal>
              <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">
                Contabilidade que impulsiona o seu negócio
              </h1>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-slate-300 text-base md:text-lg">
                Abertura de empresa, regularização, escrita fiscal, folha de pagamento e imposto de renda.
                Atendimento consultivo e digital para sua empresa crescer com segurança.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-500 text-white">
                  <a href="https://wa.me/92991825422" target="_blank" rel="noreferrer">
                    Solicitar orçamento
                  </a>
                </Button>
                <a
                  href="https://wa.me/92991825422"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Conversar no WhatsApp"
                  className="inline-flex items-center justify-center h-12 w-12 rounded-full border border-slate-700 text-slate-100 hover:bg-white/5 transition-colors"
                >
                  <svg
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                    className="h-6 w-6"
                    fill="currentColor"
                  >
                    <path d="M19.11 17.35a4.87 4.87 0 0 1-2.06-.46c-.63-.28-1.37-.91-1.83-1.41-.62-.66-1.56-2.06-1.56-2.93 0-1.24.67-1.84 1.22-2.09.3-.14.68-.1.86.21.22.38.69 1.29.76 1.4.12.2.08.46-.1.62-.12.1-.29.25-.4.35-.12.1-.25.21-.11.44.14.24.62 1.02 1.33 1.66.92.83 1.68 1.08 1.95 1.19.23.09.37.08.5-.07.13-.15.58-.68.74-.92.16-.24.33-.2.55-.12.23.09 1.45.68 1.7.8.25.12.41.19.47.3.06.11.06.65-.15 1.28-.21.63-1.04 1.1-1.58 1.14-.54.04-1.22.04-1.39.04ZM16 28c-1.96 0-3.83-.5-5.48-1.45l-3.62.95.97-3.53A12.01 12.01 0 1 1 28 16c0 6.62-5.38 12-12 12Zm0-21.6A9.6 9.6 0 1 0 25.6 16 9.61 9.61 0 0 0 16 6.4Z" />
                  </svg>
                </a>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <div className="flex items-center gap-6 pt-2 text-sm text-slate-400">
                <div className="flex -space-x-2">
                  <img src="/logo-unicosta.png" alt="UniCosta" className="h-8 w-8 rounded-full border border-slate-700 bg-[#0b1220]" />
                  <img src="/placeholder.svg" alt="Placeholder" className="h-8 w-8 rounded-full border border-slate-700 bg-[#0b1220]" />
                </div>
                <span>Atendimento em Manaus/AM e consultoria digital</span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={150}>
            <div className="relative">
              <div className="aspect-[4/3] rounded-xl bg-[#0e162a] shadow-sm border border-slate-800 overflow-hidden">
                <img
                  src="/logo-unicosta.png"
                  alt="Marca UniCosta"
                  className="object-contain w-full h-full p-8"
                />
              </div>
              <div className="pointer-events-none absolute -inset-6 -z-10 rounded-2xl bg-blue-500/10 blur-3xl"></div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;