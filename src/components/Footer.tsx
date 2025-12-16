"use client";

import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src="/logo-unicosta.png" alt="UniCosta" className="h-6 w-auto" />
            <span className="text-sm text-gray-700">UniCosta Contabilidade</span>
          </div>
          <nav className="flex gap-6 text-sm">
            <a href="#servicos" className="text-gray-700 hover:text-gray-900">Serviços</a>
            <a href="#diferenciais" className="text-gray-700 hover:text-gray-900">Diferenciais</a>
            <a href="#sobre" className="text-gray-700 hover:text-gray-900">Quem somos</a>
            <a href="#contato" className="text-gray-700 hover:text-gray-900">Contato</a>
          </nav>
        </div>
        <div className="mt-6 text-xs text-gray-500">
          © {new Date().getFullYear()} UniCosta Contabilidade. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;