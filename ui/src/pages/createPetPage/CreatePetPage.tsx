import {
  Navigation,
  useActionData,
  useNavigation,
  useRouteLoaderData,
} from "react-router";
import CreatePetForm from "../../components/petContent/createPetForm/CreatePetForm";
import { ActionErrorDataType } from "../../services/https/action/actionTypes";
import { OwnerType } from "../../models/OwnerTypes";
import LoadingSpinnerLayout from "../../components/loadingSpinnerLayout/LoadingSpinnerLayout";
import { VaccineType } from "../../models/VaccineTypes";

const CreatePetPage: React.FC = () => {
  const vaccinesData: VaccineType[] = useRouteLoaderData(
    "newPet",
  ) as VaccineType[];
  const actionData: ActionErrorDataType =
    useActionData() as ActionErrorDataType;
  const ownersData: OwnerType[] = useRouteLoaderData("pet") as OwnerType[];
  const navigation: Navigation = useNavigation();
  const isSubmitting: boolean = navigation.state === "submitting";
  const isLoading: boolean = navigation.state === "loading";

  return (
    <>
      <LoadingSpinnerLayout isLoading={isLoading} isSubmitting={isSubmitting} />
      <CreatePetForm
        actionData={actionData}
        isSubmitting={isSubmitting}
        ownersData={ownersData}
        vaccinesData={vaccinesData}
      />
    </>
  );
};

export default CreatePetPage;
