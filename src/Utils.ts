import { PerspectiveCamera, WebGLRenderer } from "three";
import * as THREE from "three";

export const resize = (camera: PerspectiveCamera, renderer: WebGLRenderer) => {
  window.addEventListener("resize", function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.updateProjectionMatrix();
  });
};

let isAnimating = true;
export const onSunClick = (camera: PerspectiveCamera, sun: THREE.Mesh) => {
  const raycaster = new THREE.Raycaster();
  document.addEventListener("click", function (event) {
    const pointer = new THREE.Vector2(
      (event.clientX / window.innerWidth) * 2 - 1,
      (event.clientY / window.innerHeight) * 2 - 1
    );

    raycaster.setFromCamera(pointer, camera);
    const intersects = raycaster.intersectObjects([sun]);
    if (intersects.length > 0) {
      isAnimating = !isAnimating;
    }
  });
};

export const getAnimationState = () => isAnimating;
