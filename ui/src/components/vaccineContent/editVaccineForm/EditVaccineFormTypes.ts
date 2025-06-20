import { ActionErrorDataType } from "../../../services/https/action/actionTypes";
import { VaccineType } from "../../../models/VaccineTypes";

export interface EditVaccineFormType {
  actionData: ActionErrorDataType;
  vaccineData: VaccineType;
  isSubmitting: boolean;
}
