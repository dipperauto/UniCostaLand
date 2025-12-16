"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Building2, FilePlus2, ClipboardList, Calculator, FileText, ShieldCheck } from "lucide-react";
import Reveal from "./Reveal";

const items = [
  {
    icon: Building2,
    title: "Abertura de empresa",
    desc: "Orientação de natureza jurídica, CNAE e regime tributário, com todo o processo de registro."
  },
  {
    icon: FilePlus2,
    title: "Regularização",
    desc: "Alteração, baixa, licenças e certidões para manter sua empresa em conformidade."
  },
  {
    icon: ClipboardList,
    title: "Escrita fiscal",
    desc: "Apurações, emissão de guias e obrigações acessórias com pontualidade."
  },
  {
    icon: Calculator,
    title: "Folha de pagamento",
    desc: "Processamento de folha, encargos e obrigações trabalhistas."
  },
  {
    icon: FileText,
    title: "Imposto de renda",
    desc: "IRPF e IRPJ com planejamento tributário para reduzir riscos."
  },
  {
    icon: ShieldCheck,
    title: "Consultoria contábil",
    desc: "Apoio contínuo na gestão e tomada de decisão do seu negócio."
  }
];

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-16 md:py-20 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">Serviços</h2>
          <a
            href="https://wa.me/92991825422"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-sky-400 hover:text-sky-300"
          >
            Falar com especialista
          </a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, idx) => {
            const Icon = it.icon;
            return (
              <Reveal key={it.title} delay={idx * 80}>
                <Card className="border-slate-800 bg-[#0e162a] hover:border-slate-700 hover:shadow-[0_0_0_1px_rgba(59,130,246,0.4)] transition-all group">
                  <CardHeader className="flex flex-row items-center gap-3">
                    <div className="p-2 rounded-md bg-blue-900/30 text-sky-400">
                      <Icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg text-white">{it.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-slate-300">
                    {it.desc}
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;