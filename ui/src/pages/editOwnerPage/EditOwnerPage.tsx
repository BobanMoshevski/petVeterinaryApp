import {
  Navigation,
  useActionData,
  useNavigation,
  useRouteLoaderData,
} from "react-router";
import LoadingSpinnerLayout from "../../components/loadingSpinnerLayout/LoadingSpinnerLayout";
import EditOwnerForm from "../../components/ownerContent/editOwnerForm/EditOwnerForm";
import { ActionErrorDataType } from "../../services/https/action/actionTypes";
import { OwnerDataType } from "../../components/ownerContent/editOwnerForm/EditOwnerFormTypes";

const EditOwnerPage: React.FC = () => {
  const ownerData: OwnerDataType = useRouteLoaderData(
    "editOwner",
  ) as OwnerDataType;
  const actionData: ActionErrorDataType =
    useActionData() as ActionErrorDataType;
  const navigation: Navigation = useNavigation();
  const isSubmitting: boolean = navigation.state === "submitting";
  const isLoading: boolean = navigation.state === "loading";

  return (
    <>
      <LoadingSpinnerLayout isLoading={isLoading} isSubmitting={isSubmitting} />
      <EditOwnerForm
        actionData={actionData}
        ownerData={ownerData}
        isSubmitting={isSubmitting}
      />
    </>
  );
};

export default EditOwnerPage;
