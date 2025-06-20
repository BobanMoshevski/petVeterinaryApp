import {
  useRouteLoaderData,
  useActionData,
  Navigation,
  useNavigation,
} from "react-router";
import LoadingSpinnerLayout from "../../components/loadingSpinnerLayout/LoadingSpinnerLayout";
import EditPetForm from "../../components/petContent/editPetForm/EditPetForm";
import { ActionErrorDataType } from "../../services/https/action/actionTypes";
import { OwnerType } from "../../models/OwnerTypes";
import { PetType } from "../../models/PetTypes";
import { VaccineType } from "../../models/VaccineTypes";

type PetLoaderResult = {
  petData: PetType;
  vaccinesData: VaccineType[]; // or a different type if needed
};

const EditPetPage: React.FC = () => {
  const ownersData: OwnerType[] = useRouteLoaderData("pet") as OwnerType[];
  const petVaccinesData: PetLoaderResult = useRouteLoaderData(
    "editPet",
  ) as PetLoaderResult;
  const actionErrorData: ActionErrorDataType =
    useActionData() as ActionErrorDataType;
  const navigation: Navigation = useNavigation();
  const isSubmitting: boolean = navigation.state === "submitting";
  const isLoading: boolean = navigation.state === "loading";

  return (
    <>
      <LoadingSpinnerLayout isLoading={isLoading} isSubmitting={isSubmitting} />
      <EditPetForm
        ownersData={ownersData}
        petData={petVaccinesData.petData}
        vaccinesData={petVaccinesData.vaccinesData}
        actionErrorData={actionErrorData}
        isSubmitting={isSubmitting}
      />
    </>
  );
};

export default EditPetPage;
