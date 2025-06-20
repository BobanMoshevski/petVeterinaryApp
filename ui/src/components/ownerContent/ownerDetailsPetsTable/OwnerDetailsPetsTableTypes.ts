import { NavigateFunction } from "react-router";
import { PetType } from "../../../models/PetTypes";

export interface PetsTableType {
  navigate: NavigateFunction;
  pets: PetType[];
}
