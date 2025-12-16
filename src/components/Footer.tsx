"use client";

import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 border-t border-slate-800 bg-[#0a0f16]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src="/logo-unicosta.png" alt="UniCosta" className="h-6 w-auto" />
            <span className="text-sm text-slate-300">UniCosta Contabilidade</span>
          </div>
          <nav className="flex gap-6 text-sm">
            <a href="#servicos" className="text-slate-300 hover:text-white transition-colors">Serviços</a>
            <a href="#diferenciais" className="text-slate-300 hover:text-white transition-colors">Diferenciais</a>
            <a href="#sobre" className="text-slate-300 hover:text-white transition-colors">Quem somos</a>
            <a href="#contato" className="text-slate-300 hover:text-white transition-colors">Contato</a>
          </nav>
        </div>

        <div className="mt-6 grid md:grid-cols-2 gap-4 text-xs text-slate-400">
          <div className="space-y-1">
            <p>Razão social: Unicosta Contabilidade Ltda</p>
            <p>CNPJ: 36.038.072/0001-75</p>
            <p>Fundada em: 17/01/2020</p>
          </div>
          <div className="space-y-1">
            <p>Endereço: Rua Santo Antonio, 718 - Santo Antonio, Manaus - AM, 69.029-230</p>
            <p>Atividade principal: Atividades de contabilidade (CNAE 6920-6/01)</p>
          </div>
        </div>

        <div className="mt-6 text-xs text-slate-500">
          © {new Date().getFullYear()} UniCosta Contabilidade. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;