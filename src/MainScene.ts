import * as THREE from "three";
import { createCamera } from "./components/Camera";
import { createLights } from "./components/Light";
import { createRenderer } from "./components/Renderer";
import { createControls } from "./components/Controls";
import { loadPlanetTextures, loadSceneTexture } from "./textures/TextureLoader";
import { createSun } from "./objects/Sun";
import { createPlanet } from "./objects/Planet";
import { PlanetType } from "./types/Planet";
import { onSunClick, resize } from "./Utils";

// Scene setup
export const setupScene = () => {
  const scene = new THREE.Scene();

  const camera = createCamera();
  const renderer = createRenderer();
  const controls = createControls(camera, renderer);
  const textures = loadPlanetTextures();

  // Add background to scene
  scene.background = loadSceneTexture();

  //Initial lighting
  createLights(scene);

  //initial Sun
  const sun = createSun(textures.sunTexture);
  scene.add(sun);

  //initial Planets
  const planetNames = ["mercury", "venus", "earth", "mars"] as const;

  const materialsObject = planetNames.reduce((acc, planet) => {
    acc[planet] = new THREE.MeshStandardMaterial({
      map: textures[`${planet}Texture`],
    });
    return acc;
  }, {} as Record<string, THREE.MeshStandardMaterial>);

  const planets: PlanetType[] = [
    {
      name: "Mercury",
      radius: 0.5,
      distance: 10,
      speed: 0.01,
      material: materialsObject.mercury,
      moons: [],
    },
    {
      name: "Venus",
      radius: 0.8,
      distance: 15,
      speed: 0.007,
      material: materialsObject.venus,
      moons: [],
    },
    {
      name: "Earth",
      radius: 1,
      distance: 20,
      speed: 0.005,
      material: materialsObject.earth,
      moons: [
        {
          name: "Moon",
          radius: 0.3,
          distance: 3,
          speed: 0.015,
        },
      ],
    },
    {
      name: "Mars",
      radius: 0.7,
      distance: 25,
      speed: 0.003,
      material: materialsObject.mars,
      moons: [
        {
          name: "Phobos",
          radius: 0.1,
          distance: 2,
          speed: 0.02,
        },
        {
          name: "Deimos",
          radius: 0.2,
          distance: 3,
          speed: 0.015,
          color: 0xffffff,
        },
      ],
    },
  ];

  const planetMeshes = planets.map((planet) => {
    const planetMesh = createPlanet(planet);
    scene.add(planetMesh);
    return planetMesh;
  });

  // Call listeners
  resize(camera, renderer);
  onSunClick(camera, sun);

  return { scene, camera, renderer, controls, planets, planetMeshes };
};
