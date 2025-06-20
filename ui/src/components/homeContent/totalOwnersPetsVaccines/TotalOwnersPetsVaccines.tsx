import { TotalOwnersPetsVaccinesPropsType } from "./TotalOwnersPetsVaccinesTypes";
import "./TotalOwnersPetsVaccinesStyle.css";

const TotalOwnersPetsVaccines: React.FC<TotalOwnersPetsVaccinesPropsType> = ({
  totalOwnersPetsVaccines,
}: TotalOwnersPetsVaccinesPropsType) => {
  return (
    <div className="row">
      <div className="bg-secondary col-12 px-0">
        <div className="d-flex justify-content-around py-3">
          <div className="text-center text-light">
            <p className="total-text-number m-0">Total Owners</p>
            <p className="total-text-number m-0">
              {totalOwnersPetsVaccines.totalOwners}
            </p>
          </div>
          <div className="text-center text-light px-2">
            <p className="total-text-number m-0">Total Pets</p>
            <p className="total-text-number m-0">
              {totalOwnersPetsVaccines.totalPets}
            </p>
          </div>
          <div className="text-center text-light">
            <p className="total-text-number m-0">Total Vaccines</p>
            <p className="total-text-number m-0">
              {totalOwnersPetsVaccines.totalVaccines}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalOwnersPetsVaccines;
