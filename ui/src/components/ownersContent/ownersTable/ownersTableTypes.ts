import { NavigateFunction } from "react-router";
import { OwnerType } from "../../../models/OwnerTypes";

export interface OwnersTableTypes {
  navigate: NavigateFunction;
  ownersData: OwnerType[];
}
