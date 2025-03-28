import { Navigation, useNavigation, useRouteLoaderData } from "react-router";
import { OwnerType } from "../../models/OwnerTypes";
import OwnersSearchBar from "../../components/ownersSearchBar/OwnersSearchBar";
import OwnersTable from "../../components/ownersTable/OwnersTable";

const OwnersPage: React.FC = () => {
  const navigation: Navigation = useNavigation();
  const isLoading: boolean = navigation.state === "loading";
  const ownersData: OwnerType[] | undefined = useRouteLoaderData("owners");

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
          <OwnersSearchBar />
          {ownersData?.length === 0 ? (
            <div style={{ fontSize: "2rem", textAlign: "center" }}>
              Owner not found!
            </div>
          ) : (
            <OwnersTable ownersData={ownersData || []} />
          )}
        </div>
      </div>
    </>
  );
};

export default OwnersPage;
