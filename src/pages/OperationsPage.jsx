import { useEffect, useState } from "react";

import {
  getAllOperations,
  cancelOperation
} from "../services/operationService";

import { updateVehicleStatus }
  from "../services/vehicleService";

import OperationsTable
  from "../components/OperationsTable";

function OperationsPage() {

  const [operations, setOperations] =
    useState([]);

  useEffect(() => {
    loadOperations();
  }, []);

  const loadOperations = async () => {

    try {

      const data =
        await getAllOperations();

      setOperations(data);

    } catch (error) {

      console.error(error);

    }
  };

  const handleCancel =
    async (operation) => {

      try {

        await cancelOperation(operation.id);

        await updateVehicleStatus(
          operation.vehicleId,
          "AVAILABLE"
        );

        alert("Operation cancelled");

        loadOperations();

      } catch (error) {

        console.error(error);

        alert("Error cancelling operation");

      }
    };

  return (
    <div className="container mt-4">

      <h1 className="mb-4">
        Operations
      </h1>

      <OperationsTable
        operations={operations}
        onCancel={handleCancel}
      />

    </div>
  );
}

export default OperationsPage;