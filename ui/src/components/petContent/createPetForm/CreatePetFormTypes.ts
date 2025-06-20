import { ActionErrorDataType } from "../../../services/https/action/actionTypes";
import { OwnerType } from "../../../models/OwnerTypes";
import { VaccineType } from "../../../models/VaccineTypes";

export interface CreatePetFormType {
  actionData: ActionErrorDataType;
  isSubmitting: boolean;
  ownersData: OwnerType[];
  vaccinesData: VaccineType[];
}

export type SelectedOwnerStateType = [
  selectedOwner: string,
  setSelectedOwner: React.Dispatch<React.SetStateAction<string>>,
];

export type SelectedPetGenderStateType = [
  selectedPetGender: string,
  selectedPetGenderStateType: React.Dispatch<React.SetStateAction<string>>,
];

export interface SelectOptionType {
  label: string;
  value: string;
}

export type MouseEventType = React.MouseEvent<HTMLButtonElement, MouseEvent>;

export interface OnMouseEnterHandlerType {
  (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
}

export interface OnMouseLeaveHandlerType {
  (
    selectBy: string,
    optionValue: string,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): void;
}

export interface SelectedOptionHandlerType {
  (optionValue: string, query: string): void;
}
