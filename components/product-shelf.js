"use client";
import Image from "next/image";
import { startTransition, useEffect, useRef, useState } from "react";
import { Icon } from "./icons";
import { SHOP_URL } from "@/lib/site-data.mjs";

const filters = [
  ["all", "Todos"],
  ["gold", "Gold"],
  ["parrillera", "Parrillera"],
  ["diaria", "Diaria"],
];
const lineNames = {
  gold: "Línea Gold",
  parrillera: "Línea Parrillera",
  diaria: "Línea Diaria",
};
function ProductImage({ product }) {
  const [failed, setFailed] = useState(false);
  return (
    <Image
      src={failed ? product.fallbackImage : product.image}
      onError={() => {
        if (!failed) setFailed(true);
      }}
      alt={product.name}
      fill
      sizes="(max-width: 600px) 75vw, (max-width: 1000px) 40vw, 27vw"
      className="product-image"
    />
  );
}
export default function ProductShelf({ products, source }) {
  const [filter, setFilter] = useState("all");
  const [bounds, setBounds] = useState({ start: true, end: false });
  const shelf = useRef(null);
  const visible = products.filter(
    (product) => filter === "all" || product.line === filter,
  );
  useEffect(() => {
    const element = shelf.current;
    if (!element) return;
    const update = () =>
      setBounds({
        start: element.scrollLeft <= 2,
        end:
          element.scrollLeft + element.clientWidth >= element.scrollWidth - 2,
      });
    const observer = new ResizeObserver(update);
    observer.observe(element);
    [...element.children].forEach((child) => observer.observe(child));
    element.addEventListener("scroll", update, { passive: true });
    return () => {
      observer.disconnect();
      element.removeEventListener("scroll", update);
    };
  }, [filter, products]);
  function move(direction) {
    const element = shelf.current;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    element?.scrollBy({
      left: direction * element.clientWidth * 0.8,
      behavior: reduced ? "instant" : "smooth",
    });
  }
  return (
    <>
      <div className="shelf-toolbar">
        <div
          className="product-filters"
          role="group"
          aria-label="Filtrar cortes por línea"
        >
          {filters.map(([id, label]) => (
            <button
              type="button"
              key={id}
              aria-pressed={filter === id}
              onClick={() => {
                shelf.current?.scrollTo({ left: 0, behavior: "instant" });
                startTransition(() => setFilter(id));
              }}
              data-commerce="category"
              data-category={id}
              data-location="product-filter"
            >
              {label}
            </button>
          ))}
        </div>
        <div className="shelf-controls">
          <button
            type="button"
            aria-label="Cortes anteriores"
            disabled={bounds.start}
            onClick={() => move(-1)}
          >
            <Icon className="reverse" />
          </button>
          <button
            type="button"
            aria-label="Más cortes"
            disabled={bounds.end}
            onClick={() => move(1)}
          >
            <Icon />
          </button>
        </div>
      </div>
      <p className="sr-only" role="status" aria-live="polite">
        {visible.length} cortes en {filters.find(([id]) => id === filter)?.[1]}
      </p>
      <div
        key={filter}
        className="product-shelf"
        ref={shelf}
        role="region"
        aria-label="Cortes destacados"
        tabIndex={0}
      >
        {visible.map((product) => (
          <article
            className={`product-card product-${product.line}`}
            key={product.code}
          >
            <a
              href={product.href}
              className="product-photo"
              aria-label={`${lineNames[product.line]}: consultar ${product.name} en el catálogo de la tienda`}
              data-commerce="product"
              data-product={product.code}
              data-location="product-photo"
            >
              <ProductImage product={product} key={product.image} />
              <span className="product-line">{lineNames[product.line]}</span>
              <span className="product-open">
                <Icon name="diagonal" />
              </span>
            </a>
            <div className="product-info">
              <span className="product-code">CORTE / {product.code}</span>
              <h3>{product.name}</h3>
              <a
                className="text-link"
                href={product.href}
                data-commerce="product"
                data-product={product.code}
                data-location="product-link"
              >
                Consultar en tienda <Icon />
              </a>
            </div>
          </article>
        ))}
      </div>
      {!visible.length && (
        <p className="empty-state">
          Consultá los cortes de esta línea en{" "}
          <a href={SHOP_URL}>la tienda virtual</a>.
        </p>
      )}
      <p className="catalog-note">
        {source === "catalog"
          ? "Selección del catálogo en línea."
          : "Una selección para inspirar tu próxima compra."}{" "}
        Los enlaces abren el catálogo: buscá tu corte por nombre. Precio y
        disponibilidad se confirman en la tienda según sucursal.
      </p>
    </>
  );
}
