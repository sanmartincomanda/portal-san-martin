"use client";
import { useEffect } from "react";

export default function Motion() {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const animations = new Set();
    let observer;
    const stop = () => {
      observer?.disconnect();
      animations.forEach((animation) => animation.cancel());
      animations.clear();
    };
    const start = () => {
      stop();
      if (preference.matches || !("IntersectionObserver" in window)) return;
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(({ isIntersecting, target }) => {
            if (!isIntersecting) return;
            observer.unobserve(target);
            const image = target.dataset.reveal === "image";
            const animation = target.animate(
              image
                ? [
                    {
                      opacity: 0.25,
                      clipPath: "inset(0 0 12% 0)",
                      transform: "translateY(24px)",
                    },
                    {
                      opacity: 1,
                      clipPath: "inset(0)",
                      transform: "translateY(0)",
                    },
                  ]
                : [
                    { opacity: 0, transform: "translateY(28px)" },
                    { opacity: 1, transform: "translateY(0)" },
                  ],
              {
                duration: image ? 850 : 650,
                easing: "cubic-bezier(.2,.7,.2,1)",
              },
            );
            animations.add(animation);
            animation.onfinish = () => animations.delete(animation);
          });
        },
        { threshold: 0.12 },
      );
      document
        .querySelectorAll("[data-reveal]")
        .forEach((element) => observer.observe(element));
    };
    start();
    preference.addEventListener("change", start);
    return () => {
      stop();
      preference.removeEventListener("change", start);
    };
  }, []);
  useEffect(() => {
    // DOM events only. No storage, third-party trackers or network requests.
    const click = (event) => {
      const target =
        event.target instanceof Element
          ? event.target.closest("[data-commerce]")
          : null;
      if (!target) return;
      window.dispatchEvent(
        new CustomEvent("csm:commerce", {
          detail: {
            action: target.dataset.commerce,
            location: target.dataset.location || "",
            product: target.dataset.product || "",
            category: target.dataset.category || "",
          },
        }),
      );
    };
    document.addEventListener("click", click);
    return () => document.removeEventListener("click", click);
  }, []);
  return null;
}
