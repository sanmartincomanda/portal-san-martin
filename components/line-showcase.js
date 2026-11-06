"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { lines, shopLink } from "@/lib/site-data.mjs";
import { ShopButton } from "./icons";

export default function LineShowcase() {
  const [selected, setSelected] = useState(0);
  const tabs = useRef([]);
  function keyboard(event, index) {
    let next;
    if (event.key === "ArrowRight") next = (index + 1) % lines.length;
    if (event.key === "ArrowLeft")
      next = (index + lines.length - 1) % lines.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = lines.length - 1;
    if (next === undefined) return;
    event.preventDefault();
    setSelected(next);
    tabs.current[next]?.focus();
  }
  return (
    <div className="line-showcase">
      <div
        className="line-tabs"
        role="tablist"
        aria-label="Descubrí nuestras líneas"
      >
        {lines.map((line, index) => (
          <button
            key={line.id}
            type="button"
            role="tab"
            id={`tab-${line.id}`}
            aria-selected={selected === index}
            aria-controls={`panel-${line.id}`}
            tabIndex={selected === index ? 0 : -1}
            ref={(element) => {
              tabs.current[index] = element;
            }}
            onClick={() => setSelected(index)}
            onKeyDown={(event) => keyboard(event, index)}
            className={`line-tab tab-${line.id}`}
            data-commerce="category"
            data-category={line.id}
            data-location="line-selector"
          >
            <span>{line.number}</span>
            <span>
              Línea <strong>{line.label}</strong>
            </span>
            <i aria-hidden="true" />
          </button>
        ))}
      </div>
      {lines.map((line, index) => (
        <div
          key={line.id}
          id={`panel-${line.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${line.id}`}
          hidden={selected !== index}
          tabIndex={0}
          className={`line-panel line-${line.id}`}
        >
          <div className="line-visual">
            <Image
              src={line.image}
              alt={line.alt}
              fill
              sizes="(min-width: 1000px) 92vw, 100vw"
            />
          </div>
          <div className="line-copy">
            <p className="eyebrow">{line.eyebrow}</p>
            <h3>
              {line.title[0]}
              <br />
              {line.title[1]}
            </h3>
            <p className="line-description">{line.description}</p>
            <ShopButton
              className={`button-${line.id === "gold" ? "gold" : line.id === "diaria" ? "dark" : "light"}`}
              location={`line-${line.id}`}
              href={shopLink()}
              data-category={line.id}
            >
              {line.cta}
            </ShopButton>
            <p className="line-note">{line.note}</p>
          </div>
          <span className="line-index" aria-hidden="true">
            {line.number} / 03
          </span>
        </div>
      ))}
      <noscript>
        <p className="catalog-note">
          También encontrás Línea Parrillera y Línea Diaria en{" "}
          <a href={shopLink()}>nuestro catálogo</a>.
        </p>
      </noscript>
    </div>
  );
}
