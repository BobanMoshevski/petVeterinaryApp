import { useMemo } from "react";
import {
  useRouteLoaderData,
  useNavigate,
  NavigateFunction,
  useLocation,
  Location,
  Navigation,
  useNavigation,
} from "react-router";
import LoadingSpinnerLayout from "../../components/loadingSpinnerLayout/LoadingSpinnerLayout";
import VaccinesSearchBar from "../../components/vaccinesContent/vaccinesSearchBar/VaccinesSearchBar";
import { VaccineType } from "../../models/VaccineTypes";
import VaccinesTable from "../../components/vaccinesContent/vaccinesTable/VaccinesTable";

const VaccinesPage: React.FC = () => {
  const vaccinesData: VaccineType[] = useRouteLoaderData(
    "vaccines",
  ) as VaccineType[];
  const navigate: NavigateFunction = useNavigate();
  const location: Location = useLocation();
  const searchParams: URLSearchParams = useMemo(
    () => new URLSearchParams(location.search),
    [location.search],
  );
  const navigation: Navigation = useNavigation();
  const isLoading: boolean = navigation.state === "loading";

  return (
    <>
      <LoadingSpinnerLayout isLoading={isLoading} isSubmitting={false} />
      <div className="container">
        <div className="row">
          <VaccinesSearchBar navigate={navigate} searchParams={searchParams} />
          {vaccinesData?.length === 0 ? (
            <div style={{ fontSize: "2rem", textAlign: "center" }}>
              Vaccines not found!
            </div>
          ) : (
            <VaccinesTable navigate={navigate} vaccines={vaccinesData} />
          )}
        </div>
      </div>
    </>
  );
};

export default VaccinesPage;
