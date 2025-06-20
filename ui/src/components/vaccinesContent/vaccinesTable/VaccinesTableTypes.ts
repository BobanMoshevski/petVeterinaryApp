import { NavigateFunction } from "react-router";
import { VaccineType } from "../../../models/VaccineTypes";

export interface VaccinesTableTypes {
  navigate: NavigateFunction;
  vaccines: VaccineType[];
}
