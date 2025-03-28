import {
  Form,
  Navigation,
  useActionData,
  useNavigation,
  useRouteLoaderData,
} from "react-router-dom";
import "./EditOwnerStyle.css";
import { ActionDataType, OwnerLoaderDataType } from "./EditOwnerTypes";

const EditOwner: React.FC = () => {
  const ownerLoaderData: OwnerLoaderDataType = useRouteLoaderData(
    "editOwner",
  ) as OwnerLoaderDataType;
  const actionData: ActionDataType = useActionData() as {
    error?: string;
    errors?: Record<string, string>;
  };
  const navigation: Navigation = useNavigation();
  const isSubmitting: boolean = navigation.state === "submitting";
  const isLoading: boolean = navigation.state === "loading";

  return (
    <>
      {isSubmitting ||
        (isLoading && (
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
        ))}
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
            <div className="border border-secondary rounded p-3 mt-3">
              <h2 className="edit-owner-form-heading">Edit Owner</h2>
              <Form method="post" action={`/owner/${ownerLoaderData.id}/edit`}>
                <input type="hidden" name="id" value={ownerLoaderData.id} />

                <div className="mb-3">
                  <input
                    className="form-control border-secondary"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="name"
                    defaultValue={ownerLoaderData.name}
                    required
                  />
                  {actionData?.errors?.name && (
                    <div className="text-danger">{actionData.errors.name}</div>
                  )}
                </div>
                <div className="mb-3">
                  <input
                    className="form-control border-secondary"
                    type="text"
                    id="surname"
                    name="surname"
                    placeholder="surname"
                    defaultValue={ownerLoaderData.surname}
                    required
                  />
                  {actionData?.errors?.surname && (
                    <div className="text-danger">
                      {actionData.errors.surname}
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <input
                    className="form-control border-secondary"
                    type="number"
                    id="age"
                    name="age"
                    placeholder="age"
                    defaultValue={ownerLoaderData.age}
                    required
                  />
                  {actionData?.errors?.age && (
                    <div className="text-danger">{actionData.errors.age}</div>
                  )}
                </div>
                <button
                  type="submit"
                  className="btn btn-secondary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Updating..." : "Update Owner"}
                </button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditOwner;
