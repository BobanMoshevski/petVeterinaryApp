import { OwnerDetailsType } from "./OwnerDetailsTypes";

const OwnerDetails: React.FC<OwnerDetailsType> = ({
  ownerData,
}: OwnerDetailsType) => {
  return (
    <div className="row my-2">
      <div className="col-12 col-md-6 col-xxl-3">
        <p className="m-0">
          <span className="fw-bold">Owner Id: </span>
          {ownerData.id}
        </p>
        <p className="m-0">
          <span className="fw-bold">Owner Name: </span>
          {ownerData.name}
        </p>
        <p className="m-0">
          <span className="fw-bold">Owner Surname: </span>
          {ownerData.surname}
        </p>
        <p className="m-0">
          <span className="fw-bold">Owner Date Of Birthdary: </span>
          {new Date(ownerData.dateOfBirth).toLocaleDateString()}
        </p>
      </div>
      <div className="col-12 col-md-6 col-xxl-3">
        <p className="m-0">
          <span className="fw-bold">Owner Age: </span>
          {ownerData.age}
        </p>
        <p className="m-0">
          <span className="fw-bold">Owner Address: </span>
          {ownerData.address}
        </p>
        <p className="m-0">
          <span className="fw-bold">Owner Phone number: </span>
          {ownerData.phoneNumber}
        </p>
        <p className="m-0">
          <span className="fw-bold">Owner Email: </span>
          {ownerData.email}
        </p>
      </div>
      <div className="col-12 col-md-6 col-xxl-3">
        <p className="m-0">
          <span className="fw-bold">Country: </span>
          {ownerData.country}
        </p>
        <p className="m-0">
          <span className="fw-bold">City: </span>
          {ownerData.city}
        </p>
        <p className="m-0">
          <span className="fw-bold">Postal Code: </span>
          {ownerData.postalCode}
        </p>
        <p className="m-0">
          <span className="fw-bold">Owner Create Date: </span>
          {new Date(ownerData.createdAt).toLocaleDateString()}
        </p>
      </div>
      <div className="col-12 col-md-6 col-xxl-3">
        <p className="m-0">
          <span className="fw-bold">Owner Create Time: </span>
          {new Date(ownerData.createdAt).toLocaleTimeString()}
        </p>
        <p className="m-0">
          <span className="fw-bold">Owner Update Date: </span>
          {new Date(ownerData.updatedAt).toLocaleDateString()}
        </p>
        <p className="m-0">
          <span className="fw-bold">Owner Update Time: </span>
          {new Date(ownerData.updatedAt).toLocaleTimeString()}
        </p>
      </div>
    </div>
  );
};

export default OwnerDetails;
