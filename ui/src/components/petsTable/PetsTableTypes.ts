import { PetType } from "../../models/PetTypes";

export interface PetsTableTypes {
  petsData: PetType[];
}

export type DeletePetLoadingStateType = [
  deletePetLoading: number | null,
  setDeletePetLoading: React.Dispatch<React.SetStateAction<number | null>>,
];
