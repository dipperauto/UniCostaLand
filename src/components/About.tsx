"use client";

import React from "react";
import Reveal from "./Reveal";

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-16 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <Reveal>
            <div className="rounded-xl border border-slate-800 bg-[#0e162a] p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Quem somos</h3>
              <p className="text-slate-300">
                A UniCosta Contabilidade oferece soluções completas para pequenas e médias empresas,
                com foco em transparência, eficiência e proximidade. Unimos tecnologia e experiência
                para simplificar processos e garantir conformidade tributária.
              </p>
              <p className="text-slate-300 mt-4">
                Nosso objetivo é ser parceira estratégica no crescimento do seu negócio,
                cuidando da burocracia enquanto você foca em resultados.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex items-center justify-center">
              <img src="/logo-unicosta.png" alt="UniCosta Contabilidade" className="h-24 w-auto opacity-90" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;