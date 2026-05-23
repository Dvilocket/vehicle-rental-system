import { useEffect, useState }
  from "react";

import { getAllVehicles }
  from "../services/vehicleService";

function useVehicles() {

  const [vehicles, setVehicles] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState(null);

  useEffect(() => {
    loadVehicles();
  }, []);

  const loadVehicles = async () => {

    try {

      setLoading(true);

      const data =
        await getAllVehicles();

      setVehicles(data);

    } catch (err) {

      setError(
        "Error loading vehicles"
      );

      console.error(err);

    } finally {

      setLoading(false);

    }
  };

  return {
    vehicles,
    loading,
    error,
    loadVehicles
  };
}

export default useVehicles;