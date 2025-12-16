"use client";

import React from "react";
import { Button } from "../components/ui/button";
import { Instagram, Phone, MapPin } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <img
              src="/logo-unicosta.png"
              alt="UniCosta Contabilidade - Logo"
              className="h-8 w-auto"
            />
            <span className="hidden sm:block font-semibold tracking-wide text-gray-900">
              UniCosta Contabilidade
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#servicos" className="text-gray-700 hover:text-gray-900">Serviços</a>
            <a href="#diferenciais" className="text-gray-700 hover:text-gray-900">Diferenciais</a>
            <a href="#sobre" className="text-gray-700 hover:text-gray-900">Quem somos</a>
            <a href="#contato" className="text-gray-700 hover:text-gray-900">Contato</a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="https://instagram.com/unicostacontabilidade"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram UniCosta Contabilidade"
              className="p-2 rounded-md hover:bg-gray-100"
            >
              <Instagram className="h-5 w-5 text-gray-700" />
            </a>
            <a
              href="https://wa.me/92991825422"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900"
            >
              <Phone className="h-4 w-4" />
              (92) 99182-5422
            </a>
            <Button asChild size="sm" className="ml-2">
              <a href="https://wa.me/92991825422" target="_blank" rel="noreferrer">
                Falar no WhatsApp
              </a>
            </Button>
          </div>
        </div>
        <div className="md:hidden flex items-center justify-between pb-3 text-xs text-gray-600">
          <span className="flex items-center gap-1">
            <MapPin className="h-3 w-3" /> Manaus/AM
          </span>
          <a href="#servicos" className="hover:text-gray-900">Ver serviços</a>
        </div>
      </div>
    </header>
  );
};

export default Header;