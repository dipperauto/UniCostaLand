"use client";

import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-800 bg-[#0b1220]">
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
        <div className="mt-6 text-xs text-slate-500">
          © {new Date().getFullYear()} UniCosta Contabilidade. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;