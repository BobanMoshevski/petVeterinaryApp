import "./WorkingHoursStyle.css";

const WorkingHours: React.FC = () => {
  return (
    <div className="text-center">
      <h6 className="working-hours-heading">Working Hours</h6>
      <p className="working-hours m-0">
        <span className="fw-bold">Monday:</span> 08:00AM-04:00PM
      </p>
      <p className="working-hours m-0">
        <span className="fw-bold">Tuesday:</span> 08:00AM-04:00PM
      </p>
      <p className="working-hours m-0">
        <span className="fw-bold">Wednesday:</span> 08:00AM-04:00PM
      </p>
      <p className="working-hours m-0">
        <span className="fw-bold">Thursday:</span> 08:00AM-04:00PM
      </p>
      <p className="working-hours m-0">
        <span className="fw-bold">Friday:</span> 08:00AM-04:00PM
      </p>
      <p className="working-hours m-0">
        <span className="fw-bold">Saturday:</span> 08:00AM-02:00PM
      </p>
    </div>
  );
};

export default WorkingHours;
