"use client";

import { useEffect } from "react";

/* Applies a 3D pointer-tilt + glare shine effect to every .card element on the page */
export default function CardTilt() {
  useEffect(() => {
    const cards = document.querySelectorAll(".card");
    if (cards.length === 0) return;

    const cleanups = [];

    cards.forEach((card) => {
      if (!card.querySelector(".card-shine")) {
        const shineDiv = document.createElement("div");
        shineDiv.className = "card-shine";
        card.appendChild(shineDiv);
      }

      const handlePointerMove = (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const px = x / rect.width - 0.5;
        const py = y / rect.height - 0.5;

        const tiltX = py * -14;
        const tiltY = px * 14;

        card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.015, 1.015, 1.015)`;
        card.style.setProperty("--shine-x", `${x}px`);
        card.style.setProperty("--shine-y", `${y}px`);
      };

      const handlePointerLeave = () => {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
      };

      card.addEventListener("pointermove", handlePointerMove);
      card.addEventListener("pointerleave", handlePointerLeave);

      cleanups.push(() => {
        card.removeEventListener("pointermove", handlePointerMove);
        card.removeEventListener("pointerleave", handlePointerLeave);
      });
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
