 import * as THREE from 'three';

export function createGnome() {
  const group = new THREE.Group();

  // Body
  const body = new THREE.Mesh(
    new THREE.CylinderGeometry(0.5, 0.5, 1.0, 16),
    new THREE.MeshStandardMaterial({ color: 0x8b4513 })
  );
  body.position.y = 0.75;
  body.name = 'body';
  group.add(body);

  // Head
  const head = new THREE.Mesh(
    new THREE.SphereGeometry(0.55, 16, 16),
    new THREE.MeshStandardMaterial({ color: 0xffd1a4 })
  );
  head.position.y = 1.75;
  group.add(head);

  // Eyes
  const eyeGeometry = new THREE.SphereGeometry(0.08, 8, 8);
  const eyeMaterial = new THREE.MeshStandardMaterial({ color: 0x000000 });

  const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
  leftEye.position.set(-0.18, 1.85, 0.5); 
  group.add(leftEye);

  const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
  rightEye.position.set(0.18, 1.85, 0.5);
  group.add(rightEye);

  // Beard
  const beardGeometry = new THREE.ConeGeometry(0.4, 0.6, 8);
  const beardMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const beard = new THREE.Mesh(beardGeometry, beardMaterial);
  beard.position.set(0, 1.15, 0.15); 
  beard.rotation.x = Math.PI; 
  group.add(beard);

  // Hat (cone)
  const hat = new THREE.Mesh(
    new THREE.ConeGeometry(0.5, 3, 16),
    new THREE.MeshStandardMaterial({ color: 0xff0000 })
  );
  hat.position.y = 3.55;
  hat.position.z = -0.15;
  hat.rotation.x = -Math.PI / 70;
  hat.name = 'hat';
  group.add(hat);

  // Arms
  const leftArm = new THREE.Mesh(
    new THREE.CylinderGeometry(0.1, 0.1, 0.8, 12),
    new THREE.MeshStandardMaterial({ color: 0x8b4513 })
  );
  leftArm.position.set(-0.65, 1.4, 0);
  leftArm.rotation.z = Math.PI / 8;
  leftArm.name = 'leftArm';
  group.add(leftArm);

  const rightArm = leftArm.clone();
  rightArm.position.x = 0.65;
  rightArm.rotation.z = -Math.PI / 8;
  rightArm.name = 'rightArm';
  group.add(rightArm);

  // Legs
  const leftLeg = new THREE.Mesh(
    new THREE.CylinderGeometry(0.15, 0.15, 0.7, 12),
    new THREE.MeshStandardMaterial({ color: 0x0000ff })
  );
  leftLeg.position.set(-0.25, 0.35, 0);
  leftLeg.name = 'leftLeg';
  group.add(leftLeg);

  const rightLeg = leftLeg.clone();
  rightLeg.position.x = 0.25;
  rightLeg.name = 'rightLeg';
  group.add(rightLeg);

  return group;
}

export function animateGnome(gnome, t) {
  const body = gnome.getObjectByName('body');
  const leftArm = gnome.getObjectByName('leftArm');
  const rightArm = gnome.getObjectByName('rightArm');
  const leftLeg = gnome.getObjectByName('leftLeg');
  const rightLeg = gnome.getObjectByName('rightLeg');
  const hat = gnome.getObjectByName('hat');

  if(body) body.rotation.y = Math.sin(t * 2) * 0.1;

  if(leftArm) leftArm.rotation.z = Math.PI/8 + Math.sin(t*3)*0.2;
  if(rightArm) rightArm.rotation.z = -Math.PI/8 - Math.sin(t*3)*0.2;

  if(leftLeg) leftLeg.rotation.x = Math.sin(t*3)*0.5;
  if(rightLeg) rightLeg.rotation.x = -Math.sin(t*3)*0.5;

  if(hat) hat.rotation.x = -Math.PI/70 + Math.sin(t*3)*0.02;
}
