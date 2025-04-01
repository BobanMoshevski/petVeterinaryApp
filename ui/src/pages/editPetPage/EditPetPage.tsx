import {
  Navigation,
  useActionData,
  useNavigation,
  useRouteLoaderData,
} from "react-router";
import { ActionErrorDataType } from "../../services/https/action/actionTypes";
import EditPetForm from "../../components/editPetForm/EditPetForm";
import { OwnerLoaderDataType } from "../../components/editOwner/EditOwnerTypes";
import { PetType } from "../../models/PetTypes";

const EditPetPage: React.FC = () => {
  const ownerLoaderData: OwnerLoaderDataType = useRouteLoaderData(
    "pet",
  ) as OwnerLoaderDataType;
  const petLoaderData: PetType[] = useRouteLoaderData("editPet") as PetType[];
  const actionErrorData: ActionErrorDataType =
    useActionData() as ActionErrorDataType;
  const navigation: Navigation = useNavigation();
  const isSubmitting: boolean = navigation.state === "submitting";
  const isLoading: boolean = navigation.state === "loading";
  console.log("ownerLoaderData", ownerLoaderData);
  console.log("petLoaderData", petLoaderData);

  return (
    <>
      {(isSubmitting || isLoading) && (
        <>
          <div className="overlay" />
          <div className="spinner-container">
            <div
              className="spinner-border text-light layout-spinner"
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </>
      )}
      <div className="container">
        <div className="row">
          <EditPetForm
            actionErrorData={actionErrorData}
            isSubmitting={isSubmitting}
          />
        </div>
      </div>
    </>
  );
};

export default EditPetPage;
