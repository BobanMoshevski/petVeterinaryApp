import { ActionErrorDataType } from "../../services/https/action/actionTypes";

export interface EditPetFormType {
  actionErrorData: ActionErrorDataType;
  isSubmitting: boolean;
}
