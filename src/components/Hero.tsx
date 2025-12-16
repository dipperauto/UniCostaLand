"use client";

import React from "react";
import { Button } from "./ui/button";
import Reveal from "./Reveal";

const Hero: React.FC = () => {
  return (
    <section className="pt-24 md:pt-28 bg-gradient-to-b from-[#0a0f1f] via-[#0b1228] to-[#0c1a36]">
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
                <Button asChild variant="outline" size="lg" className="border-slate-700 text-slate-100 hover:bg-white/5">
                  <a href="#servicos">Ver serviços</a>
                </Button>
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