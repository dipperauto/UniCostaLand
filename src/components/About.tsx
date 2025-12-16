"use client";

import React from "react";

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Quem somos</h3>
            <p className="text-gray-700">
              A UniCosta Contabilidade oferece soluções completas para pequenas e médias empresas,
              com foco em transparência, eficiência e proximidade. Unimos tecnologia e experiência
              para simplificar processos e garantir conformidade tributária.
            </p>
            <p className="text-gray-700 mt-4">
              Nosso objetivo é ser parceira estratégica no crescimento do seu negócio,
              cuidando da burocracia enquanto você foca em resultados.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <img src="/logo-unicosta.png" alt="UniCosta Contabilidade" className="h-24 w-auto opacity-90" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;