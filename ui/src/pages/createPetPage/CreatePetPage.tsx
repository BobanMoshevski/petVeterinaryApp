import {
  Navigation,
  useActionData,
  useNavigation,
  useRouteLoaderData,
} from "react-router";
import CreatePetForm from "../../components/createPetForm/CreatePetForm";
import { CreatePetActionDataErrorType } from "../../components/createPetForm/CreatePetFormTypes";
import { OwnerType } from "../../models/OwnerTypes";

const CreatePetPage: React.FC = () => {
  const actionData: CreatePetActionDataErrorType =
    useActionData() as CreatePetActionDataErrorType;
  const ownersData: OwnerType[] | undefined = useRouteLoaderData("newPet");

  const navigation: Navigation = useNavigation();
  const isSubmitting: boolean = navigation.state === "submitting";
  const isLoading: boolean = navigation.state === "loading";

  return (
    <div className="container">
      <div className="row">
        <CreatePetForm
          actionData={actionData}
          isSubmitting={isSubmitting}
          isLoading={isLoading}
          ownersData={ownersData || []}
        />
      </div>
    </div>
  );
};

export default CreatePetPage;
