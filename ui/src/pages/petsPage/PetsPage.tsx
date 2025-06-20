import { useMemo } from "react";
import {
  Location,
  NavigateFunction,
  Navigation,
  useNavigate,
  useNavigation,
  useRouteLoaderData,
  useLocation,
} from "react-router";
import LoadingSpinnerLayout from "../../components/loadingSpinnerLayout/LoadingSpinnerLayout";
import PetsSearchBar from "../../components/petsContent/petsSearchBar/PetsSearchBar";
import PetsTable from "../../components/petsContent/petsTable/PetsTable";
import { PetType } from "../../models/PetTypes";

const PetsPage: React.FC = () => {
  const petsData: PetType[] = useRouteLoaderData("pets") || [];
  const navigate: NavigateFunction = useNavigate();
  const navigation: Navigation = useNavigation();
  const location: Location = useLocation();
  const searchParams: URLSearchParams = useMemo(
    () => new URLSearchParams(location.search),
    [location.search],
  );
  const isLoading: boolean = navigation.state === "loading";

  return (
    <>
      <LoadingSpinnerLayout isLoading={isLoading} isSubmitting={false} />
      <div className="container">
        <div className="row">
          <PetsSearchBar navigate={navigate} searchParams={searchParams} />
          {petsData?.length === 0 ? (
            <div style={{ fontSize: "2rem", textAlign: "center" }}>
              Pets not found!
            </div>
          ) : (
            <PetsTable petsData={petsData} />
          )}
        </div>
      </div>
    </>
  );
};

export default PetsPage;
