import * as THREE from 'three';

export function createTree(x,z){
  const trunkGeo = new THREE.CylinderGeometry(0.3,0.5,2,8);
  const trunkMat = new THREE.MeshPhongMaterial({color:0x8b5a2b});
  const trunk = new THREE.Mesh(trunkGeo,trunkMat);
  trunk.position.set(0,1,0);

  const leavesGeo = new THREE.ConeGeometry(1.8,3,8);
  const leavesMat = new THREE.MeshPhongMaterial({color:0x1e7a1e});
  const leaves = new THREE.Mesh(leavesGeo,leavesMat);
  leaves.position.set(0,3,0);

  const group = new THREE.Group();
  group.add(trunk,leaves);
  group.position.set(x,0,z);
  group.castShadow = true;

  // Assign individual sway parameters for gentle wind
  group.swaySpeed = 0.05 + Math.random() * 5.05;  // slow speed per tree
  group.swayAmount = 0.01 + Math.random() * 0.09; // small rotation

  return group;
}

export function animateTree(tree, t) {
  // Gentle wind sway
  tree.rotation.y = Math.sin(t * tree.swaySpeed) * tree.swayAmount;
  tree.rotation.x = Math.sin(t * tree.swaySpeed * 0.5) * tree.swayAmount * 0.5;
}



