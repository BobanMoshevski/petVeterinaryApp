import { Form } from "react-router";
import { CreateVaccineFormType } from "./CreateVaccineFormTypes";

const CreateVaccineForm: React.FC<CreateVaccineFormType> = ({
  actionData,
  isSubmitting,
}: CreateVaccineFormType) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 offset-0 col-lg-8 offset-lg-2">
          <div className="border border-secondary rounded p-3 mt-3">
            <h3>Create New Vaccine</h3>
            <Form method="post" action="/vaccine/new">
              <div className="container-fluid p-0">
                <div className="row">
                  <div className="col-12 col-sm-6">
                    <input
                      className="form-control  input-focus-shadow border-secondary"
                      type="text"
                      id="vaccineName"
                      name="vaccineName"
                      placeholder="Enter Vaccine Name"
                      required
                    />
                    {actionData?.errors?.vaccineName && (
                      <div className="text-danger">
                        {actionData.errors.vaccineName}
                      </div>
                    )}
                  </div>
                  <div className="col-12 col-sm-6 my-2 my-sm-0">
                    <input
                      className="form-control  input-focus-shadow border-secondary"
                      type="text"
                      id="vaccineManufacturer"
                      name="vaccineManufacturer"
                      placeholder="Enter Vaccine Manufacturer"
                      required
                    />
                    {actionData?.errors?.vaccineManufacturer && (
                      <div className="text-danger">
                        {actionData.errors.vaccineManufacturer}
                      </div>
                    )}
                  </div>
                  <div className="col-12 col-sm-6 my-0 my-sm-2">
                    <input
                      className="form-control  input-focus-shadow border-secondary"
                      type="text"
                      id="vaccineBatchNumber"
                      name="vaccineBatchNumber"
                      placeholder="Enter Vaccine Batch Number"
                      required
                    />
                    {actionData?.errors?.vaccineBatchNumber && (
                      <div className="text-danger">
                        {actionData.errors.vaccineBatchNumber}
                      </div>
                    )}
                  </div>
                  <div className="col-12 col-sm-6 my-2">
                    <input
                      className="form-control input-focus-shadow border-secondary"
                      type="date"
                      id="vaccineExpirationDate"
                      name="vaccineExpirationDate"
                      required
                    />
                    {actionData?.errors?.vaccineExpirationDate && (
                      <div className="text-danger">
                        {actionData.errors.vaccineExpirationDate}
                      </div>
                    )}
                  </div>
                  <div className="col-12">
                    <textarea
                      className="form-control input-focus-shadow border-secondary w-100"
                      id="vaccineDescription"
                      name="vaccineDescription"
                      placeholder="Enter Description"
                    />
                    {actionData?.errors?.vaccineDescription && (
                      <div className="text-danger">
                        {actionData.errors.vaccineDescription}
                      </div>
                    )}
                  </div>
                  <div className="col-12 mt-2">
                    <button
                      type="submit"
                      className="btn btn-secondary"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Creating..." : "Create Vaccine"}
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

export default CreateVaccineForm;
