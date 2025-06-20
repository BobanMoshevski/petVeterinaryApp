import { Navigation, useActionData, useNavigation } from "react-router";
import LoadingSpinnerLayout from "../../components/loadingSpinnerLayout/LoadingSpinnerLayout";
import CreateOwnerForm from "../../components/ownerContent/createOwnerForm/CreateOwnerForm";
import { ActionErrorDataType } from "../../services/https/action/actionTypes";

const CreateOwnerPage: React.FC = () => {
  const actionData: ActionErrorDataType =
    useActionData() as ActionErrorDataType;
  const navigation: Navigation = useNavigation();
  const isSubmitting: boolean = navigation.state === "submitting";
  const isLoading: boolean = navigation.state === "loading";

  return (
    <>
      <LoadingSpinnerLayout isLoading={isLoading} isSubmitting={isSubmitting} />
      <CreateOwnerForm actionData={actionData} isSubmitting={isSubmitting} />
    </>
  );
};

export default CreateOwnerPage;
