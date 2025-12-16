"use client";

import React from "react";
import { Button } from "./ui/button";
import { Instagram, Phone, MapPin, Menu } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0b1220]/80 backdrop-blur border-b border-slate-800">
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

          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-2">
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
            <Button asChild variant="outline" size="sm" className="ml-2 border-slate-700 text-slate-100 bg-transparent hover:bg-white/10">
              <a href="https://app.unicosta.com.br" target="_blank" rel="noreferrer">
                UniCosta Hub
              </a>
            </Button>
            <Button asChild size="sm" className="bg-cyan-600 hover:bg-cyan-500 text-white">
              <a href="https://wa.me/92991825422" target="_blank" rel="noreferrer">
                Falar no WhatsApp
              </a>
            </Button>
          </div>

          {/* Mobile actions */}
          <div className="md:hidden flex items-center gap-2">
            <a
              href="https://wa.me/92991825422"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-cyan-600 text-white hover:bg-cyan-500"
            >
              <Phone className="h-4 w-4" />
            </a>
            <Sheet>
              <SheetTrigger asChild>
                <button
                  aria-label="Abrir menu"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-700 text-slate-100 hover:bg-white/5"
                >
                  <Menu className="h-5 w-5" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#0b1220] border-slate-800 text-slate-100">
                <div className="mt-6 space-y-4">
                  <a href="#servicos" className="block text-slate-200 hover:text-white">Serviços</a>
                  <a href="#diferenciais" className="block text-slate-200 hover:text-white">Diferenciais</a>
                  <a href="#sobre" className="block text-slate-200 hover:text-white">Quem somos</a>
                  <a href="#contato" className="block text-slate-200 hover:text-white">Contato</a>
                  <div className="pt-2">
                    <a
                      href="https://app.unicosta.com.br"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center w-full h-10 rounded-md border border-slate-700 hover:bg-white/5"
                    >
                      UniCosta Hub
                    </a>
                  </div>
                  <a
                    href="https://wa.me/92991825422"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center w-full h-10 rounded-md bg-cyan-600 hover:bg-cyan-500 text-white"
                  >
                    Falar no WhatsApp
                  </a>
                  <div className="text-xs text-slate-400 flex items-center gap-2 pt-2">
                    <MapPin className="h-3.5 w-3.5" />
                    Manaus/AM
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;