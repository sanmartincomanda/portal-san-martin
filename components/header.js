"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { Icon } from "./icons";
import { SHOP_URL } from "@/lib/site-data.mjs";

const navigation = [
  ["Nuestras líneas", "#lineas"],
  ["Los favoritos", "#cortes"],
  ["A tu mesa", "#a-tu-mesa"],
  ["Sucursales", "#sucursales"],
];

export default function Header() {
  const menu = useRef(null);
  const trigger = useRef(null);
  function closeMenu() {
    if (menu.current) menu.current.open = false;
  }
  useEffect(() => {
    const keydown = (event) => {
      if (event.key === "Escape" && menu.current?.open) {
        closeMenu();
        trigger.current?.focus();
      }
    };
    const outside = (event) => {
      if (!menu.current?.contains(event.target)) closeMenu();
    };
    const desktop = window.matchMedia("(min-width: 1000px)");
    const resize = () => {
      if (desktop.matches) closeMenu();
    };
    document.addEventListener("keydown", keydown);
    document.addEventListener("pointerdown", outside);
    desktop.addEventListener("change", resize);
    return () => {
      document.removeEventListener("keydown", keydown);
      document.removeEventListener("pointerdown", outside);
      desktop.removeEventListener("change", resize);
    };
  }, []);
  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <header className="site-header">
        <div className="header-inner">
          <a
            href="#inicio"
            className="brand-logo"
            aria-label="Carnes San Martín, inicio"
          >
            <Image
              src="/logocsm.svg"
              alt="Carnes San Martín"
              width={136}
              height={63}
              preload
            />
          </a>
          <nav className="desktop-nav" aria-label="Navegación principal">
            {navigation.map(([label, href]) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
          </nav>
          <div className="header-actions">
            <a
              href={SHOP_URL}
              className="header-shop"
              data-commerce="shop"
              data-location="navigation"
            >
              <span>Comprar ahora</span>
              <Icon name="bag" />
            </a>
            <details className="mobile-menu" ref={menu}>
              <summary ref={trigger} aria-label="Menú de navegación">
                <span />
                <span />
              </summary>
              <nav className="mobile-navigation" aria-label="Navegación móvil">
                <p className="eyebrow">El sabor comienza aquí</p>
                {navigation.map(([label, href], index) => (
                  <a key={href} href={href} onClick={closeMenu}>
                    <span>0{index + 1}</span>
                    {label}
                    <Icon name="diagonal" />
                  </a>
                ))}
                <a
                  className="mobile-contact"
                  href="#sucursales"
                  onClick={closeMenu}
                >
                  Granada · Masaya · Nindirí
                </a>
              </nav>
            </details>
          </div>
        </div>
      </header>
    </>
  );
}
