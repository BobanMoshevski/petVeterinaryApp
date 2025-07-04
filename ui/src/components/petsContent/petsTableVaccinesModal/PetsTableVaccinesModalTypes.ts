import { NavigateFunction } from "react-router";
import { VaccineType } from "../../../models/VaccineTypes";

export interface VaccinesModalTypes {
  vaccines: VaccineType[];
  dataTarget: string;
  petName: string;
  navigate: NavigateFunction;
}
