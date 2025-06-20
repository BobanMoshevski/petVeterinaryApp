import { Navigation, useActionData, useNavigation } from "react-router";
import { ActionErrorDataType } from "../../services/https/action/actionTypes";
import LoadingSpinnerLayout from "../../components/loadingSpinnerLayout/LoadingSpinnerLayout";
import CreateVaccineForm from "../../components/vaccineContent/createVaccineForm/CreateVaccineForm";

const CreateVaccinePage: React.FC = () => {
  const actionData: ActionErrorDataType =
    useActionData() as ActionErrorDataType;
  const navigation: Navigation = useNavigation();
  const isSubmitting: boolean = navigation.state === "submitting";
  const isLoading: boolean = navigation.state === "loading";

  return (
    <>
      <LoadingSpinnerLayout isLoading={isLoading} isSubmitting={isSubmitting} />
      <CreateVaccineForm actionData={actionData} isSubmitting={isSubmitting} />
    </>
  );
};

export default CreateVaccinePage;
