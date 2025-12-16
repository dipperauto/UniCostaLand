"use client";

import React from "react";
import { Button } from "../components/ui/button";

const Hero: React.FC = () => {
  return (
    <section className="pt-24 md:pt-28 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900">
              Contabilidade que impulsiona o seu negócio
            </h1>
            <p className="text-gray-700 text-base md:text-lg">
              Abertura de empresa, regularização, escrita fiscal, folha de pagamento e imposto de renda.
              Atendimento consultivo e digital para sua empresa crescer com segurança.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a href="https://wa.me/92991825422" target="_blank" rel="noreferrer">
                  Solicitar orçamento
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#servicos">Ver serviços</a>
              </Button>
            </div>
            <div className="flex items-center gap-6 pt-2 text-sm text-gray-600">
              <div className="flex -space-x-2">
                <img src="/logo-unicosta.png" alt="UniCosta" className="h-8 w-8 rounded-full border border-gray-200 bg-white" />
                <img src="/placeholder.svg" alt="Placeholder" className="h-8 w-8 rounded-full border border-gray-200 bg-white" />
              </div>
              <span>Atendimento em Manaus/AM e consultoria digital</span>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-xl bg-white shadow-sm border border-gray-200 overflow-hidden">
              <img
                src="/logo-unicosta.png"
                alt="Marca UniCosta"
                className="object-contain w-full h-full p-8"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;