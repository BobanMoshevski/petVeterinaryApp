import { useState } from "react";
import { Form } from "react-router";
import {
  CreatePetFormType,
  MouseEventType,
  OnMouseEnterHandlerType,
  OnMouseLeaveHandlerType,
  SelectedOptionHandlerType,
  SelectedOwnerStateType,
  SelectedPetGenderStateType,
  SelectOptionType,
} from "./CreatePetFormTypes";
import { OwnerType } from "../../../models/OwnerTypes";
import { VaccineType } from "../../../models/VaccineTypes";

const CreatePetForm: React.FC<CreatePetFormType> = ({
  actionData,
  isSubmitting,
  ownersData,
  vaccinesData,
}: CreatePetFormType) => {
  const [selectedOwner, setSelectedOwner]: SelectedOwnerStateType =
    useState<string>("");

  const [
    selectedPetGender,
    selectedPetGenderStateType,
  ]: SelectedPetGenderStateType = useState<string>("");

  const selectOwnerOptions: SelectOptionType[] = ownersData.map(
    (owner: OwnerType) => {
      return { label: owner.fullName, value: String(owner.id) };
    },
  );

  const selectPetGenderOptions: SelectOptionType[] = [
    { label: "Select Gender", value: "" },
    { label: "Female", value: "Female" },
    { label: "Male", value: "Male" },
  ];

  const onMouseEnterHandler: OnMouseEnterHandlerType = (e: MouseEventType) => {
    e.currentTarget.classList.add("bg-secondary", "text-white");
  };

  const onMouseLeaveHandler: OnMouseLeaveHandlerType = (
    selectBy: string,
    optionValue: string,
    e: MouseEventType,
  ) => {
    if (selectBy !== optionValue) {
      e.currentTarget.classList.remove("bg-secondary", "text-white");
    }
  };

  const selectOwnerHandler: (value: string) => void = (value: string) => {
    setSelectedOwner(value);
  };

  const selectedOptionHandler: SelectedOptionHandlerType = (
    optionValue: string,
    query: string,
  ) => {
    if (query === "Female") {
      selectedPetGenderStateType(optionValue);
    }
    if (query === "Male") {
      selectedPetGenderStateType(optionValue);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 offset-0 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
          <div className="border border-secondary rounded p-3 mt-3">
            <h3>Create New Pet</h3>
            <Form method="post" action="/pet/new">
              <div className="container-fluid p-0">
                <div className="row">
                  <div className="col-12 col-sm-6 col-md-4 mb-0 mb-sm-2">
                    <input
                      className="form-control border-secondary input-focus-shadow"
                      type="text"
                      id="petName"
                      name="petName"
                      placeholder="Enter Name"
                      required
                    />
                    {actionData?.errors?.petName && (
                      <div className="text-danger">
                        {actionData.errors.petName}
                      </div>
                    )}
                  </div>
                  <div className="col-12 col-sm-6 col-md-4 mt-2 mb-2 mt-sm-0">
                    <input
                      className="form-control border-secondary input-focus-shadow"
                      type="date"
                      id="petDateOfBirth"
                      name="petDateOfBirth"
                      required
                    />
                    {actionData?.errors?.petDateOfBirth && (
                      <div className="text-danger">
                        {actionData.errors.petDateOfBirth}
                      </div>
                    )}
                  </div>
                  <div className="col-12 col-sm-6 col-md-4 mb-0 mb-sm-2">
                    <input
                      type="text"
                      id="ownerId"
                      name="ownerId"
                      className="visually-hidden"
                      value={selectedOwner}
                      readOnly
                    />
                    <div className="dropdown">
                      <button
                        className="btn btn-outline-secondary text-dark dropdown-toggle d-flex justify-content-between align-items-center hover-light w-100"
                        type="button"
                        data-bs-toggle="dropdown"
                      >
                        {selectedOwner
                          ? `Owner: ${
                              selectOwnerOptions.find(
                                (owner: { label: string; value: string }) =>
                                  owner.value === selectedOwner,
                              )?.label
                            }`
                          : "Select Owner"}
                      </button>
                      <ul className="dropdown-menu p-0 w-100">
                        {selectOwnerOptions.map(
                          (option: { label: string; value: string }) => (
                            <li key={option.value}>
                              <button
                                className={`dropdown-item ${selectedOwner === option.value ? "bg-secondary text-white" : ""}`}
                                type="button"
                                onMouseEnter={(
                                  e: React.MouseEvent<
                                    HTMLButtonElement,
                                    MouseEvent
                                  >,
                                ) =>
                                  e.currentTarget.classList.add(
                                    "bg-secondary",
                                    "text-white",
                                  )
                                }
                                onMouseLeave={(
                                  e: React.MouseEvent<
                                    HTMLButtonElement,
                                    MouseEvent
                                  >,
                                ) => {
                                  if (selectedOwner !== option.value) {
                                    e.currentTarget.classList.remove(
                                      "bg-secondary",
                                      "text-white",
                                    );
                                  }
                                }}
                                onClick={() => selectOwnerHandler(option.value)}
                              >
                                {option.label}
                              </button>
                            </li>
                          ),
                        )}
                      </ul>
                      {actionData?.errors?.ownerId && (
                        <div className="text-danger">
                          {actionData.errors.ownerId}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-md-4 mt-2 mb-2 mt-sm-0">
                    <input
                      className="form-control border-secondary input-focus-shadow"
                      type="text"
                      id="petSpecies"
                      name="petSpecies"
                      placeholder="Enter Species"
                      required
                    />
                    {actionData?.errors?.petSpecies && (
                      <div className="text-danger">
                        {actionData.errors.petSpecies}
                      </div>
                    )}
                  </div>
                  <div className="col-12 col-sm-6 col-md-4 mt-2 mb-2 mt-sm-0">
                    <input
                      className="form-control border-secondary input-focus-shadow"
                      type="text"
                      id="petBreed"
                      name="petBreed"
                      placeholder="Enter Breed"
                      required
                    />
                    {actionData?.errors?.petBreed && (
                      <div className="text-danger">
                        {actionData.errors.petBreed}
                      </div>
                    )}
                  </div>
                  <div className="col-12 col-sm-6 col-md-4 mt-2 mb-2 mt-sm-0">
                    <input
                      type="text"
                      id="petGender"
                      name="petGender"
                      className="visually-hidden"
                      value={selectedPetGender}
                      readOnly
                    />
                    <div className="dropdown">
                      <button
                        className="btn btn-outline-secondary border border-secondary text-dark dropdown-toggle d-flex justify-content-between align-items-center hover-light input-focus-shadow w-100"
                        type="button"
                        data-bs-toggle="dropdown"
                      >
                        {selectedPetGender
                          ? `Gender: ${
                              selectPetGenderOptions.find(
                                (orderBy: SelectOptionType) =>
                                  orderBy.value === selectedPetGender,
                              )?.label
                            }`
                          : "Select Gender"}
                      </button>
                      <ul className="dropdown-menu py-0 w-100">
                        {selectPetGenderOptions.map(
                          (option: SelectOptionType) => (
                            <li key={option.value}>
                              <button
                                className={`dropdown-item ${selectedPetGender === option.value ? "bg-secondary text-white" : ""}`}
                                type="button"
                                onMouseEnter={(e: MouseEventType) =>
                                  onMouseEnterHandler(e)
                                }
                                onMouseLeave={(e: MouseEventType) =>
                                  onMouseLeaveHandler(
                                    selectedPetGender,
                                    option.value,
                                    e,
                                  )
                                }
                                onClick={() =>
                                  selectedOptionHandler(option.value, "Female")
                                }
                              >
                                {option.label}
                              </button>
                            </li>
                          ),
                        )}
                      </ul>
                    </div>
                    {actionData?.errors?.petGender && (
                      <div className="text-danger">
                        {actionData.errors.petGender}
                      </div>
                    )}
                  </div>
                  <div className="col-12 col-sm-6 col-md-4 mt-2 mb-2 mt-sm-0">
                    <input
                      className="form-control border-secondary input-focus-shadow"
                      type="number"
                      id="petWeight"
                      name="petWeight"
                      placeholder="Enter Weight"
                      step="any"
                      required
                    />
                    {actionData?.errors?.petWeight && (
                      <div className="text-danger">
                        {actionData.errors.petWeight}
                      </div>
                    )}
                  </div>
                  <div className="col-12">
                    <div className="border border-secondary rounded p-2">
                      <div className="container-fluid p-0">
                        <div className="row">
                          {vaccinesData.length !== 0 &&
                            vaccinesData.map((vaccine: VaccineType) => (
                              <div
                                className="col-12 col-sm-6 col-lg-4"
                                key={`vaccine${vaccine.id}`}
                              >
                                <div className="form-check">
                                  <label
                                    className="form-check-label"
                                    htmlFor={`vaccine${vaccine.id}`}
                                  >
                                    <input
                                      className="form-check-input border border-secondary custom-checkbox input-focus-shadow"
                                      type="checkbox"
                                      value={`${vaccine.id}`}
                                      name="vaccinesIds"
                                      id={`vaccine${vaccine.id}`}
                                    />
                                    {vaccine.name}
                                  </label>
                                </div>
                              </div>
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 mt-2">
                    <button
                      type="submit"
                      className="btn btn-secondary"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Creating..." : "Create Pet"}
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

export default CreatePetForm;
