/**
 * Componente MobileMenu
 * Menú hamburguesa responsive para dispositivos móviles y tablets
 * Estilo: Fintech Institutional Pro
 */

import { useState } from "react";
import { Menu, X, Building2 } from "lucide-react";
import { Link } from "wouter";

interface MenuItem {
  label: string;
  href: string;
}

const menuItems: MenuItem[] = [
  { label: "Inicio", href: "/" },
  { label: "¿Qué son?", href: "/#que-son" },
  { label: "Ventajas", href: "/#ventajas" },
  { label: "Tipos", href: "/#tipos" },
  { label: "Blog", href: "/blog" },
  { label: "Comparativa", href: "/comparativa" },
  { label: "Noticias", href: "/noticias" },
  { label: "Análisis", href: "/analisis" },
  { label: "Academia", href: "/academia" },
  { label: "Comunidad", href: "https://www.facebook.com/FibrasMexico?locale=es_LA" },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Botón hamburguesa - visible solo en móviles */}
      <button
        onClick={toggleMenu}
        className="md:hidden fixed top-6 right-4 z-50 p-2 rounded-lg bg-accent text-primary hover:bg-accent/90 transition-all duration-300"
        aria-label="Abrir menú"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      {/* Overlay - visible cuando el menú está abierto */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Menú desplegable */}
      <nav
        className={`fixed top-0 right-0 h-screen w-64 bg-primary/95 backdrop-blur-md border-l border-accent/20 z-40 md:hidden transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header del menú */}
        <div className="flex items-center justify-between p-6 border-b border-accent/20">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center">
              <Building2 className="w-5 h-5 text-primary" />
            </div>
            <span className="text-lg font-bold text-foreground">Fibras MX</span>
          </div>
          <button
            onClick={closeMenu}
            className="p-2 rounded-lg hover:bg-secondary/30 transition-colors"
          >
            <X className="w-5 h-5 text-foreground" />
          </button>
        </div>

        {/* Items del menú */}
        <div className="flex flex-col py-4">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={closeMenu}
              className="px-6 py-3 text-foreground hover:bg-accent/20 hover:text-accent transition-all duration-200 border-l-4 border-transparent hover:border-accent font-medium"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Footer del menú */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-accent/20 bg-gradient-to-t from-primary/50 to-transparent">
          <p className="text-xs text-foreground/60 text-center">
            Inversión Inteligente en Bienes Raíces
          </p>
        </div>
      </nav>
    </>
  );
}
