import * as THREE from 'three';

export function createBird(){
  const bodyGeo = new THREE.SphereGeometry(0.4,8,8);
  const bodyMat = new THREE.MeshPhongMaterial({color:0xffd27f});
  const body = new THREE.Mesh(bodyGeo,bodyMat);

  const wingGeo = new THREE.BoxGeometry(0.1,0.8,1.2);
  const wingMat = new THREE.MeshPhongMaterial({color:0xffa500});
  const wingL = new THREE.Mesh(wingGeo,wingMat);
  wingL.position.set(-0.35,0,0);
  wingL.rotation.z = 0.3;
  const wingR = wingL.clone();
  wingR.position.x = 0.35;
  wingR.rotation.z = -0.3;

  const group = new THREE.Group();
  group.add(body,wingL,wingR);
 group.position.set(Math.random() * 10 - 5, 5 + Math.random() * 2, -5 + Math.random() * 10);

  return group;
}

export function animateBird(bird,t){
  bird.position.x += Math.cos(t*0.5)*0.09;
  bird.position.y += Math.sin(t*0.2)*0.01;
  bird.position.z += Math.sin(t*0.9)*0.02;
  bird.rotation.y += 0.01;
}
