import * as THREE from "three";

export const createSun = (sunTexture: THREE.Texture) => {
  const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
  const material = new THREE.MeshBasicMaterial({ map: sunTexture });
  const sun = new THREE.Mesh(sphereGeometry, material);
  sun.scale.setScalar(5);
  sun.position.set(0, 0, 0);
  return sun;
};
