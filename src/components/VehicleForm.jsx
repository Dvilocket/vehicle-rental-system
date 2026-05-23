import { useState } from "react";

function VehicleForm({ onSubmit }) {

  const [formData, setFormData] =
    useState({
      brand: "",
      model: "",
      year: "",
      plate: ""
    });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    onSubmit(formData);

    setFormData({
      brand: "",
      model: "",
      year: "",
      plate: ""
    });
  };

  return (

    <form onSubmit={handleSubmit}>

      <div className="mb-3">

        <label className="form-label">
          Brand
        </label>

        <input
          type="text"
          className="form-control"
          name="brand"
          value={formData.brand}
          onChange={handleChange}
          required
        />

      </div>

      <div className="mb-3">

        <label className="form-label">
          Model
        </label>

        <input
          type="text"
          className="form-control"
          name="model"
          value={formData.model}
          onChange={handleChange}
          required
        />

      </div>

      <div className="mb-3">

        <label className="form-label">
          Year
        </label>

        <input
          type="number"
          className="form-control"
          name="year"
          value={formData.year}
          onChange={handleChange}
          min="200"
          required
        />

      </div>

      <div className="mb-3">

        <label className="form-label">
          Plate
        </label>

        <input
          type="text"
          className="form-control"
          name="plate"
          value={formData.plate}
          onChange={handleChange}
          required
        />

      </div>

      <button
        type="submit"
        className="btn btn-primary"
      >
        Create Vehicle
      </button>

    </form>
  );
}

export default VehicleForm;