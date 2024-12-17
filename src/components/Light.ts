import * as THREE from "three";

export const createLights = (scene: THREE.Scene) => {
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
  const pointLight = new THREE.PointLight(0xffffff, 300, 100);
  pointLight.position.set(0, 0, 0);
  pointLight.castShadow = true;

  const pointLightHelper = new THREE.PointLightHelper(pointLight, 1);

  scene.add(ambientLight, pointLight, pointLightHelper);
};
