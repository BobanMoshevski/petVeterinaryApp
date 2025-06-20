import {
  NavigateFunction,
  Navigation,
  useNavigate,
  useNavigation,
  useRouteLoaderData,
} from "react-router";
import LoadingSpinnerLayout from "../../components/loadingSpinnerLayout/LoadingSpinnerLayout";
import OwnerDetails from "../../components/ownerContent/ownerDetails/OwnerDetails";
import OwnerDetailsPetsTable from "../../components/ownerContent/ownerDetailsPetsTable/OwnerDetailsPetsTable";
import { OwnerType } from "../../models/OwnerTypes";

const OwnerDetailsPage: React.FC = () => {
  const ownerData: OwnerType = useRouteLoaderData("ownerDetails") as OwnerType;
  const navigate: NavigateFunction = useNavigate();
  const navigation: Navigation = useNavigation();
  const isLoading: boolean = navigation.state === "loading";

  return (
    <>
      <LoadingSpinnerLayout isLoading={isLoading} isSubmitting={false} />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="text-center fs-2 mt-3">Owner Details</h2>
            <div className="border border-secondary rounded">
              <div className="container-fluid">
                <OwnerDetails ownerData={ownerData} />
              </div>
              {ownerData.pets.length === 0 ? (
                <div className="border border-secondary border-end-0 border-bottom-0 border-start-0 w-100">
                  <h4 className="fs-4 text-center mb-0 p-2">
                    Owner doesn&apos;t have pets
                  </h4>
                </div>
              ) : (
                <div className="border border-secondary border-end-0 border-bottom-0 border-start-0 w-100 p-2">
                  <h4 className="fs-4 text-center">Pets</h4>
                  <OwnerDetailsPetsTable
                    navigate={navigate}
                    pets={ownerData.pets}
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

export default OwnerDetailsPage;
