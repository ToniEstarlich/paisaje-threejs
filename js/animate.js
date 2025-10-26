export function animateLoop(renderer, scene, camera, updateObjects){
  let t = 0;
  const groundLevel = 0;
  const minCameraHeight = 1;

  function loop(){
    requestAnimationFrame(loop);
    t += 0.01;
    if(updateObjects) updateObjects(t);

    if(camera.position.y < groundLevel + minCameraHeight){
      camera.position.y = groundLevel + minCameraHeight;
    }
    renderer.render(scene, camera);
  }
  loop();
}

