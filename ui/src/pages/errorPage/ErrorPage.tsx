import { Navigation, useNavigation } from "react-router";
import Navbar from "../../components/navbar/Navbar";

const ErrorPage: React.FC = () => {
  const navigation: Navigation = useNavigation();
  const isLoading: boolean = navigation.state === "loading";

  return (
    <>
      <Navbar />
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
          <div className="col-12">
            <div className="d-flex justify-content-center mt-3">
              <h2>Page not found!</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
