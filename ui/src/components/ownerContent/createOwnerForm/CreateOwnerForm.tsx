import { Form } from "react-router";
import { CreateOwnerFormType } from "./CreateOwnerFormTypes";

const CreateOwnerForm: React.FC<CreateOwnerFormType> = ({
  actionData,
  isSubmitting,
}: CreateOwnerFormType) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 offset-0 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
          <div className="border border-secondary rounded p-3 mt-3">
            <h3>Create New Owner</h3>
            <Form method="post" action="/owner/new">
              <div className="container-fluid p-0">
                <div className="row">
                  <div className="col-12 col-sm-6 col-md-4 mb-0 mb-sm-2">
                    <input
                      className="form-control border-secondary input-focus-shadow"
                      type="text"
                      id="ownerName"
                      name="ownerName"
                      placeholder="Enter Name"
                      required
                    />
                    {actionData?.errors?.ownerName && (
                      <div className="text-danger">
                        {actionData.errors.ownerName}
                      </div>
                    )}
                  </div>
                  <div className="col-12 col-sm-6 col-md-4 mt-2 mb-2 mt-sm-0">
                    <input
                      className="form-control border-secondary input-focus-shadow"
                      type="text"
                      id="ownerSurname"
                      name="ownerSurname"
                      placeholder="Enter Surname"
                      required
                    />
                    {actionData?.errors?.ownerSurname && (
                      <div className="text-danger">
                        {actionData.errors.ownerSurname}
                      </div>
                    )}
                  </div>
                  <div className="col-12 col-sm-6 col-md-4 mb-0 mb-sm-2">
                    <input
                      className="form-control border-secondary input-focus-shadow"
                      type="date"
                      id="ownerDateOfBirth"
                      name="ownerDateOfBirth"
                      required
                    />
                    {actionData?.errors?.ownerDateOfBirth && (
                      <div className="text-danger">
                        {actionData.errors.ownerDateOfBirth}
                      </div>
                    )}
                  </div>
                  <div className="col-12 col-sm-6 col-md-4 mt-2 mb-2 mt-sm-0">
                    <input
                      className="form-control border-secondary input-focus-shadow"
                      type="email"
                      id="ownerEmail"
                      name="ownerEmail"
                      placeholder="Enter Email"
                      required
                    />
                    {actionData?.errors?.ownerEmail && (
                      <div className="text-danger">
                        {actionData.errors.ownerEmail}
                      </div>
                    )}
                  </div>
                  <div className="col-12 col-sm-6 col-md-4 mb-0 mb-sm-2">
                    <input
                      className="form-control border-secondary input-focus-shadow"
                      type="tel"
                      id="ownerPhoneNumber"
                      name="ownerPhoneNumber"
                      placeholder="Enter Phone Number"
                      required
                    />
                    {actionData?.errors?.ownerPhoneNumber && (
                      <div className="text-danger">
                        {actionData.errors.ownerPhoneNumber}
                      </div>
                    )}
                  </div>
                  <div className="col-12 col-sm-6 col-md-4 mt-2 mb-2 mt-sm-0">
                    <input
                      className="form-control border-secondary input-focus-shadow"
                      type="text"
                      id="ownerAddress"
                      name="ownerAddress"
                      placeholder="Enter Address"
                      required
                    />
                    {actionData?.errors?.ownerAddress && (
                      <div className="text-danger">
                        {actionData.errors.ownerAddress}
                      </div>
                    )}
                  </div>
                  <div className="col-12 col-sm-6 col-md-4 mb-0 mb-sm-2">
                    <input
                      className="form-control border-secondary input-focus-shadow"
                      type="text"
                      id="ownerCountry"
                      name="ownerCountry"
                      placeholder="Enter Country"
                      required
                    />
                    {actionData?.errors?.ownerCountry && (
                      <div className="text-danger">
                        {actionData.errors.ownerCountry}
                      </div>
                    )}
                  </div>
                  <div className="col-12 col-sm-6 col-md-4 mt-2 mb-2 mt-sm-0">
                    <input
                      className="form-control border-secondary input-focus-shadow"
                      type="text"
                      id="ownerCity"
                      name="ownerCity"
                      placeholder="Enter City"
                      required
                    />
                    {actionData?.errors?.ownerCity && (
                      <div className="text-danger">
                        {actionData.errors.ownerCity}
                      </div>
                    )}
                  </div>
                  <div className="col-12 col-sm-6 col-md-4 mb-2">
                    <input
                      className="form-control border-secondary input-focus-shadow"
                      type="text"
                      id="ownerPostalCode"
                      name="ownerPostalCode"
                      placeholder="Enter Postal Code"
                      required
                    />
                    {actionData?.errors?.ownerPostalCode && (
                      <div className="text-danger">
                        {actionData.errors.ownerPostalCode}
                      </div>
                    )}
                  </div>
                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn btn-secondary"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Creating..." : "Create Owner"}
                    </button>
                  </div>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateOwnerForm;
