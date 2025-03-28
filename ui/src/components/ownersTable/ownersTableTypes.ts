import { OwnerType } from "../../models/OwnerTypes";

export interface OwnersTableTypes {
  ownersData: OwnerType[];
}

export type DeleteOwnerLoadingStateType = [
  deleteOwnerLoading: number | null,
  etDeleteOwnerLoading: React.Dispatch<React.SetStateAction<number | null>>,
];
