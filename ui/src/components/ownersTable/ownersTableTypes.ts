import { OwnerType } from "../../models/OwnerTypes";

export interface OwnersTableTypes {
  ownersData: OwnerType[];
}

export type DeleteOwnerLoadingStateType = [
  deleteOwnerLoading: number | null,
  setDeleteOwnerLoading: React.Dispatch<React.SetStateAction<number | null>>,
];
