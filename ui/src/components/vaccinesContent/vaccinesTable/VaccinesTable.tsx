import { Form } from "react-router";
import { VaccineType } from "../../../models/VaccineTypes";
import { VaccinesTableTypes } from "./VaccinesTableTypes";

const VaccinesTable: React.FC<VaccinesTableTypes> = ({
  navigate,
  vaccines,
}: VaccinesTableTypes) => {
  return (
    <div className="col-12">
      <div className="table-horizontal-scroll">
        <table className="table table-bordered border-secondary table-hover mb-0">
          <thead>
            <tr>
              <th scope="col" className="text-center align-middle">
                Vaccine Id
              </th>
              <th scope="col" className="text-center align-middle">
                Vaccine Name
              </th>
              <th scope="col" className="text-center align-middle">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {vaccines?.map((vaccine: VaccineType) => (
              <tr key={`vaccine${vaccine.id}`}>
                <th scope="row" className="text-center align-middle">
                  {vaccine.id}
                </th>
                <td className="text-center align-middle">{vaccine.name}</td>
                <td className="text-center align-middle">
                  <div className="d-flex justify-content-center align-items-center">
                    <button
                      type="button"
                      className="btn btn-secondary d-flex p-1"
                      aria-label="Vaccine Details"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Vaccine Details"
                      onClick={() =>
                        navigate(`/vaccine/${vaccine.id}`, { replace: true })
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
                      aria-label="Edit Vaccine"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Edit Vaccine"
                      onClick={() =>
                        navigate(`/vaccine/${vaccine.id}/edit`, {
                          replace: true,
                        })
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
                    <Form
                      method="delete"
                      action={`/vaccine/${vaccine.id}/delete`}
                    >
                      <button
                        type="submit"
                        className="btn btn-secondary d-flex p-1"
                        aria-label="Delete Vaccine"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Delete Vaccine"
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

export default VaccinesTable;
