import { VaccineDetailsType } from "./VaccineDetailsTypes";

const VaccineDetails: React.FC<VaccineDetailsType> = ({
  vaccineData,
}: VaccineDetailsType) => {
  return (
    <div className="row my-2">
      <div className="col-12 col-md-6">
        <p className="m-0">
          <span className="fw-bold">Vaccine Id: </span>
          {vaccineData.id}
        </p>
        <p className="m-0">
          <span className="fw-bold">Vaccine Name: </span>
          {vaccineData.name}
        </p>
        <p className="m-0">
          <span className="fw-bold">Vaccine Manufacturer: </span>
          {vaccineData.manufacturer}
        </p>
        <p className="m-0">
          <span className="fw-bold">Vaccine Batch Number: </span>
          {vaccineData.batchNumber}
        </p>
        <p className="m-0">
          <span className="fw-bold">Vaccine Description: </span>
          {vaccineData.description}
        </p>
      </div>
      <div className="col-12 col-md-6">
        <p className="m-0">
          <span className="fw-bold">Vaccine Expiration Date: </span>
          {new Date(vaccineData.expirationDate).toLocaleDateString()}
        </p>
        <p className="m-0">
          <span className="fw-bold">Vaccine Created At: </span>
          {new Date(vaccineData.createdAt).toLocaleDateString()}
        </p>
        <p className="m-0">
          <span className="fw-bold">Vaccine Create Time: </span>
          {new Date(vaccineData.createdAt).toLocaleTimeString()}
        </p>
        <p className="m-0">
          <span className="fw-bold">Vaccine Updated At: </span>
          {new Date(vaccineData.updatedAt).toLocaleDateString()}
        </p>
        <p className="m-0">
          <span className="fw-bold">Vaccine Update Time: </span>
          {new Date(vaccineData.updatedAt).toLocaleTimeString()}
        </p>
      </div>
    </div>
  );
};

export default VaccineDetails;
