"use client";

import React from "react";
import { Button } from "./ui/button";
import { Phone, Mail, MapPin } from "lucide-react";
import Reveal from "./Reveal";

const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-16 bg-gradient-to-b from-transparent to-[#0b142a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Reveal>
          <div className="rounded-2xl border border-slate-800 p-8 bg-[#0e162a]">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-white">Pronto para crescer com segurança?</h3>
                <p className="text-slate-300 mt-3">
                  Fale com nossa equipe e receba um atendimento consultivo. Vamos entender a necessidade do seu negócio e indicar o melhor caminho.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button asChild className="bg-blue-600 hover:bg-blue-500 text-white">
                    <a href="https://wa.me/92991825422" target="_blank" rel="noreferrer">
                      Conversar no WhatsApp
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="border-slate-700 text-slate-100 bg-transparent hover:bg-white/10">
                    <a href="https://instagram.com/unicostacontabilidade" target="_blank" rel="noreferrer">
                      Ver Instagram
                    </a>
                  </Button>
                </div>
              </div>

              <div className="space-y-3 text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-slate-200" />
                  <span>(92) 99182-5422</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-slate-200" />
                  <span>Manaus/AM</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-slate-200" />
                  <span>contato@unicosta.com.br</span>
                </div>
                <p className="text-xs text-slate-500">
                  Horário: Seg a Sex, 9h às 18h
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;