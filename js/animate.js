export function animateLoop(renderer, scene, camera, updateObjects){
  let t = 0;
  function loop(){
    requestAnimationFrame(loop);
    t += 0.01;
    if(updateObjects) updateObjects(t);
    renderer.render(scene, camera);
  }
  loop();
}

