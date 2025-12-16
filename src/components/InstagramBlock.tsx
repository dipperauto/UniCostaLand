"use client";

import React from "react";
import { Card } from "../components/ui/card";
import { Instagram } from "lucide-react";

const InstagramBlock: React.FC = () => {
  const posts = [
    { src: "/placeholder.svg", alt: "Post 1" },
    { src: "/placeholder.svg", alt: "Post 2" },
    { src: "/placeholder.svg", alt: "Post 3" },
    { src: "/placeholder.svg", alt: "Post 4" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">Acompanhe no Instagram</h2>
          <a
            href="https://instagram.com/unicostacontabilidade"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm"
          >
            <Instagram className="h-4 w-4" />
            @unicostacontabilidade
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {posts.map((p, i) => (
            <Card key={i} className="overflow-hidden border-gray-200 group">
              <img
                src={p.src}
                alt={p.alt}
                className="w-full h-28 sm:h-36 object-cover transition-transform group-hover:scale-[1.02]"
              />
            </Card>
          ))}
        </div>

        <div className="mt-6">
          <a
            href="https://instagram.com/unicostacontabilidade"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-gray-700 hover:text-gray-900 underline underline-offset-4"
          >
            Ver perfil completo no Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramBlock;