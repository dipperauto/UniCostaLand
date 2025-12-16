"use client";

import React from "react";
import { Button } from "../components/ui/button";
import { Phone, Mail, MapPin, WhatsAppIcon } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="rounded-2xl border border-gray-200 p-8 bg-gradient-to-r from-gray-50 to-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">Pronto para crescer com segurança?</h3>
              <p className="text-gray-700 mt-3">
                Fale com nossa equipe e receba um atendimento consultivo. Vamos entender a necessidade do seu negócio e indicar o melhor caminho.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild>
                  <a href="https://wa.me/92991825422" target="_blank" rel="noreferrer">
                    Conversar no WhatsApp
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href="https://instagram.com/unicostacontabilidade" target="_blank" rel="noreferrer">
                    Ver Instagram
                  </a>
                </Button>
              </div>
            </div>

            <div className="space-y-3 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gray-900" />
                <span>(92) 99182-5422</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-gray-900" />
                <span>Manaus/AM</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gray-900" />
                <span>contato@unicosta.com.br</span>
              </div>
              <p className="text-xs text-gray-500">
                Horário: Seg a Sex, 9h às 18h
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;