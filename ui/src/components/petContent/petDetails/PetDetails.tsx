import { PetDetailsType } from "./PetDetailsTypes";

const PetDetails: React.FC<PetDetailsType> = ({
  petData,
  ownerData,
}: PetDetailsType) => {
  return (
    <>
      <div className="row my-2">
        <div className="col-12 col-md-6 col-xxl-3">
          <p className="m-0">
            <span className="fw-bold">Pet Id: </span>
            {petData.id}
          </p>
          <p className="m-0">
            <span className="fw-bold">Pet Name: </span>
            {petData.name}
          </p>
          <p className="m-0">
            <span className="fw-bold">Pet Date Of Birthdary: </span>
            {new Date(petData.dateOfBirth).toLocaleDateString()}
          </p>
        </div>
        <div className="col-12 col-md-6 col-xxl-3">
          <p className="m-0">
            <span className="fw-bold">Pet Age: </span>
            {petData.age}
          </p>
          <p className="m-0">
            <span className="fw-bold">Pet Species: </span>
            {petData.species}
          </p>
          <p className="m-0">
            <span className="fw-bold">Pet Breed: </span>
            {petData.breed}
          </p>
        </div>
        <div className="col-12 col-md-6 col-xxl-3">
          <p className="m-0">
            <span className="fw-bold">Pet Gender: </span>
            {petData.gender}
          </p>
          <p className="m-0">
            <span className="fw-bold">Pet Weight: </span>
            {petData.weight}
          </p>
          <p className="m-0">
            <span className="fw-bold">Pet Create Date: </span>
            {new Date(petData.createdAt).toLocaleDateString()}
          </p>
        </div>
        <div className="col-12 col-md-6 col-xxl-3">
          <p className="m-0">
            <span className="fw-bold">Pet Create Time: </span>
            {new Date(petData.createdAt).toLocaleTimeString()}
          </p>
          <p className="m-0">
            <span className="fw-bold">Pet Update Date: </span>
            {new Date(petData.updatedAt).toLocaleDateString()}
          </p>
          <p className="m-0">
            <span className="fw-bold">Pet Update Time: </span>
            {new Date(petData.updatedAt).toLocaleTimeString()}
          </p>
        </div>
      </div>
      <div className="row my-2 border border-secondary border-end-0 border-bottom-0 border-start-0">
        <div className="col-12 text-center">
          <h5>Owner Details</h5>
        </div>
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
    </>
  );
};

export default PetDetails;
