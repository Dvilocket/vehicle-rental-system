import { Link } from "react-router-dom";

function Navbar() {

  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

      <div className="container">

        <Link
          className="navbar-brand"
          to="/"
        >
          Vehicle Rental
        </Link>

        <div className="navbar-nav">

          <Link
            className="nav-link"
            to="/"
          >
            Home
          </Link>

          <Link
            className="nav-link"
            to="/vehicles"
          >
            Vehicles
          </Link>

          <Link
            className="nav-link"
            to="/operations"
          >
            Operations
          </Link>

          <Link
            className="nav-link"
            to="/admin"
            >
            Admin
            </Link>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;