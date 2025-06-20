import { OwnerType } from "./OwnerTypes";
import { VaccineType } from "./VaccineTypes";

export interface PetType {
  id: number;
  name: string;
  dateOfBirth: Date;
  age: number;
  owner: OwnerType;
  species: string;
  breed: string;
  gender: string;
  weight: number;
  vaccines: VaccineType[];
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateOrUpdatePetType {
  ownerId: string;
  name: string;
  dateOfBirth: string;
  species: string;
  breed: string;
  gender: string;
  weight: number;
  vaccineIds: number[] | [];
}
