"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  // Estado para controlar el menú móvil
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Funciones para abrir/cerrar el menú
  const openMobileMenu = () => setIsMobileMenuOpen(true);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <div>
      {/* Desktop Menu */}
      <div className="hidden sticky top-0 z-40 lg:flex items-center justify-center text-sm bg-primary text-white w-full pt-4 pb-3 gap-14">
        <Link href="#about" className="menu-link hover:text-secondary">
          Sobre Mí
        </Link>
        <Link href="#services" className="menu-link hover:text-secondary">
          Servicios
        </Link>
        <Link href="#diets" className="menu-link hover:text-secondary">
          Dietas
        </Link>
        <Link href="#testimonials" className="menu-link hover:text-secondary">
          Testimonios
        </Link>
        <Link href="#faq" className="menu-link hover:text-secondary">
          Preguntas Frecuentes
        </Link>
        <Link href="#blog" className="menu-link hover:text-secondary">
          Blog
        </Link>
        <Link href="#contact" className="menu-link hover:text-secondary">
          Contacto
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-4 right-4 z-50">
        <button onClick={openMobileMenu} className="text-3xl text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden fixed inset-0 bg-primary text-white transform transition-transform duration-300 ease-in-out z-50 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={closeMobileMenu} className="focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col items-start justify-start h-full gap-6 px-4">
          <Link
            href="#about"
            className="menu-link hover:text-secondary"
            onClick={closeMobileMenu}
          >
            Sobre Mí
          </Link>
          <Link
            href="#services"
            className="menu-link hover:text-secondary"
            onClick={closeMobileMenu}
          >
            Servicios
          </Link>
          <Link
            href="#diets"
            className="menu-link hover:text-secondary"
            onClick={closeMobileMenu}
          >
            Dietas
          </Link>
          <Link
            href="#testimonials"
            className="menu-link hover:text-secondary"
            onClick={closeMobileMenu}
          >
            Testimonios
          </Link>
          <Link
            href="#faq"
            className="menu-link hover:text-secondary"
            onClick={closeMobileMenu}
          >
            Preguntas Frecuentes
          </Link>
          <Link
            href="#blog"
            className="menu-link hover:text-secondary"
            onClick={closeMobileMenu}
          >
            Blog
          </Link>
          <Link
            href="#contact"
            className="menu-link hover:text-secondary"
            onClick={closeMobileMenu}
          >
            Contacto
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
