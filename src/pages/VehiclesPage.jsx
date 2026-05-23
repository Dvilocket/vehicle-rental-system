import Swal from "sweetalert2";

import VehicleTable
  from "../components/VehicleTable";

import Loader
  from "../components/Loader";

import EmptyState
  from "../components/EmptyState";

import useVehicles
  from "../hooks/useVehicles";

import {
  deleteVehicle,
  updateVehicleStatus,
  updateVehicle
} from "../services/vehicleService";

function VehiclesPage() {

  const {
    vehicles,
    loading,
    error,
    loadVehicles
  } = useVehicles();

 
  const handleDelete =
  async (id) => {

    const result =
      await Swal.fire({

        title: "Are you sure?",

        text:
          "This vehicle will be deleted",

        icon: "warning",

        showCancelButton: true,

        confirmButtonColor: "#d33",

        cancelButtonColor: "#6c757d",

        confirmButtonText: "Yes, delete it"

      });

    if (!result.isConfirmed) {
      return;
    }

    try {

      await deleteVehicle(id);

      Swal.fire({
        icon: "success",
        title: "Deleted",
        text: "Vehicle deleted successfully"
      });

      loadVehicles();

    } catch (error) {

      console.error(error);

      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Error deleting vehicle"
      });

    }
  };

  const handleStatusChange =
    async (vehicle) => {

      try {

        const newStatus =
          vehicle.status === "AVAILABLE"
            ? "NOT_AVAILABLE"
            : "AVAILABLE";

        await updateVehicleStatus(
          vehicle.id,
          newStatus
        );

        Swal.fire({
          icon: "success",
          title: "Updated",
          text: "Vehicle status updated"
        });

        loadVehicles();

      } catch (error) {

        console.error(error);

        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Error updating status"
        });

      }
    };

  const handleEdit =
    async (vehicle) => {

      const result = await Swal.fire({

        title: "Edit Vehicle",

        html: `
          <input
            id="brand"
            class="swal2-input"
            placeholder="Brand"
            value="${vehicle.brand}"
          />

          <input
            id="model"
            class="swal2-input"
            placeholder="Model"
            value="${vehicle.model}"
          />

          <input
            id="year"
            class="swal2-input"
            placeholder="Year"
            value="${vehicle.year}"
          />

          <input
            id="plate"
            class="swal2-input"
            placeholder="Plate"
            value="${vehicle.plate}"
          />
        `,

        confirmButtonText: "Update",

        focusConfirm: false,

        preConfirm: () => {

          return {

            brand:
              document.getElementById("brand")
                .value,

            model:
              document.getElementById("model")
                .value,

            year:
              parseInt(
                document.getElementById("year")
                  .value
              ),

            plate:
              document.getElementById("plate")
                .value
          };
        }
      });

      if (result.isConfirmed) {

        try {

          await updateVehicle(
            vehicle.id,
            result.value
          );

          Swal.fire({
            icon: "success",
            title: "Updated",
            text: "Vehicle updated successfully"
          });

          loadVehicles();

        } catch (error) {

          console.error(error);

          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Error updating vehicle"
          });

        }
      }
    };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <EmptyState message={error} />
    );
  }

  return (
    <div className="container mt-4">

      <h1 className="mb-4">
        Vehicles
      </h1>

      {vehicles.length === 0 ? (

        <EmptyState
          message="No vehicles found"
        />

      ) : (

        <VehicleTable
          vehicles={vehicles}
          onDelete={handleDelete}
          onStatusChange={
            handleStatusChange
          }
          onEdit={handleEdit}
        />

      )}

    </div>
  );
}

export default VehiclesPage;