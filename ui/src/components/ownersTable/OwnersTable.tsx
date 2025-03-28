import { useState } from "react";
import { Form, NavigateFunction, useNavigate } from "react-router";
import { OwnerType } from "../../models/OwnerTypes";
import PetsModal from "../petsModal/PetsModal";
import VaccinesModal from "../vaccinesModal/VaccinesModal";
import {
  DeleteOwnerLoadingStateType,
  OwnersTableTypes,
} from "./ownersTableTypes";
import "./OwnersTableStyle.css";

const OwnersTable: React.FC<OwnersTableTypes> = ({
  ownersData,
}: OwnersTableTypes) => {
  const navigate: NavigateFunction = useNavigate();

  const [
    deleteOwnerLoading,
    setDeleteOwnerLoading,
  ]: DeleteOwnerLoadingStateType = useState<number | null>(null);

  const handleDeleteClickHandler: (ownerId: number) => void = (
    ownerId: number,
  ) => {
    setDeleteOwnerLoading(ownerId);
  };

  return (
    <div className="col-12">
      <div className="table-horizontal-scroll">
        <table className="table table-bordered border-secondary table-hover">
          <thead>
            <tr>
              <th scope="col" className="text-center">
                Id
              </th>
              <th scope="col" className="text-center">
                Name
              </th>
              <th scope="col" className="text-center">
                Surname
              </th>
              <th scope="col" className="text-center">
                Age
              </th>
              <th scope="col" className="text-center">
                Pets Modal
              </th>
              <th scope="col" className="text-center">
                Vaccines Modal
              </th>
              <th scope="col" className="text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {ownersData?.map((owner: OwnerType) => (
              <tr key={owner.id}>
                <th scope="row" className="text-center">
                  <div className="mt-1">{owner.id}</div>
                </th>
                <td className="text-center">
                  <div className="mt-1">{owner.name}</div>
                </td>
                <td className="text-center">
                  <div className="mt-1">{owner.surname}</div>
                </td>
                <td className="text-center">
                  <div className="mt-1">{owner.age}</div>
                </td>
                <td className="text-center">
                  {owner.pets.length === 0 ? (
                    <div className="mt-1">No Pets</div>
                  ) : (
                    <>
                      <button
                        type="button"
                        className="btn btn-secondary p-1"
                        data-bs-toggle="modal"
                        data-bs-target={`#petModal${owner.id}`}
                      >
                        Pets
                      </button>
                      <PetsModal
                        pets={owner.pets}
                        ownerFullName={owner.fullName}
                        dataTarget={`petModal${owner.id}`}
                      />
                    </>
                  )}
                </td>
                <td className="text-center">
                  {owner.pets.length === 0 ? (
                    <div className="mt-1">No Vaccines</div>
                  ) : (
                    <>
                      <button
                        type="button"
                        className="btn btn-secondary p-1"
                        data-bs-toggle="modal"
                        data-bs-target={`#vaccineModal${owner.id}`}
                      >
                        Vaccines
                      </button>
                      <VaccinesModal
                        pets={owner.pets}
                        dataTarget={`vaccineModal${owner.id}`}
                      />
                    </>
                  )}
                </td>
                <td className="text-center">
                  <div className="d-flex justify-content-center align-items-center pt-1">
                    <button
                      type="button"
                      className="btn btn-secondary d-flex p-1"
                      aria-label="Details Page"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Details Page"
                      onClick={() =>
                        navigate(`/owner/${owner.id}`, { replace: true })
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
                      aria-label="Edit Owner"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Edit Owner"
                      onClick={() =>
                        navigate(`/owner/${owner.id}/edit`, { replace: true })
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
                    <Form method="delete" action={`/owner/${owner.id}/delete`}>
                      <button
                        type="submit"
                        className="btn btn-secondary d-flex p-1"
                        aria-label="Delete Owner"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Delete Owner"
                        onClick={(
                          e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
                        ) => {
                          if (deleteOwnerLoading === owner.id) {
                            e.preventDefault();
                          } else {
                            handleDeleteClickHandler(owner.id);
                          }
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          fill="currentColor"
                          className="bi bi-person-fill-x"
                          viewBox="0 0 16 16"
                        >
                          <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-9 8c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4" />
                          <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m-.646-4.854.646.647.646-.647a.5.5 0 0 1 .708.708l-.647.646.647.646a.5.5 0 0 1-.708.708l-.646-.647-.646.647a.5.5 0 0 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 .708-.708" />
                        </svg>
                      </button>
                      {deleteOwnerLoading === owner.id && (
                        <>
                          <div className="overlay" />
                          <div className="spinner-container">
                            <div
                              className="spinner-border text-light layout-spinner"
                              role="status"
                            >
                              <span className="visually-hidden">
                                Loading...
                              </span>
                            </div>
                          </div>
                        </>
                      )}
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

export default OwnersTable;
