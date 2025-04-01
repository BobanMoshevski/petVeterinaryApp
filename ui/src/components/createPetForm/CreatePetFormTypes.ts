import { OwnerType } from "../../models/OwnerTypes";

export interface CreatePetFormType {
  actionData: CreatePetActionDataErrorType;
  isSubmitting: boolean;
  isLoading: boolean;
  ownersData: OwnerType[];
}

export interface CreatePetActionDataErrorType {
  error?: string;
  errors?: Record<string, string>;
}

export type SelectedOwnerStateType = [
  selectedOwner: string,
  setSelectedOwner: React.Dispatch<React.SetStateAction<string>>,
];

export interface SelectOptionType {
  label: string;
  value: string;
}
