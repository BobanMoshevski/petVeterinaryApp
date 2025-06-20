import {
  Navigation,
  useActionData,
  useNavigation,
  useRouteLoaderData,
} from "react-router";
import LoadingSpinnerLayout from "../../components/loadingSpinnerLayout/LoadingSpinnerLayout";
import EditVaccineForm from "../../components/vaccineContent/editVaccineForm/EditVaccineForm";
import { VaccineType } from "../../models/VaccineTypes";
import { ActionErrorDataType } from "../../services/https/action/actionTypes";

const EditVaccinePage: React.FC = () => {
  const vaccineData: VaccineType = useRouteLoaderData(
    "editVaccine",
  ) as VaccineType;
  const actionData: ActionErrorDataType =
    useActionData() as ActionErrorDataType;
  const navigation: Navigation = useNavigation();
  const isSubmitting: boolean = navigation.state === "submitting";
  const isLoading: boolean = navigation.state === "loading";

  return (
    <>
      <LoadingSpinnerLayout isLoading={isLoading} isSubmitting={isSubmitting} />
      <EditVaccineForm
        actionData={actionData}
        vaccineData={vaccineData}
        isSubmitting={isSubmitting}
      />
    </>
  );
};

export default EditVaccinePage;
