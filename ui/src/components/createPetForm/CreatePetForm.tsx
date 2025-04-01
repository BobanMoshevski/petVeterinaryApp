import { useState } from "react";
import { Form } from "react-router";
import {
  CreatePetFormType,
  SelectedOwnerStateType,
  SelectOptionType,
} from "./CreatePetFormTypes";
import "./CreatePetFormStyle.css";
import { OwnerType } from "../../models/OwnerTypes";

const CreatePetForm: React.FC<CreatePetFormType> = ({
  actionData,
  isSubmitting,
  isLoading,
  ownersData,
}: CreatePetFormType) => {
  const [selectedOwner, setSelectedOwner]: SelectedOwnerStateType =
    useState<string>("");

  const selectOptions: SelectOptionType[] = ownersData.map(
    (owner: OwnerType) => {
      return { label: owner.fullName, value: String(owner.id) };
    },
  );

  const selectOwnerHandle: (value: string) => void = (value: string) => {
    setSelectedOwner(value);
  };

  return (
    <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
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
      <div className="border border-secondary rounded p-3 mt-3">
        <h2 className="create-owner-form-heading">Create New Pet</h2>
        <Form method="post" action="/pet/new">
          <div className="mb-3">
            <input
              className="form-control border-secondary"
              type="text"
              id="petName"
              name="petName"
              placeholder="Enter Pet Name"
              required
            />
            {actionData?.errors?.name && (
              <div className="text-danger">{actionData.errors.name}</div>
            )}
          </div>
          <div className="mb-3">
            <input
              className="form-control border-secondary"
              type="number"
              id="PetAge"
              name="PetAge"
              placeholder="Enter Pet Age"
              required
            />
            {actionData?.errors?.age && (
              <div className="text-danger">{actionData.errors.age}</div>
            )}
          </div>
          <input
            type="text"
            id="ownerId"
            name="ownerId"
            className="visually-hidden"
            value={selectedOwner}
            readOnly
          />
          <div className="dropdown mb-3">
            <button
              className="btn btn-outline-secondary text-dark dropdown-toggle d-flex justify-content-between align-items-center hover-light w-100"
              type="button"
              data-bs-toggle="dropdown"
            >
              {selectedOwner
                ? `Owner: ${
                    selectOptions.find(
                      (owner: { label: string; value: string }) =>
                        owner.value === selectedOwner,
                    )?.label
                  }`
                : "Select a owner"}
            </button>
            <ul className="dropdown-menu w-100">
              {selectOptions.map((option: { label: string; value: string }) => (
                <li key={option.value}>
                  <button
                    className={`dropdown-item ${selectedOwner === option.value ? "bg-secondary text-white" : ""}`}
                    type="button"
                    onMouseEnter={(
                      e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
                    ) =>
                      e.currentTarget.classList.add(
                        "bg-secondary",
                        "text-white",
                      )
                    }
                    onMouseLeave={(
                      e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
                    ) => {
                      if (selectedOwner !== option.value) {
                        e.currentTarget.classList.remove(
                          "bg-secondary",
                          "text-white",
                        );
                      }
                    }}
                    onClick={() => selectOwnerHandle(option.value)}
                  >
                    {option.label}
                  </button>
                </li>
              ))}
            </ul>
            {actionData?.errors?.ownerId && (
              <div className="text-danger">{actionData.errors.ownerId}</div>
            )}
          </div>
          <button
            type="submit"
            className="btn btn-secondary"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Creating..." : "Create Pet"}
          </button>
        </Form>
      </div>
    </div>
  );
};

export default CreatePetForm;
