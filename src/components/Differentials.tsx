"use client";

import React from "react";
import { CheckCircle2, Clock, Shield, Users } from "lucide-react";

const points = [
  { icon: CheckCircle2, text: "Atendimento consultivo e humanizado" },
  { icon: Shield, text: "Conformidade e segurança nas obrigações" },
  { icon: Clock, text: "Pontualidade na entrega de guias e declarações" },
  { icon: Users, text: "Suporte para MEI, ME e empresas em crescimento" },
];

const Differentials: React.FC = () => {
  return (
    <section id="diferenciais" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
              Por que escolher a UniCosta?
            </h2>
            <ul className="space-y-4">
              {points.map((p) => {
                const Icon = p.icon;
                return (
                  <li key={p.text} className="flex items-start gap-3">
                    <span className="mt-1 text-blue-700">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-gray-700">{p.text}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <p className="text-gray-700">
              Com atuação em Manaus/AM, ajudamos empresas a crescer com segurança por meio de uma contabilidade
              moderna e acessível. Nosso compromisso é simplificar a burocracia para você focar no seu negócio.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <img src="/logo-unicosta.png" alt="UniCosta" className="h-10 w-auto" />
              <span className="text-sm text-gray-600">Clientes satisfeitos e atendimento ágil.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;