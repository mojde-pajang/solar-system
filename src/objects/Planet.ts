import * as THREE from "three";
import { PlanetType } from "../types/Planet";
import { createMoonMesh } from "./Moon";

const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);

export const createPlanetsMateria = () => {};
export const createPlanet = (planet: PlanetType) => {
  const newPlanet = new THREE.Mesh(sphereGeometry, planet.material);
  newPlanet.scale.setScalar(planet.radius);
  newPlanet.position.x = planet.distance;

  planet.moons.forEach((moon) => {
    const moonMesh = createMoonMesh(sphereGeometry, moon);
    newPlanet.add(moonMesh);
  });

  newPlanet.receiveShadow = true;
  return newPlanet;
};
