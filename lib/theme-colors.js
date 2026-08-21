/* Reads the live CSS custom properties so 3D scenes can follow the active theme */
export function getThemeColors(THREE) {
  const temp = document.createElement("div");
  temp.style.color = "var(--accent-color)";
  temp.style.backgroundColor = "var(--bg-secondary)";
  document.body.appendChild(temp);

  const computedColor = getComputedStyle(temp).color;
  const computedBg = getComputedStyle(temp).backgroundColor;

  document.body.removeChild(temp);

  return {
    accent: new THREE.Color(computedColor),
    background: new THREE.Color(computedBg),
  };
}
