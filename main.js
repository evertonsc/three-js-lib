import * as THREE from 'https://unpkg.com/three@0.124.0/build/three.module.js';
import { OrbitControls } from 'https://unpkg.com/three@0.124.0/examples/jsm/controls/OrbitControls.js';

// Cena, câmera e renderizador
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.set(5, 5, 10);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Base: plano de fundo (chão)
const planeGeometry = new THREE.PlaneGeometry(20, 20);
const planeMaterial = new THREE.MeshBasicMaterial({ color: 0xA0522D, side: THREE.DoubleSide });
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotation.x = -Math.PI / 2;
scene.add(plane);

// Objeto 1: Caixa
const boxGeometry = new THREE.BoxGeometry();
const boxMaterial = new THREE.MeshBasicMaterial({ color: 0xBA55D3 });
const box = new THREE.Mesh(boxGeometry, boxMaterial);
box.position.set(-3, 1.2, 0); // translação
box.rotation.y = Math.PI / 4; // rotação
box.scale.set(1, 2, 1);       // escala em Y
scene.add(box);

// Objeto 2: Esfera
const sphereGeometry = new THREE.SphereGeometry(0.75, 32, 32);
const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0x8B0000 });
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.position.set(0, 1.25, 3);
sphere.rotation.x = Math.PI / 6;
sphere.scale.set(1, 1, 1);
scene.add(sphere);

// Objeto 3: Cone
const coneGeometry = new THREE.ConeGeometry(0.7, 2, 32);
const coneMaterial = new THREE.MeshBasicMaterial({ color: 0xE0FFFF });
const cone = new THREE.Mesh(coneGeometry, coneMaterial);
cone.position.set(3, 1, -2);
cone.rotation.z = Math.PI / 8;
cone.scale.set(1, 0.5, 1);
scene.add(cone);

// Controles de órbita
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// Responsividade: caso mude o tamanho da janela
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Animação
function animate() {
  requestAnimationFrame(animate);

  // Animações
  box.rotation.y += 0.01; // Rotação contínua da caixa
  cone.rotation.z += 0.02; // Rotação contínua do cone
  sphere.position.y = 0.75 + Math.sin(Date.now() * 0.002) * 0.5; // Sobe e desce da esfera

  controls.update(); // Atualiza os controles
  renderer.render(scene, camera);
}

animate()