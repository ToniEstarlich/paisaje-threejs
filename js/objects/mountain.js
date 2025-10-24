import * as THREE from 'three';

export function createMountain({x=7,y=1,z=-10,size=4,peakWhite=false}){
  const geometry = new THREE.ConeGeometry(size, size*2.9, 8);
  const material = new THREE.MeshPhongMaterial({ color: 0x8b6b3b });
  const mountain = new THREE.Mesh(geometry, material);
  mountain.position.set(x,y,z);
  mountain.castShadow = true;

  // Optional white peak
  if(peakWhite){
    const peakGeo = new THREE.ConeGeometry(size*0.4,size*0.9,9);
    const peakMat = new THREE.MeshPhongMaterial({color:0xffffff});
    const peak = new THREE.Mesh(peakGeo,peakMat);
    peak.position.set(0,size*0.75,0);
    mountain.add(peak);
  }
  
  
  return mountain;
}

export function animateMountain(mountain, t){
  mountain.rotation.y += 0.002;
}
