import { OwnerType } from "../../../models/OwnerTypes";
import { PetType } from "../../../models/PetTypes";

export interface PetDetailsType {
  petData: PetType;
  ownerData: OwnerType;
}
