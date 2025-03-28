import { PetType } from "../../models/PetTypes";

export interface PetsModalTypes {
  pets: PetType[];
  ownerFullName: string;
  dataTarget: string;
}
