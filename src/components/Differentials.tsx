"use client";

import React from "react";
import { CheckCircle2, Clock, Shield, Users } from "lucide-react";
import Reveal from "./Reveal";

const points = [
  { icon: CheckCircle2, text: "Atendimento consultivo e humanizado" },
  { icon: Shield, text: "Conformidade e segurança nas obrigações" },
  { icon: Clock, text: "Pontualidade na entrega de guias e declarações" },
  { icon: Users, text: "Suporte para MEI, ME e empresas em crescimento" },
];

const Differentials: React.FC = () => {
  return (
    <section id="diferenciais" className="py-16 bg-gradient-to-b from-transparent to-[#0b142a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
                Por que escolher a UniCosta?
              </h2>
              <ul className="space-y-4">
                {points.map((p) => {
                  const Icon = p.icon;
                  return (
                    <li key={p.text} className="flex items-start gap-3">
                      <span className="mt-1 text-sky-400">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="text-slate-300">{p.text}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="rounded-xl border border-slate-800 bg-[#0e162a] p-6">
              <p className="text-slate-300">
                Com atuação em Manaus/AM, ajudamos empresas a crescer com segurança por meio de uma contabilidade
                moderna e acessível. Nosso compromisso é simplificar a burocracia para você focar no seu negócio.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 items-center">
                <img src="/logo-unicosta.png" alt="UniCosta" className="h-10 w-auto" />
                <span className="text-sm text-slate-400">Clientes satisfeitos e atendimento ágil.</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Differentials;