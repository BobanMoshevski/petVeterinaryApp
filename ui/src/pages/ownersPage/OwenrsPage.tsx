import { useMemo } from "react";
import {
  useLocation,
  Location,
  NavigateFunction,
  Navigation,
  useNavigate,
  useNavigation,
  useRouteLoaderData,
} from "react-router";
import LoadingSpinnerLayout from "../../components/loadingSpinnerLayout/LoadingSpinnerLayout";
import OwnersSearchBar from "../../components/ownersContent/ownersSearchBar/OwnersSearchBar";
import OwnersTable from "../../components/ownersContent/ownersTable/OwnersTable";
import { OwnerType } from "../../models/OwnerTypes";

const OwnersPage: React.FC = () => {
  const ownersData: OwnerType[] = useRouteLoaderData("owners") as OwnerType[];
  const navigate: NavigateFunction = useNavigate();
  const location: Location = useLocation();
  const searchParams: URLSearchParams = useMemo(
    () => new URLSearchParams(location.search),
    [location.search],
  );
  const navigation: Navigation = useNavigation();
  const isLoading: boolean = navigation.state === "loading";
  const isSubmitting: boolean = navigation.state === "submitting";

  return (
    <>
      <LoadingSpinnerLayout isLoading={isLoading} isSubmitting={isSubmitting} />
      <div className="container">
        <div className="row">
          <OwnersSearchBar navigate={navigate} searchParams={searchParams} />
          {ownersData?.length === 0 ? (
            <div style={{ fontSize: "2rem", textAlign: "center" }}>
              Owners not found!
            </div>
          ) : (
            <OwnersTable navigate={navigate} ownersData={ownersData} />
          )}
        </div>
      </div>
    </>
  );
};

export default OwnersPage;
