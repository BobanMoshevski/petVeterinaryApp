import { ActionErrorDataType } from "../../../services/https/action/actionTypes";

export interface CreateVaccineFormType {
  actionData: ActionErrorDataType;
  isSubmitting: boolean;
}
