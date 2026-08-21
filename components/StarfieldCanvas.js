"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { getThemeColors } from "@/lib/theme-colors";

const lerp = (start, end, amt) => (1 - amt) * start + amt * end;

/* Soft radial-gradient sprite texture, generated once on a small canvas — used for the nebula glows */
function createGlowTexture() {
  const size = 128;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  gradient.addColorStop(0, "rgba(255,255,255,1)");
  gradient.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);
  return new THREE.CanvasTexture(canvas);
}

// Large ambient glow sprites placed at increasing depth so scroll parallax drifts a different
// one behind each section further down the page — fills the otherwise-empty mid-page backgrounds
// without a second render pipeline (same scene/camera/renderer as the starfield).
const NEBULA_SPECS = [
  { color: 0x22d3ee, x: -420, y: 140, z: -260, scale: 900, opacity: 0.14 },
  { color: 0xc084fc, x: 520, y: -180, z: -750, scale: 1100, opacity: 0.13 },
  { color: 0xfbbf24, x: -560, y: 260, z: -1250, scale: 1000, opacity: 0.12 },
  { color: 0x22d3ee, x: 480, y: -80, z: -1750, scale: 1200, opacity: 0.13 },
  { color: 0xc084fc, x: -300, y: -220, z: -2200, scale: 1000, opacity: 0.11 },
];

/* Global 3D particle starfield background, with scroll parallax and mouse-driven camera skew */
export default function StarfieldCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let scene, camera, renderer, particles;
    let targetScrollY = 0;
    let currentScrollY = 0;
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;
    let rafId;

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 2000);
    camera.position.z = 500;

    renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const particleCount = 2000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const randomSpeeds = new Float32Array(particleCount);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 1200;
      positions[i + 1] = (Math.random() - 0.5) * 1200;
      positions[i + 2] = (Math.random() - 0.5) * 1200;
      randomSpeeds[i / 3] = 0.2 + Math.random() * 0.8;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("speed", new THREE.BufferAttribute(randomSpeeds, 1));

    const colors = getThemeColors(THREE);
    const material = new THREE.PointsMaterial({
      size: 2.2,
      color: colors.accent,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    particles = new THREE.Points(geometry, material);
    scene.add(particles);
    particles.position.y = 0;

    const glowTexture = createGlowTexture();
    const nebulae = NEBULA_SPECS.map((spec) => {
      const nebulaMaterial = new THREE.SpriteMaterial({
        map: glowTexture,
        color: spec.color,
        transparent: true,
        opacity: spec.opacity,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      const sprite = new THREE.Sprite(nebulaMaterial);
      sprite.position.set(spec.x, spec.y, spec.z);
      sprite.scale.set(spec.scale, spec.scale, 1);
      scene.add(sprite);
      return { sprite, baseOpacity: spec.opacity };
    });

    const handleScroll = () => {
      targetScrollY = window.scrollY;
    };

    const handleMouseMove = (e) => {
      targetMouseX = (e.clientX - window.innerWidth / 2) / 100;
      targetMouseY = (e.clientY - window.innerHeight / 2) / 100;
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const handleThemeChange = () => {
      setTimeout(() => {
        const updated = getThemeColors(THREE);
        material.color.copy(updated.accent);
      }, 150);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);
    window.addEventListener("themechange", handleThemeChange);

    function tick(timestamp) {
      const time = timestamp * 0.001;

      currentScrollY = lerp(currentScrollY, targetScrollY, 0.06);
      mouseX = lerp(mouseX, targetMouseX, 0.05);
      mouseY = lerp(mouseY, targetMouseY, 0.05);

      camera.position.z = 500 - currentScrollY * 0.45;
      camera.position.y = -currentScrollY * 0.2;

      camera.rotation.y = mouseX * 0.03;
      camera.rotation.x = mouseY * 0.03;

      particles.rotation.y = time * 0.015;
      particles.rotation.x = time * 0.008;

      nebulae.forEach(({ sprite, baseOpacity }, i) => {
        sprite.material.opacity = baseOpacity + Math.sin(time * 0.3 + i * 1.7) * 0.03;
      });

      renderer.render(scene, camera);
      rafId = requestAnimationFrame(tick);
    }
    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("themechange", handleThemeChange);
      geometry.dispose();
      material.dispose();
      nebulae.forEach(({ sprite }) => {
        scene.remove(sprite);
        sprite.material.dispose();
      });
      glowTexture.dispose();
      renderer.dispose();
    };
  }, []);

  return <canvas id="three-bg-canvas" ref={canvasRef} />;
}
