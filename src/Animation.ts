import { Object3D } from "three";
import { PlanetType } from "./types/Planet";
import { getAnimationState } from "./Utils";

export const animatePlanets = (
  planetMeshes: Object3D[],
  planets: PlanetType[]
) => {
  planetMeshes.forEach((planetMesh, index) => {
    if (!getAnimationState()) return;

    const planet = planets[index];
    planetMesh.rotation.y += planet.speed;
    planetMesh.position.x = Math.sin(planetMesh.rotation.y) * planet.distance;
    planetMesh.position.z = Math.cos(planetMesh.rotation.y) * planet.distance;

    planetMesh.children.forEach((moonMesh, moonIndex) => {
      const moon = planet.moons[moonIndex];
      moonMesh.rotation.y += moon.speed;
      moonMesh.position.x = Math.sin(moonMesh.rotation.y) * moon.distance;
      moonMesh.position.z = Math.cos(moonMesh.rotation.y) * moon.distance;
    });
  });
};
