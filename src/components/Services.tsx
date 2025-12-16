"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";
import { Building2, FilePlus2, ClipboardList, Calculator, FileText, ShieldCheck } from "lucide-react";

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
    <section id="servicos" className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">Serviços</h2>
          <a
            href="https://wa.me/92991825422"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-blue-600 hover:text-blue-700"
          >
            Falar com especialista
          </a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => {
            const Icon = it.icon;
            return (
              <Card key={it.title} className="border-gray-200 hover:shadow-sm transition-shadow">
                <CardHeader className="flex flex-row items-center gap-3">
                  <div className="p-2 rounded-md bg-blue-50 text-blue-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">{it.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-gray-700">
                  {it.desc}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;