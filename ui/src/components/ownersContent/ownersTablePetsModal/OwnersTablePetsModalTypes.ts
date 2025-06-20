import { NavigateFunction } from "react-router";
import { PetType } from "../../../models/PetTypes";

export interface PetsModalTypes {
  pets: PetType[];
  ownerFullName: string;
  dataTarget: string;
  navigate: NavigateFunction;
}
