import { Material } from "three";
import { MoonType } from "./Moon";

export type PlanetType = {
  name: string;
  radius: number;
  distance: number;
  speed: number;
  material: Material;
  moons: MoonType[];
};
