import {
  NavigateFunction,
  Navigation,
  useNavigate,
  useNavigation,
  useRouteLoaderData,
} from "react-router";
import LoadingSpinnerLayout from "../../components/loadingSpinnerLayout/LoadingSpinnerLayout";
import { PetType } from "../../models/PetTypes";
import PetDetails from "../../components/petContent/petDetails/PetDetails";
import PetDetailsVaccinesTable from "../../components/petContent/petDetailsVaccinesTable/PetDetailsVaccinesTable";

type PetLoaderResult = {
  petData: PetType;
};

const PetDetailsPage: React.FC = () => {
  const petData: PetLoaderResult = useRouteLoaderData(
    "petDetails",
  ) as PetLoaderResult;
  const navigate: NavigateFunction = useNavigate();
  const navigation: Navigation = useNavigation();
  const isLoading: boolean = navigation.state === "loading";
  console.log("petData", petData);

  return (
    <>
      <LoadingSpinnerLayout isLoading={isLoading} isSubmitting={false} />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="text-center fs-2 mt-3">Pet Details</h2>
            <div className="border border-secondary rounded">
              <div className="container-fluid">
                <PetDetails
                  petData={petData.petData}
                  ownerData={petData.petData.owner}
                />
              </div>
              {petData.petData.vaccines.length === 0 ? (
                <div className="border border-secondary border-end-0 border-bottom-0 border-start-0 w-100">
                  <h4 className="fs-4 text-center mb-0 p-2">
                    Pet Doesn&apos;t Have Vaccines
                  </h4>
                </div>
              ) : (
                <div className="border border-secondary border-end-0 border-bottom-0 border-start-0 w-100 p-2">
                  <h4 className="fs-4 text-center">Vaccines</h4>
                  <PetDetailsVaccinesTable
                    navigate={navigate}
                    vaccines={petData.petData.vaccines}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PetDetailsPage;
