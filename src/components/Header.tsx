"use client";

import React from "react";
import { Button } from "./ui/button";
import { Instagram, Phone, MapPin } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <img
              src="/logo-unicosta.png"
              alt="UniCosta Contabilidade - Logo"
              className="h-8 w-auto"
            />
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#servicos" className="text-slate-300 hover:text-white transition-colors">Serviços</a>
            <a href="#diferenciais" className="text-slate-300 hover:text-white transition-colors">Diferenciais</a>
            <a href="#sobre" className="text-slate-300 hover:text-white transition-colors">Quem somos</a>
            <a href="#contato" className="text-slate-300 hover:text-white transition-colors">Contato</a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="https://instagram.com/unicostacontabilidade"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram UniCosta Contabilidade"
              className="p-2 rounded-md hover:bg-white/5 transition-colors"
            >
              <Instagram className="h-5 w-5 text-slate-200" />
            </a>
            <a
              href="https://wa.me/92991825422"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex items-center gap-2 text-sm text-slate-300 hover:text-white"
            >
              <Phone className="h-4 w-4" />
              (92) 99182-5422
            </a>
            <Button asChild variant="outline" size="sm" className="ml-2 border-border text-foreground bg-transparent hover:bg-foreground/5">
              <a href="https://app.unicosta.com.br" target="_blank" rel="noreferrer">
                UniCosta Hub
              </a>
            </Button>
            <Button asChild size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <a href="https://wa.me/92991825422" target="_blank" rel="noreferrer">
                Falar no WhatsApp
              </a>
            </Button>
          </div>
        </div>
        <div className="md:hidden flex items-center justify-between pb-3 text-xs text-slate-400">
          <span className="flex items-center gap-1">
            <MapPin className="h-3 w-3" /> Manaus/AM
          </span>
          <a href="#servicos" className="hover:text-white transition-colors">Ver serviços</a>
        </div>
      </div>
    </header>
  );
};

export default Header;