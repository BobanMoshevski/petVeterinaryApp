import { Navigation, useNavigation, useRouteLoaderData } from "react-router";
import LoadingSpinnerLayout from "../../components/loadingSpinnerLayout/LoadingSpinnerLayout";
import { VaccineType } from "../../models/VaccineTypes";
import VaccineDetails from "../../components/vaccineContent/vaccineDetails/VaccineDetails";

const VaccineDetailsPage: React.FC = () => {
  const vaccineData: VaccineType = useRouteLoaderData(
    "vaccineDetails",
  ) as VaccineType;
  const navigation: Navigation = useNavigation();
  const isLoading: boolean = navigation.state === "loading";

  return (
    <>
      <LoadingSpinnerLayout isLoading={isLoading} isSubmitting={false} />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="text-center fs-2 mt-3">Vaccine Details</h2>
            <div className="border border-secondary rounded">
              <div className="container-fluid">
                <VaccineDetails vaccineData={vaccineData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VaccineDetailsPage;
