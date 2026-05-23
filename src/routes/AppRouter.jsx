import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import MainLayout
  from "../layouts/MainLayout";

import HomePage
  from "../pages/HomePage";

import VehiclesPage
  from "../pages/VehiclesPage";

import VehicleDetailPage
  from "../pages/VehicleDetailPage";

import OperationsPage
  from "../pages/OperationsPage";

import AdminPage
  from "../pages/AdminPage";

function AppRouter() {

  return (

    <BrowserRouter>

      <MainLayout>

        <Routes>

          <Route
            path="/"
            element={<HomePage />}
          />

          <Route
            path="/vehicles"
            element={<VehiclesPage />}
          />

          <Route
            path="/vehicles/:id"
            element={<VehicleDetailPage />}
          />

          <Route
            path="/operations"
            element={<OperationsPage />}
          />

          <Route
            path="/admin"
            element={<AdminPage />}
          />

        </Routes>

      </MainLayout>

    </BrowserRouter>
  );
}

export default AppRouter;