import * as THREE from "three";
import { MoonType } from "../types/Moon";

export const createMoonMesh = (
  sphereGeometry: THREE.SphereGeometry,
  moon: MoonType
) => {
  const moonMaterial = new THREE.MeshStandardMaterial({
    color: moon.color ?? 0xffffff,
  });
  const moonMesh = new THREE.Mesh(sphereGeometry, moonMaterial);
  moonMesh.scale.setScalar(moon.radius);
  moonMesh.position.x = moon.distance;
  return moonMesh;
};
