import { PetType } from "../../models/PetTypes";
import { VaccinesModalTypes } from "./VaccinesModalTypes";
import { VaccineType } from "../../models/VaccineTypes";

const VaccinesModal: React.FC<VaccinesModalTypes> = ({
  pets,
  dataTarget,
}: VaccinesModalTypes) => {
  return (
    <div
      className="modal fade"
      id={dataTarget}
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex={-1}
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header border border-dark border-top-0 border-end-0 border-start-0">
            <h4 className="modal-title" id="staticBackdropLabel">
              Vaccines Modal
            </h4>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            {pets.map((pet: PetType, petIndex: number) => (
              <div
                key={pet.id}
                className={`border border-secondary border-top-0 border-end-0 border-start-0 ${pets.length - 1 === petIndex ? "border-bottom-0" : ""}`}
              >
                <h5 className="border border-secondary border-top-0 border-end-0 border-start-0 mb-0 py-2">
                  Pet name: {pet.name}
                </h5>
                {pet.vaccines.length === 0 ? (
                  <p className="mb-0">No Vaccines</p>
                ) : (
                  pet.vaccines.map(
                    (vaccine: VaccineType, vaccineIndex: number) => (
                      <div
                        key={`vaccine${vaccine.id}`}
                        className={`border border-secondary border-top-0 border-end-0 border-start-0 ${pets.length - 1 === vaccineIndex ? "border-bottom-0" : ""}`}
                      >
                        <p className="mb-0">Vaccine id: {vaccine.id}</p>
                        <p className="mb-0">Vaccine name: {vaccine.name}</p>
                        <button
                          type="button"
                          className="btn btn-secondary p-1 mb-2"
                        >
                          Vaccine Detail Page
                        </button>
                      </div>
                    ),
                  )
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VaccinesModal;
