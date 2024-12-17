import { setupScene } from "./MainScene";
import { animatePlanets } from "./Animation";

const { scene, camera, renderer, controls, planets, planetMeshes } =
  setupScene();

const renderLoop = () => {
  animatePlanets(planetMeshes, planets);
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(renderLoop);
};

renderLoop();
