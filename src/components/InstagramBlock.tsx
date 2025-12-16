"use client";

import React from "react";
import { Card } from "./ui/card";
import { Instagram } from "lucide-react";
import Reveal from "./Reveal";

const InstagramBlock: React.FC = () => {
  const posts = [
    { src: "/placeholder.svg", alt: "Post 1" },
    { src: "/placeholder.svg", alt: "Post 2" },
    { src: "/placeholder.svg", alt: "Post 3" },
    { src: "/placeholder.svg", alt: "Post 4" },
  ];

  return (
    <section className="py-16 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">Acompanhe no Instagram</h2>
          <a
            href="https://instagram.com/unicostacontabilidade"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 text-sm"
          >
            <Instagram className="h-4 w-4" />
            @unicostacontabilidade
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {posts.map((p, i) => (
            <Reveal key={i} delay={i * 80}>
              <Card className="overflow-hidden border-slate-800 bg-[#0e162a] group">
                <img
                  src={p.src}
                  alt={p.alt}
                  className="w-full h-28 sm:h-36 object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-6">
            <a
              href="https://instagram.com/unicostacontabilidade"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-slate-300 hover:text-white underline underline-offset-4"
            >
              Ver perfil completo no Instagram
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default InstagramBlock;