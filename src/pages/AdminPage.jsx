import { createVehicle }
  from "../services/vehicleService";

import VehicleForm
  from "../components/VehicleForm";

function AdminPage() {

  const handleCreateVehicle =
    async (vehicleData) => {

      try {

        await createVehicle({
          ...vehicleData,
          status: "AVAILABLE"
        });

        alert(
          "Vehicle created successfully"
        );

      } catch (error) {

        console.error(error);

        alert(
          "Error creating vehicle"
        );

      }
    };

  return (

    <div className="container mt-4">

      <h1 className="mb-4">
        Admin Panel
      </h1>

      <div className="card p-4">

        <h4 className="mb-4">
          Create Vehicle
        </h4>

        <VehicleForm
          onSubmit={handleCreateVehicle}
        />

      </div>

    </div>
  );
}

export default AdminPage;