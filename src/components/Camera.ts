import * as THREE from "three";

export const createCamera = () => {
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    2,
    200
  );
  camera.position.set(40, 5, 40);
  return camera;
};
