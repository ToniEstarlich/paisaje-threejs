import * as THREE from 'three';

export function createGround(){
  const geometry = new THREE.PlaneGeometry(200,200);
  const material = new THREE.MeshPhongMaterial({ color: 0x3a7a3a, side: THREE.DoubleSide });
  const ground = new THREE.Mesh(geometry, material);
  ground.rotation.x = -Math.PI/2;
  ground.receiveShadow = true;
  return ground;
}
