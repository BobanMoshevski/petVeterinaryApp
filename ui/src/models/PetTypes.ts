import { VaccineType } from "./VaccineTypes";

export interface PetType {
  id: number;
  name: string;
  age: number;
  vaccines: VaccineType[];
}
