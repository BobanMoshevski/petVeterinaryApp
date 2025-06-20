import { ActionErrorDataType } from "../../../services/https/action/actionTypes";

export interface EditOwnerFormType {
  actionData: ActionErrorDataType;
  ownerData: OwnerDataType;
  isSubmitting: boolean;
}

export interface OwnerDataType {
  id: number;
  name: string;
  surname: string;
  dateOfBirth: string;
  email: string;
  phoneNumber: string;
  address: string;
  country: string;
  city: string;
  postalCode: string;
}
