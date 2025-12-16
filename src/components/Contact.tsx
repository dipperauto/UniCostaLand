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
          <div className="rounded-2xl border border-border p-8 bg-card">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-white">Pronto para crescer com segurança?</h3>
                <p className="text-muted-foreground mt-3">
                  Fale com nossa equipe e receba um atendimento consultivo. Vamos entender a necessidade do seu negócio e indicar o melhor caminho.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <a href="https://wa.me/92991825422" target="_blank" rel="noreferrer">
                      Conversar no WhatsApp
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="border-border text-foreground bg-transparent hover:bg-foreground/5">
                    <a href="https://instagram.com/unicostacontabilidade" target="_blank" rel="noreferrer">
                      Ver Instagram
                    </a>
                  </Button>
                </div>
              </div>

              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-foreground" />
                  <span>(92) 99182-5422</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-foreground" />
                  <span>Manaus/AM</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-foreground" />
                  <span>contato@unicosta.com.br</span>
                </div>
                <p className="text-xs text-muted-foreground/80">
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