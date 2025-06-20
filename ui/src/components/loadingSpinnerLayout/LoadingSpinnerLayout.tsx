import { LoadingSpinnerLayoutType } from "./LoadingSpinnerLayoutTypes";

const LoadingSpinnerLayout: React.FC<LoadingSpinnerLayoutType> = ({
  isLoading,
  isSubmitting,
}: LoadingSpinnerLayoutType) => {
  return isLoading || isSubmitting ? (
    <>
      <div className="overlay" />
      <div className="spinner-container">
        <div className="spinner-border text-light layout-spinner" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  ) : null;
};

export default LoadingSpinnerLayout;
