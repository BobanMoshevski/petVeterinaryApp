import { OwnerType } from "../../../models/OwnerTypes";
import { PetType } from "../../../models/PetTypes";
import { VaccineType } from "../../../models/VaccineTypes";
import { ActionErrorDataType } from "../../../services/https/action/actionTypes";

export interface EditPetFormType {
  ownersData: OwnerType[];
  petData: PetType;
  vaccinesData: VaccineType[];
  actionErrorData: ActionErrorDataType;
  isSubmitting: boolean;
}

export type SelectedOwnerStateType = [
  selectedOwner: string,
  setSelectedOwner: React.Dispatch<React.SetStateAction<string>>,
];

export type SelectedPetGenderStateType = [
  selectedPetGender: string,
  selectedPetGenderStateType: React.Dispatch<React.SetStateAction<string>>,
];

export type SelectedVaccineIdsStateType = [
  selectedVaccineIds: number[],
  setSelectedVaccineIds: React.Dispatch<React.SetStateAction<number[]>>,
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
