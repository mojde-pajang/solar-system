import * as THREE from "three";

export const loadPlanetTextures = () => {
  const textureLoader = new THREE.TextureLoader();
  return {
    sunTexture: textureLoader.load("/textures/2k_sun.jpg"),
    mercuryTexture: textureLoader.load("/textures/2k_mercury.jpg"),
    venusTexture: textureLoader.load("/textures/2k_venus_surface.jpg"),
    earthTexture: textureLoader.load("/textures/2k_earth_daymap.jpg"),
    marsTexture: textureLoader.load("/textures/2k_mars.jpg"),
    moonTexture: textureLoader.load("/textures/2k_moon.jpg"),
  } as const;
};

export const loadSceneTexture = () => {
  const loader = new THREE.CubeTextureLoader();
  loader.setPath("textures/cubeMap/");
  const textureCube = loader.load([
    "px.png",
    "nx.png",
    "py.png",
    "ny.png",
    "pz.png",
    "nz.png",
  ]);

  return textureCube;
};
