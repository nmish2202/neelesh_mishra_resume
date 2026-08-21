/**
 * Neelesh Mishra Portfolio - 3D Core Layer
 * Handles Three.js global backdrop, interactive hero tech orb, and card 3D tilt effects.
 */

// Helper to interpolate values smoothly
const lerp = (start, end, amt) => (1 - amt) * start + amt * end;

// Get dynamic CSS colors to sync 3D scene with site theme
function getThemeColors() {
  const temp = document.createElement('div');
  temp.style.color = 'var(--accent-color)';
  temp.style.backgroundColor = 'var(--bg-secondary)';
  document.body.appendChild(temp);
  
  const computedColor = getComputedStyle(temp).color;
  const computedBg = getComputedStyle(temp).backgroundColor;
  
  document.body.removeChild(temp);
  
  return {
    accent: new THREE.Color(computedColor),
    background: new THREE.Color(computedBg)
  };
}

/* ==========================================================================
   Global 3D Particle Starfield Background
   ========================================================================== */
let bgScene, bgCamera, bgRenderer, bgParticles, bgParticlesGeometry;
let bgTargetScrollY = 0;
let bgCurrentScrollY = 0;
let bgMouseX = 0;
let bgMouseY = 0;
let bgTargetMouseX = 0;
let bgTargetMouseY = 0;

function initBgStarfield() {
  const canvas = document.getElementById('three-bg-canvas');
  if (!canvas) return;

  // Scene
  bgScene = new THREE.Scene();

  // Camera
  bgCamera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 2000);
  bgCamera.position.z = 500;

  // Renderer
  bgRenderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true
  });
  bgRenderer.setSize(window.innerWidth, window.innerHeight);
  bgRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Particles Creation
  const particleCount = 2000;
  bgParticlesGeometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const randomSpeeds = new Float32Array(particleCount);

  for (let i = 0; i < particleCount * 3; i += 3) {
    // Generate particles in a wide box volume
    positions[i] = (Math.random() - 0.5) * 1200;     // X
    positions[i + 1] = (Math.random() - 0.5) * 1200; // Y
    positions[i + 2] = (Math.random() - 0.5) * 1200; // Z
    randomSpeeds[i / 3] = 0.2 + Math.random() * 0.8; // Drift speeds
  }

  bgParticlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  bgParticlesGeometry.setAttribute('speed', new THREE.BufferAttribute(randomSpeeds, 1));

  // Particle Material
  const colors = getThemeColors();
  const particlesMaterial = new THREE.PointsMaterial({
    size: 2.2,
    color: colors.accent,
    transparent: true,
    opacity: 0.6,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });

  // Points Mesh
  bgParticles = new THREE.Points(bgParticlesGeometry, particlesMaterial);
  bgScene.add(bgParticles);

  // Set initial position
  bgParticles.position.y = 0;

  // Event Listeners
  window.addEventListener('scroll', () => {
    bgTargetScrollY = window.scrollY;
  });

  window.addEventListener('mousemove', (e) => {
    bgTargetMouseX = (e.clientX - window.innerWidth / 2) / 100;
    bgTargetMouseY = (e.clientY - window.innerHeight / 2) / 100;
  });

  // Handle Resize
  window.addEventListener('resize', () => {
    bgCamera.aspect = window.innerWidth / window.innerHeight;
    bgCamera.updateProjectionMatrix();
    bgRenderer.setSize(window.innerWidth, window.innerHeight);
  });
}

function animateBgStarfield(time) {
  if (!bgRenderer) return;

  // Smooth scroll translation
  bgCurrentScrollY = lerp(bgCurrentScrollY, bgTargetScrollY, 0.06);
  
  // Smooth mouse skew
  bgMouseX = lerp(bgMouseX, bgTargetMouseX, 0.05);
  bgMouseY = lerp(bgMouseY, bgTargetMouseY, 0.05);

  // Parallax starflight scroll physics
  bgCamera.position.z = 500 - bgCurrentScrollY * 0.45;
  bgCamera.position.y = -bgCurrentScrollY * 0.2;
  
  // Slight camera rotation look-at response
  bgCamera.rotation.y = bgMouseX * 0.03;
  bgCamera.rotation.x = bgMouseY * 0.03;

  // Slowly drift particles
  bgParticles.rotation.y = time * 0.015;
  bgParticles.rotation.x = time * 0.008;

  bgRenderer.render(bgScene, bgCamera);
}


/* ==========================================================================
   Hero Section 3D Holographic Tech Orb
   ========================================================================== */
let heroScene, heroCamera, heroRenderer, heroGroup;
let heroSphere, heroRing1, heroRing2, heroRing3;
let skillNodes = [];
let heroIsDragging = false;
let heroPrevMousePos = { x: 0, y: 0 };
let heroTargetRot = { x: 0.2, y: 0.5 };
let heroCurrentRot = { x: 0.2, y: 0.5 };

function initHero3D() {
  const container = document.getElementById('hero-3d-container');
  if (!container) return;

  const width = container.clientWidth;
  const height = container.clientHeight;

  // Scene
  heroScene = new THREE.Scene();

  // Camera
  heroCamera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
  heroCamera.position.z = 7.5;

  // Renderer
  heroRenderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true
  });
  heroRenderer.setSize(width, height);
  heroRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.appendChild(heroRenderer.domElement);

  // Master Group
  heroGroup = new THREE.Group();
  heroScene.add(heroGroup);

  const colors = getThemeColors();

  // 1. Central Tech Core sphere (Wireframe & Points)
  const sphereGeo = new THREE.IcosahedronGeometry(1.3, 2);
  const sphereMat = new THREE.MeshBasicMaterial({
    color: colors.accent,
    wireframe: true,
    transparent: true,
    opacity: 0.18
  });
  heroSphere = new THREE.Mesh(sphereGeo, sphereMat);
  heroGroup.add(heroSphere);

  // 2. Gyroscope Outer Tech Rings
  const ring1Geo = new THREE.RingGeometry(1.8, 1.83, 64);
  const ringMat1 = new THREE.MeshBasicMaterial({
    color: colors.accent,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.4
  });
  heroRing1 = new THREE.Mesh(ring1Geo, ringMat1);
  heroRing1.rotation.x = Math.PI / 2;
  heroGroup.add(heroRing1);

  const ring2Geo = new THREE.RingGeometry(2.1, 2.13, 64);
  const ringMat2 = new THREE.MeshBasicMaterial({
    color: colors.accent,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.3
  });
  heroRing2 = new THREE.Mesh(ring2Geo, ringMat2);
  heroRing2.rotation.y = Math.PI / 4;
  heroGroup.add(heroRing2);

  const ring3Geo = new THREE.RingGeometry(2.4, 2.43, 64);
  const ringMat3 = new THREE.MeshBasicMaterial({
    color: colors.accent,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.2
  });
  heroRing3 = new THREE.Mesh(ring3Geo, ringMat3);
  heroRing3.rotation.z = Math.PI / 6;
  heroGroup.add(heroRing3);

  // 3. Orbiting Core Skills Nodes (NextJS, ReactJS, NodeJS, AWS)
  const nodeSpecs = [
    { name: "NextJS", color: 0xffffff, size: 0.14, radius: 1.8, speed: 0.8, offset: 0 },
    { name: "ReactJS", color: 0x00d8ff, size: 0.13, radius: 2.1, speed: 0.6, offset: 2 },
    { name: "NodeJS", color: 0x39d353, size: 0.13, radius: 2.4, speed: 0.5, offset: 4 },
    { name: "AWS Cloud", color: 0xff9900, size: 0.15, radius: 2.7, speed: 0.4, offset: 5.5 }
  ];

  nodeSpecs.forEach(spec => {
    const nodeGroup = new THREE.Group();
    
    // Core sphere representing the technology
    const nodeGeo = new THREE.SphereGeometry(spec.size, 16, 16);
    const nodeMat = new THREE.MeshBasicMaterial({
      color: spec.color,
      transparent: false
    });
    const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
    nodeGroup.add(nodeMesh);

    // Glowing envelope shell
    const glowGeo = new THREE.SphereGeometry(spec.size * 1.5, 16, 16);
    const glowMat = new THREE.MeshBasicMaterial({
      color: spec.color,
      transparent: true,
      opacity: 0.35
    });
    const glowMesh = new THREE.Mesh(glowGeo, glowMat);
    nodeGroup.add(glowMesh);

    heroGroup.add(nodeGroup);
    
    skillNodes.push({
      mesh: nodeGroup,
      spec: spec
    });
  });

  // Drag interaction to rotate the 3D Hologram
  container.addEventListener('mousedown', (e) => {
    heroIsDragging = true;
    heroPrevMousePos = { x: e.offsetX, y: e.offsetY };
  });

  container.addEventListener('mousemove', (e) => {
    if (!heroIsDragging) return;
    const deltaMove = {
      x: e.offsetX - heroPrevMousePos.x,
      y: e.offsetY - heroPrevMousePos.y
    };
    
    heroTargetRot.y += deltaMove.x * 0.008;
    heroTargetRot.x += deltaMove.y * 0.008;
    
    // Clamp vertical rotation to prevent upside-down flipping
    heroTargetRot.x = Math.max(-Math.PI / 3, Math.min(Math.PI / 3, heroTargetRot.x));
    
    heroPrevMousePos = { x: e.offsetX, y: e.offsetY };
  });

  document.addEventListener('mouseup', () => {
    heroIsDragging = false;
  });

  // Touch triggers for mobile view
  container.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
      heroIsDragging = true;
      heroPrevMousePos = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
  });

  container.addEventListener('touchmove', (e) => {
    if (!heroIsDragging || e.touches.length !== 1) return;
    const deltaMove = {
      x: e.touches[0].clientX - heroPrevMousePos.x,
      y: e.touches[0].clientY - heroPrevMousePos.y
    };
    
    heroTargetRot.y += deltaMove.x * 0.008;
    heroTargetRot.x += deltaMove.y * 0.008;
    
    heroTargetRot.x = Math.max(-Math.PI / 3, Math.min(Math.PI / 3, heroTargetRot.x));
    
    heroPrevMousePos = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  });

  container.addEventListener('touchend', () => {
    heroIsDragging = false;
  });

  // Handle Resize
  window.addEventListener('resize', () => {
    const w = container.clientWidth;
    const h = container.clientHeight;
    heroCamera.aspect = w / h;
    heroCamera.updateProjectionMatrix();
    heroRenderer.setSize(w, h);
  });

  // Stop rendering when container goes offscreen
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      heroActive = entry.isIntersecting;
    });
  }, { threshold: 0.1 });
  
  observer.observe(container);
}

let heroActive = true;

function animateHero3D(time) {
  if (!heroRenderer || !heroActive) return;

  // Dampen/Lerp drag rotation
  heroCurrentRot.x = lerp(heroCurrentRot.x, heroTargetRot.x, 0.08);
  heroCurrentRot.y = lerp(heroCurrentRot.y, heroTargetRot.y, 0.08);

  heroGroup.rotation.x = heroCurrentRot.x;
  heroGroup.rotation.y = heroCurrentRot.y;

  // Auto ring spin adjustments when not dragging
  if (!heroIsDragging) {
    heroRing1.rotation.z = time * 0.06;
    heroRing2.rotation.z = -time * 0.09;
    heroRing3.rotation.x = time * 0.04;
    heroSphere.rotation.y = time * 0.12;
  }

  // Animate skill nodes planetary orbits
  skillNodes.forEach(node => {
    const orbitSpeed = node.spec.speed;
    const radius = node.spec.radius;
    const offset = node.spec.offset;
    
    const angle = (time * orbitSpeed) + offset;
    
    // Orbital path equations
    node.mesh.position.x = Math.cos(angle) * radius;
    node.mesh.position.z = Math.sin(angle) * radius;
    node.mesh.position.y = Math.sin(angle * 0.8) * (radius * 0.2); // slight wave orbit vertical drift
  });

  heroRenderer.render(heroScene, heroCamera);
}


/* ==========================================================================
   UI Cards 3D Interactive Mouse Tilt
   ========================================================================== */
function initCardTilts() {
  const cards = document.querySelectorAll('.card');
  if (cards.length === 0) return;

  cards.forEach(card => {
    // Inject custom glare shine layer if not already present
    if (!card.querySelector('.card-shine')) {
      const shineDiv = document.createElement('div');
      shineDiv.className = 'card-shine';
      card.appendChild(shineDiv);
    }

    card.addEventListener('pointermove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left; // x coordinate inside element
      const y = e.clientY - rect.top;  // y coordinate inside element
      
      // Calculate normalized offsets from card center
      const px = (x / rect.width) - 0.5;
      const py = (y / rect.height) - 0.5;
      
      // Target rotation angles (deg)
      const tiltX = py * -14; 
      const tiltY = px * 14; 

      // Apply transform logic with perspective projection
      card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.015, 1.015, 1.015)`;
      
      // Sync shine reflection gradient point
      card.style.setProperty('--shine-x', `${x}px`);
      card.style.setProperty('--shine-y', `${y}px`);
    });

    card.addEventListener('pointerleave', () => {
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    });
  });
}


/* ==========================================================================
   Sync Theme Toggles with 3D Colors
   ========================================================================== */
function handleThemeChanges() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  if (!themeToggleBtn) return;

  themeToggleBtn.addEventListener('click', () => {
    // Wait briefly for CSS variable mutations to settle
    setTimeout(() => {
      const colors = getThemeColors();
      
      // Global starfield theme color response
      if (bgParticles) {
        bgParticles.material.color.copy(colors.accent);
      }
      
      // Hero tech core sphere theme color response
      if (heroSphere) {
        heroSphere.material.color.copy(colors.accent);
        heroRing1.material.color.copy(colors.accent);
        heroRing2.material.color.copy(colors.accent);
        heroRing3.material.color.copy(colors.accent);
      }
    }, 150);
  });
}


/* ==========================================================================
   Main Orchestrator Loop
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  initBgStarfield();
  initHero3D();
  initCardTilts();
  handleThemeChanges();

  // Animation Loop Tick
  function tick(timestamp) {
    const elapsedSeconds = timestamp * 0.001;
    
    animateBgStarfield(elapsedSeconds);
    animateHero3D(elapsedSeconds);
    
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
});
