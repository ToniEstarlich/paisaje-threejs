import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { createGnome, animateGnome } from './objects/gnome.js';

// Scene and camera
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x87ceeb);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.set(0,5,10);

// Renderer
const renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);

// Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0,1,0);
controls.update();

// Lights
const dirLight = new THREE.DirectionalLight(0xffffff,1);
dirLight.position.set(5,10,5);
scene.add(dirLight);

const ambient = new THREE.AmbientLight(0xffffff,0.4);
scene.add(ambient);

// Ground
const ground = new THREE.Mesh(
  new THREE.PlaneGeometry(50,50),
  new THREE.MeshPhongMaterial({color:0x3a7a3a, side:THREE.DoubleSide})
);
ground.rotation.x = -Math.PI/2;
scene.add(ground);

// Create gnome
const gnome = createGnome();
gnome.position.set(0,0,0);
scene.add(gnome);

// Animation loop
function animate(t){
  requestAnimationFrame(animate);
  animateGnome(gnome, t*0.01);
  controls.update();
  renderer.render(scene, camera);
}
animate();

// Handle window resize
window.addEventListener('resize', ()=>{
  camera.aspect = window.innerWidth/window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
