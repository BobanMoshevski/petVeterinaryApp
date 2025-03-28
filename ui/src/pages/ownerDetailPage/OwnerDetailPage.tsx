import { Navigation, useNavigation, useRouteLoaderData } from "react-router";
import { OwnerType } from "../../models/OwnerTypes";
import { PetType } from "../../models/PetTypes";
import { VaccineType } from "../../models/VaccineTypes";

const OwnerDetailPage: React.FC = () => {
  const navigation: Navigation = useNavigation();
  const isLoading: boolean = navigation.state === "loading";
  const ownerLoaderData: OwnerType = useRouteLoaderData(
    "ownerDetail",
  ) as OwnerType;
  return (
    <>
      {isLoading && (
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
      )}
      <div className="container">
        <div className="row">
          <div className="col-12 col-xxl-10 offset-xxl-1">
            <h2 className="text-center fs-2 mt-3">Owner Details</h2>
            <div className="border border-secondary rounded d-flex align-items-center flex-column">
              <p className="fs-6 mt-3 mb-1">
                Owner Full Name: {ownerLoaderData.fullName}
              </p>
              <p className="fs-6 mb-1">Owner Age: {ownerLoaderData.age}</p>
              <p className="fs-6 mb-1">Owner Id: {ownerLoaderData.id}</p>
              {ownerLoaderData.pets.length === 0 ? (
                <h4 className="fs-4">Owner doesn&apos;t have pets</h4>
              ) : (
                <div
                  style={{ width: "100%" }}
                  className="border border-secondary border-end-0 border-bottom-0 border-start-0"
                >
                  <h4 className="text-center fs-4 my-2">Owner pets</h4>
                  {ownerLoaderData.pets.map((pet: PetType) => (
                    <div
                      style={{ width: "50%" }}
                      key={`pet${pet.id}`}
                      className="border border-secondary rounded d-flex align-items-center flex-column my-2 mx-auto"
                    >
                      <p className="fs-6 mt-2 mb-1">Pet name: {pet.name}</p>
                      <p className="fs-6 mb-1">Pet age: {pet.age}</p>
                      <p className="fs-6 mb-1">Pet id: {pet.id}</p>
                      {pet.vaccines.length === 0 ? (
                        <h5 className="fs-4">Pet doesn&apos;t have vaccines</h5>
                      ) : (
                        <div
                          style={{ width: "100%" }}
                          className="border border-secondary border-end-0 border-bottom-0 border-start-0"
                        >
                          <h5 className="text-center fs-4 mt-2">
                            Pet vaccines
                          </h5>
                          {pet.vaccines.map((vaccine: VaccineType) => (
                            <div
                              key={`vaccine${vaccine.id}`}
                              className="border border-secondary border-end-0 border-bottom-0 border-start-0 d-flex align-items-center flex-column"
                            >
                              <p className="fs-6 mb-1">
                                Vaccine id: {vaccine.id}
                              </p>
                              <p className="fs-6 mb-1">
                                Vaccine name: {vaccine.name}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OwnerDetailPage;
