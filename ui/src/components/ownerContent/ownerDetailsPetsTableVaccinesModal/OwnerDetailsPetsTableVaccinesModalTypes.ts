import { NavigateFunction } from "react-router";
import { VaccineType } from "../../../models/VaccineTypes";

export interface OwnerDetailsPetsTableVaccinesModalTypes {
  dataTarget: string;
  vaccines: VaccineType[];
  petName: string;
  navigate: NavigateFunction;
}
