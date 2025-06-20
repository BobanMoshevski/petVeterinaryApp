import { NavigateFunction } from "react-router";
import { VaccineType } from "../../../models/VaccineTypes";

export interface PetDetailsVaccinesTableType {
  vaccines: VaccineType[];
  navigate: NavigateFunction;
}
