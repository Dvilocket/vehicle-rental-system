import { Link } from "react-router-dom";

import StatusBadge
  from "./StatusBadge";

function VehicleTable({
  vehicles,
  onDelete,
  onStatusChange,
  onEdit
}) {

  return (

    <table className="table table-striped mt-4">

      <thead>

        <tr>
          <th>ID</th>
          <th>Brand</th>
          <th>Model</th>
          <th>Year</th>
          <th>Plate</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>

      </thead>

      <tbody>

        {vehicles.map((vehicle) => (

          <tr key={vehicle.id}>

            <td>{vehicle.id}</td>

            <td>{vehicle.brand}</td>

            <td>{vehicle.model}</td>

            <td>{vehicle.year}</td>

            <td>{vehicle.plate}</td>

            <td>
              <StatusBadge
                status={vehicle.status}
              />
            </td>

            <td>

              <Link
                to={`/vehicles/${vehicle.id}`}
                className="btn btn-primary btn-sm"
              >
                View Detail
              </Link>

              <button
                className="btn btn-success btn-sm ms-2"
                onClick={() =>
                  onEdit(vehicle)
                }
              >
                Edit
              </button>

              <button
                className="btn btn-danger btn-sm ms-2"
                onClick={() =>
                  onDelete(vehicle.id)
                }
              >
                Delete
              </button>

              <button
                className="btn btn-warning btn-sm ms-2"
                onClick={() =>
                  onStatusChange(vehicle)
                }
              >
                Change Status
              </button>

            </td>

          </tr>

        ))}

      </tbody>

    </table>
  );
}

export default VehicleTable;