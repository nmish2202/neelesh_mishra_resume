"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { getThemeColors } from "@/lib/theme-colors";

const lerp = (start, end, amt) => (1 - amt) * start + amt * end;

const NODE_SPECS = [
  { name: "NextJS", color: 0xffffff, size: 0.14, radius: 1.8, speed: 0.8, offset: 0 },
  { name: "ReactJS", color: 0x00d8ff, size: 0.13, radius: 2.1, speed: 0.6, offset: 2 },
  { name: "NodeJS", color: 0x39d353, size: 0.13, radius: 2.4, speed: 0.5, offset: 4 },
  { name: "AWS Cloud", color: 0xff9900, size: 0.15, radius: 2.7, speed: 0.4, offset: 5.5 },
];

/* Draggable/touch-rotatable holographic hero orb with orbiting skill nodes.
   Renders `children` (the avatar) as a sibling layer inside the same container,
   matching the original markup where Three.js injects its canvas alongside a static avatar div. */
export default function HeroOrb({ children }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 7.5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const colors = getThemeColors(THREE);

    const sphereGeo = new THREE.IcosahedronGeometry(1.3, 2);
    const sphereMat = new THREE.MeshBasicMaterial({
      color: colors.accent,
      wireframe: true,
      transparent: true,
      opacity: 0.18,
    });
    const sphere = new THREE.Mesh(sphereGeo, sphereMat);
    group.add(sphere);

    const ring1Geo = new THREE.RingGeometry(1.8, 1.83, 64);
    const ringMat1 = new THREE.MeshBasicMaterial({ color: colors.accent, side: THREE.DoubleSide, transparent: true, opacity: 0.4 });
    const ring1 = new THREE.Mesh(ring1Geo, ringMat1);
    ring1.rotation.x = Math.PI / 2;
    group.add(ring1);

    const ring2Geo = new THREE.RingGeometry(2.1, 2.13, 64);
    const ringMat2 = new THREE.MeshBasicMaterial({ color: colors.accent, side: THREE.DoubleSide, transparent: true, opacity: 0.3 });
    const ring2 = new THREE.Mesh(ring2Geo, ringMat2);
    ring2.rotation.y = Math.PI / 4;
    group.add(ring2);

    const ring3Geo = new THREE.RingGeometry(2.4, 2.43, 64);
    const ringMat3 = new THREE.MeshBasicMaterial({ color: colors.accent, side: THREE.DoubleSide, transparent: true, opacity: 0.2 });
    const ring3 = new THREE.Mesh(ring3Geo, ringMat3);
    ring3.rotation.z = Math.PI / 6;
    group.add(ring3);

    const skillNodes = NODE_SPECS.map((spec) => {
      const nodeGroup = new THREE.Group();

      const nodeGeo = new THREE.SphereGeometry(spec.size, 16, 16);
      const nodeMat = new THREE.MeshBasicMaterial({ color: spec.color, transparent: false });
      nodeGroup.add(new THREE.Mesh(nodeGeo, nodeMat));

      const glowGeo = new THREE.SphereGeometry(spec.size * 1.5, 16, 16);
      const glowMat = new THREE.MeshBasicMaterial({ color: spec.color, transparent: true, opacity: 0.35 });
      nodeGroup.add(new THREE.Mesh(glowGeo, glowMat));

      group.add(nodeGroup);
      return { mesh: nodeGroup, spec };
    });

    let isDragging = false;
    let prevMousePos = { x: 0, y: 0 };
    const targetRot = { x: 0.2, y: 0.5 };
    const currentRot = { x: 0.2, y: 0.5 };
    let active = true;

    const clampX = (v) => Math.max(-Math.PI / 3, Math.min(Math.PI / 3, v));

    const handleMouseDown = (e) => {
      isDragging = true;
      prevMousePos = { x: e.offsetX, y: e.offsetY };
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;
      const deltaMove = { x: e.offsetX - prevMousePos.x, y: e.offsetY - prevMousePos.y };
      targetRot.y += deltaMove.x * 0.008;
      targetRot.x = clampX(targetRot.x + deltaMove.y * 0.008);
      prevMousePos = { x: e.offsetX, y: e.offsetY };
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    const handleTouchStart = (e) => {
      if (e.touches.length === 1) {
        isDragging = true;
        prevMousePos = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const handleTouchMove = (e) => {
      if (!isDragging || e.touches.length !== 1) return;
      const deltaMove = {
        x: e.touches[0].clientX - prevMousePos.x,
        y: e.touches[0].clientY - prevMousePos.y,
      };
      targetRot.y += deltaMove.x * 0.008;
      targetRot.x = clampX(targetRot.x + deltaMove.y * 0.008);
      prevMousePos = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };

    const handleTouchEnd = () => {
      isDragging = false;
    };

    const handleResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    const handleThemeChange = () => {
      setTimeout(() => {
        const updated = getThemeColors(THREE);
        sphere.material.color.copy(updated.accent);
        ring1.material.color.copy(updated.accent);
        ring2.material.color.copy(updated.accent);
        ring3.material.color.copy(updated.accent);
      }, 150);
    };

    container.addEventListener("mousedown", handleMouseDown);
    container.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    container.addEventListener("touchstart", handleTouchStart);
    container.addEventListener("touchmove", handleTouchMove);
    container.addEventListener("touchend", handleTouchEnd);
    window.addEventListener("resize", handleResize);
    window.addEventListener("themechange", handleThemeChange);

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => (active = entry.isIntersecting)),
      { threshold: 0.1 }
    );
    observer.observe(container);

    let rafId;
    function tick(timestamp) {
      rafId = requestAnimationFrame(tick);
      if (!active) return;

      const time = timestamp * 0.001;

      currentRot.x = lerp(currentRot.x, targetRot.x, 0.08);
      currentRot.y = lerp(currentRot.y, targetRot.y, 0.08);
      group.rotation.x = currentRot.x;
      group.rotation.y = currentRot.y;

      if (!isDragging) {
        ring1.rotation.z = time * 0.06;
        ring2.rotation.z = -time * 0.09;
        ring3.rotation.x = time * 0.04;
        sphere.rotation.y = time * 0.12;
      }

      skillNodes.forEach((node) => {
        const { speed, radius, offset } = node.spec;
        const angle = time * speed + offset;
        node.mesh.position.x = Math.cos(angle) * radius;
        node.mesh.position.z = Math.sin(angle) * radius;
        node.mesh.position.y = Math.sin(angle * 0.8) * (radius * 0.2);
      });

      renderer.render(scene, camera);
    }
    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
      container.removeEventListener("mousedown", handleMouseDown);
      container.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("themechange", handleThemeChange);
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div id="hero-3d-container" ref={containerRef}>
      {children}
    </div>
  );
}
