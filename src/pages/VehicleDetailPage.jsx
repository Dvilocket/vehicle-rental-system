import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import {
  getVehicleById,
  updateVehicleStatus
} from "../services/vehicleService";

import { createOperation } from "../services/operationService";

import StatusBadge from "../components/StatusBadge";

function VehicleDetailPage() {

  const { id } = useParams();

  const [vehicle, setVehicle] = useState(null);

  const [customerName, setCustomerName] = useState("");

  useEffect(() => {
    loadVehicle();
  }, []);

  const loadVehicle = async () => {

    try {

      const data = await getVehicleById(id);

      setVehicle(data);

    } catch (error) {

      console.error(error);

    }
  };

  const rentVehicle = async () => {

    try {

      await createOperation({
        vehicleId: vehicle.id,
        customerName: customerName
      });

      await updateVehicleStatus(
        vehicle.id,
        "NOT_AVAILABLE"
      );

      alert("Vehicle rented successfully");

      loadVehicle();

      setCustomerName("");

    } catch (error) {

      console.error(error);

      alert("Error renting vehicle");

    }
  };

  if (!vehicle) {
    return <h2 className="m-4">Loading...</h2>;
  }

  return (
    <div className="container mt-4">

      <h1 className="mb-4">
        Vehicle Detail
      </h1>

      <div className="card p-4">

        <h3>
          {vehicle.brand} {vehicle.model}
        </h3>

        <hr />

        <p>
          <strong>ID:</strong> {vehicle.id}
        </p>

        <p>
          <strong>Year:</strong> {vehicle.year}
        </p>

        <p>
          <strong>Plate:</strong> {vehicle.plate}
        </p>

        <p>
          <strong>Status:</strong>{" "}
          <StatusBadge status={vehicle.status} />
        </p>

      </div>

      <div className="card p-4 mt-4">

        <h4 className="mb-3">
          Rent Vehicle
        </h4>

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Customer name"
          value={customerName}
          onChange={(e) =>
            setCustomerName(e.target.value)
          }
        />

        {vehicle.status === "AVAILABLE" ? (

          <button
            className="btn btn-success"
            onClick={rentVehicle}
          >
            Rent Vehicle
          </button>

        ) : (

          <button
            className="btn btn-secondary"
            disabled
          >
            Vehicle Not Available
          </button>

        )}

      </div>

    </div>
  );
}

export default VehicleDetailPage;