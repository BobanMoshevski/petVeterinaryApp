import { Form } from "react-router";
import "./AppointmentFormStyle.css";

const AppointmentForm: React.FC = () => {
  return (
    <Form className="d-flex flex-column border border-secondary rounded p-2">
      <h6 className="text-center form-heading">Make An Appointment</h6>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-sm-6 mb-0 mb-sm-2">
            <input
              className="form-control input-focus-shadow border border-secondary rounded"
              type="text"
              placeholder="Enter Name"
            />
          </div>
          <div className="col-12 col-sm-6 mt-2 mt-sm-0 mb-2">
            <input
              className="form-control input-focus-shadow border border-secondary rounded"
              type="email"
              placeholder="Enter Email"
            />
          </div>
          <div className="col-12 col-sm-6 mb-0 mb-sm-2">
            <input
              className="form-control input-focus-shadow border border-secondary rounded"
              type="text"
              placeholder="Enter Phone"
            />
          </div>
          <div className="col-12 col-sm-6 mt-2 mt-sm-0 mb-2">
            <input
              className="form-control input-focus-shadow border border-secondary rounded"
              type="text"
              placeholder="Enter Pet Name"
            />
          </div>
          <div className="col-12 col-sm-6 mb-2 mb-sm-0">
            <input
              className="form-control input-focus-shadow border border-secondary rounded"
              type="text"
              placeholder="Enter Pet Specie"
            />
          </div>
          <div className="col-12 col-sm-6">
            <input
              className="form-control input-focus-shadow border border-secondary rounded"
              type="text"
              placeholder="Enter Pet Breed"
            />
          </div>
          <div className="col-12 my-2">
            <textarea
              placeholder="Description"
              className="form-control input-focus-shadow border border-secondary rounded"
            />
          </div>
          <div className="col-12">
            <button className="btn btn-secondary" type="button">
              Submit
            </button>
          </div>
        </div>
      </div>
    </Form>
  );
};

export default AppointmentForm;
