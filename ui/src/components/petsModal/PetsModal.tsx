import { PetsModalTypes } from "./PetsModalTypes";
import { PetType } from "../../models/PetTypes";

const PetsModal: React.FC<PetsModalTypes> = ({
  pets,
  ownerFullName,
  dataTarget,
}: PetsModalTypes) => {
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
              Pets Modal
            </h4>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <h5 className="border border-secondary border-top-0 border-end-0 border-start-0 pb-2">
              Owner: {ownerFullName}
            </h5>
            {pets.map((pet: PetType, index: number) => (
              <div
                key={pet.id}
                className={`border border-secondary border-top-0 border-end-0 border-start-0 ${pets.length - 1 === index ? "border-bottom-0" : ""}`}
              >
                <h6>Pet detail</h6>
                <p className="mb-0">Pet id: {pet.id}</p>
                <p className="mb-0">Pet name: {pet.name}</p>
                <p className="mb-1">Pet age: {pet.age}</p>
                <button type="button" className="btn btn-secondary mb-3 p-1">
                  Pet Detail Page
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetsModal;
