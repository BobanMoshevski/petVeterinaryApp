import { Form, NavigateFunction, useNavigate } from "react-router";
import PetsTableVaccinesModal from "../petsTableVaccinesModal/PetsTableVaccinesModal";
import { PetsTableTypes } from "./PetsTableTypes";
import { PetType } from "../../../models/PetTypes";

const PetsTable: React.FC<PetsTableTypes> = ({ petsData }: PetsTableTypes) => {
  const navigate: NavigateFunction = useNavigate();

  return (
    <div className="col-12">
      <div className="table-horizontal-scroll">
        <table className="table table-bordered border-secondary table-hover mb-0">
          <thead>
            <tr>
              <th scope="col" className="text-center align-middle">
                Pet Id
              </th>
              <th scope="col" className="text-center align-middle">
                Owner Full Name
              </th>
              <th scope="col" className="text-center align-middle">
                Pet Name
              </th>
              <th scope="col" className="text-center align-middle">
                Pet Age
              </th>
              <th scope="col" className="text-center align-middle">
                Pets Vaccines
              </th>
              <th scope="col" className="text-center align-middle">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {petsData?.map((pet: PetType) => (
              <tr key={`pet${pet.id}`}>
                <th scope="row" className="text-center align-middle">
                  {pet.id}
                </th>
                <td className="text-center align-middle">
                  {pet.owner.fullName}
                </td>
                <td className="text-center align-middle">{pet.name}</td>
                <td className="text-center align-middle">{pet.age}</td>
                <td className="text-center align-middle">
                  {pet.vaccines.length === 0 ? (
                    "No Vaccines"
                  ) : (
                    <>
                      <div className="d-flex justify-content-center align-items-center">
                        <span
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Pets Vaccines List"
                        >
                          <button
                            type="button"
                            className="btn btn-secondary d-flex p-1"
                            data-bs-toggle="modal"
                            data-bs-target={`#vaccineModal${pet.id}`}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              fill="currentColor"
                              className="bi bi-list-ol"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5"
                              />
                              <path d="M1.713 11.865v-.474H2c.217 0 .363-.137.363-.317 0-.185-.158-.31-.361-.31-.223 0-.367.152-.373.31h-.59c.016-.467.373-.787.986-.787.588-.002.954.291.957.703a.595.595 0 0 1-.492.594v.033a.615.615 0 0 1 .569.631c.003.533-.502.8-1.051.8-.656 0-1-.37-1.008-.794h.582c.008.178.186.306.422.309.254 0 .424-.145.422-.35-.002-.195-.155-.348-.414-.348h-.3zm-.004-4.699h-.604v-.035c0-.408.295-.844.958-.844.583 0 .96.326.96.756 0 .389-.257.617-.476.848l-.537.572v.03h1.054V9H1.143v-.395l.957-.99c.138-.142.293-.304.293-.508 0-.18-.147-.32-.342-.32a.33.33 0 0 0-.342.338zM2.564 5h-.635V2.924h-.031l-.598.42v-.567l.629-.443h.635z" />
                            </svg>
                          </button>
                        </span>
                      </div>
                      <PetsTableVaccinesModal
                        vaccines={pet.vaccines}
                        dataTarget={`vaccineModal${pet.id}`}
                        petName={pet.name}
                        navigate={navigate}
                      />
                    </>
                  )}
                </td>
                <td className="text-center align-middle">
                  <div className="d-flex justify-content-center align-items-center">
                    <button
                      type="button"
                      className="btn btn-secondary d-flex p-1"
                      aria-label="Pet Details"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Pet Details"
                      onClick={() =>
                        navigate(`/pet/${pet.id}`, { replace: true })
                      }
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        fill="currentColor"
                        className="bi bi-eye"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary d-flex p-1 mx-1"
                      aria-label="Edit Pet"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Edit Pet"
                      onClick={() =>
                        navigate(`/pet/${pet.id}/edit`, { replace: true })
                      }
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        fill="currentColor"
                        className="bi bi-pen"
                        viewBox="0 0 16 16"
                      >
                        <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z" />
                      </svg>
                    </button>
                    <Form method="delete" action={`/pet/${pet.id}/delete`}>
                      <button
                        type="submit"
                        className="btn btn-secondary d-flex p-1"
                        aria-label="Delete Pet"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Delete Pet"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          fill="currentColor"
                          className="bi bi-x-circle-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
                        </svg>
                      </button>
                    </Form>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PetsTable;
