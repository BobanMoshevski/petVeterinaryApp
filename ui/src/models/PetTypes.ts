import { VaccineType } from "./VaccineTypes";

export interface PetType {
  id: number;
  name: string;
  age: number;
  vaccines: VaccineType[];
  owner: { id: number; fullName: string };
}

export interface CreateOrUpdatePetType {
  ownerId: string;
  name: string;
  age: number;
  vaccineIds: number[] | [];
}
