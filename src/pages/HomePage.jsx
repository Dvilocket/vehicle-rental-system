import { Link } from "react-router-dom";

function HomePage() {

  return (

    <div className="container mt-5">

      <div className="card p-5 text-center">

        <h1 className="display-3 mb-4">

          Vehicle Rental System

        </h1>

        <p className="lead mb-5">

          Front-End desarrollado con
          React consumiendo
          microservicios Spring Boot.

        </p>

        <div className="d-flex justify-content-center gap-3">

          <Link
            to="/vehicles"
            className="btn btn-primary btn-lg"
          >
            View Vehicles
          </Link>

          <Link
            to="/operations"
            className="btn btn-dark btn-lg"
          >
            View Operations
          </Link>

        </div>

      </div>

      <div className="row mt-5">

        <div className="col-md-4">

          <div className="card p-4 text-center h-100">

            <h3>
              Vehicle Management
            </h3>

            <p className="mt-3">

              Create, update and delete
              vehicles dynamically.

            </p>

          </div>

        </div>

        <div className="col-md-4">

          <div className="card p-4 text-center h-100">

            <h3>
              Rental Operations
            </h3>

            <p className="mt-3">

              Register and cancel
              rental operations.

            </p>

          </div>

        </div>

        <div className="col-md-4">

          <div className="card p-4 text-center h-100">

            <h3>
              Microservices
            </h3>

            <p className="mt-3">

              Connected to Spring Boot
              microservices using Axios.

            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default HomePage;