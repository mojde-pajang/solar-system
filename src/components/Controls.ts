import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import * as THREE from "three";

export const createControls = (
  camera: THREE.Camera,
  renderer: THREE.WebGLRenderer
) => {
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.maxDistance = 200;
  controls.minDistance = 20;
  return controls;
};
