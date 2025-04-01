import { EditPetFormType } from "./EditPetFormTypes";

const EditPetForm: React.FC<EditPetFormType> = ({
  actionErrorData,
  isSubmitting,
}: EditPetFormType) => {
  console.log(actionErrorData);
  console.log(isSubmitting);
  // const [selectedOwner, setSelectedOwner]: SelectedOwnerStateType =
  //   useState<string>("");

  // const selectOptions: SelectOptionType[] = ownersData.map(
  //   (owner: OwnerType) => {
  //     return { label: owner.fullName, value: String(owner.id) };
  //   },
  // );

  // const selectOwnerHandle: (value: string) => void = (value: string) => {
  //   setSelectedOwner(value);
  // };

  return (
    <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
      <div className="border border-secondary rounded p-3 mt-3">
        <h2 className="create-owner-form-heading">Edit Pet</h2>
        {/* <Form method="put" action={`/pet/${petLoaderData.id}/edit`}>
          <div className="mb-3">
            <input
              className="form-control border-secondary"
              type="text"
              id="petName"
              name="petName"
              placeholder="Enter Pet Name"
              defaultValue="petName"
              required
            />
            {actionErrorData?.errors?.name && (
              <div className="text-danger">{actionErrorData.errors.name}</div>
            )}
          </div>
          <div className="mb-3">
            <input
              className="form-control border-secondary"
              type="number"
              id="PetAge"
              name="PetAge"
              placeholder="Enter Pet Age"
              defaultValue="PetAge"
              required
            />
            {actionErrorData?.errors?.age && (
              <div className="text-danger">{actionErrorData.errors.age}</div>
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
            {actionErrorData?.errors?.ownerId && (
              <div className="text-danger">
                {actionErrorData.errors.ownerId}
              </div>
            )}
          </div>
          <button
            type="submit"
            className="btn btn-secondary"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Creating..." : "Create Pet"}
          </button>
        </Form> */}
      </div>
    </div>
  );
};

export default EditPetForm;
