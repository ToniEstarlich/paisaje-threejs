import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { createCamera } from './camera.js';
import { createScene } from './scene.js';
import { createGround } from './ground.js';
import { createSky } from './sky.js';
import { animateLoop } from './animate.js';

import { createMountain, animateMountain } from './objects/mountain.js';
import { createTree, animateTree } from './objects/tree.js';
import { createBird, animateBird } from './objects/bird.js';

// Scene, camera, renderer
const scene = createScene();
createSky(scene);

const camera = createCamera();
camera.position.set(0, 8, 25);
camera.lookAt(0,0,0);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

// Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.enablePan = true;
controls.minDistance = 5;
controls.maxDistance = 50;
controls.target.set(0,3,-5);
controls.update();

// Light
const dirLight = new THREE.DirectionalLight(0xffffff,1);
dirLight.position.set(20,40,20);
dirLight.castShadow = true;
scene.add(dirLight);

const ambient = new THREE.AmbientLight(0xffffff,0.4);
scene.add(ambient);

// Ground
const ground = createGround();
scene.add(ground);

// Mountains
const mountains = [
  createMountain({x:0, y:3, z:-10, size:4, peakWhite:true}),
  createMountain({x:-6, y:3, z:-15, size:3, peakWhite:true}),
  createMountain({x:5, y:2.5, z:-20, size:2.5, peakWhite:false}),
  createMountain({x:-10, y:4, z:-25, size:5, peakWhite:true}),
  createMountain({x:8, y:3.5, z:-18, size:3.5, peakWhite:false}),
  createMountain({x:-4, y:2.8, z:-30, size:2.8, peakWhite:true}),
  createMountain({x:12, y:3, z:-22, size:3, peakWhite:true}),
  createMountain({x:-15, y:4.5, z:-28, size:4.5, peakWhite:false}),
  createMountain({x:6, y:2.5, z:-35, size:2.5, peakWhite:true}),
  createMountain({x:-8, y:3.2, z:-40, size:3.2, peakWhite:true}),
  createMountain({x:10, y:3.8, z:-32, size:3.8, peakWhite:false}),
  createMountain({x:-12, y:4, z:-38, size:4, peakWhite:true}),
  createMountain({x:14, y:3, z:-45, size:3, peakWhite:false}),
];

// Add all mountains to the scene
mountains.forEach(m => scene.add(m));

// Trees
const trees = [];

// Function to generate random positions
function getRandomPosition(minX, maxX, minZ, maxZ) {
  const x = Math.random() * (maxX - minX) + minX;
  const z = Math.random() * (maxZ - minZ) + minZ;
  return {x, z};
}

// Create 650 trees
for (let i = 0; i < 650; i++) {
  const {x, z} = getRandomPosition(-80, 80, -80, 80); // adjust bounds as needed
  //trees.push(createTree(x, z));
  const tree = createTree(x, z); // tree is already positioned correctly
  trees.push(tree);

}

// Add trees to the scene
trees.forEach(t => scene.add(t));

// Birds
const birds = [
  createBird(),
  createBird(),
  createBird(),
  createBird(),
  createBird(),
  createBird(),
];
birds.forEach(b => scene.add(b));

// Animate
animateLoop(renderer, scene, camera, (t)=>{
  mountains.forEach(m => animateMountain(m,t));
  birds.forEach(b => animateBird(b,t));
  trees.forEach(tr => animateTree(tr,t));
});

// Resize
window.addEventListener('resize', ()=>{
  camera.aspect = window.innerWidth/window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});


