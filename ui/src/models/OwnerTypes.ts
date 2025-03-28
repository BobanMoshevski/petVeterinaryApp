import { PetType } from "./PetTypes";

export interface OwnerType {
  id: number;
  name: string;
  surname: string;
  age: number;
  fullName: string;
  pets: PetType[];
}

export interface CreateOrUpdateOwnerType {
  name: string;
  surname: string;
  age: number;
}
