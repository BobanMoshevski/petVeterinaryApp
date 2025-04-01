import { Navigation, useNavigation, useRouteLoaderData } from "react-router";
import PetsSearchBar from "../../components/petsSearchBar/PetsSearchBar";
import PetsTable from "../../components/petsTable/PetsTable";
import { PetType } from "../../models/PetTypes";

const PetsPage: React.FC = () => {
  const navigation: Navigation = useNavigation();
  const isLoading: boolean = navigation.state === "loading";
  const petsData: PetType[] | undefined = useRouteLoaderData("petsPage");

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
          <PetsSearchBar />
          {petsData?.length === 0 ? (
            <div style={{ fontSize: "2rem", textAlign: "center" }}>
              Owner not found!
            </div>
          ) : (
            <PetsTable petsData={petsData || []} />
          )}
        </div>
      </div>
    </>
  );
};

export default PetsPage;
