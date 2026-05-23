import api from "../api/axiosConfig";

export const createOperation = async (operationData) => {

  const response = await api.post(
    "/operations",
    operationData
  );

  return response.data;
};

export const getAllOperations = async () => {

  const response = await api.get(
    "/operations"
  );

  return response.data;
};

export const cancelOperation = async (id) => {

  const response = await api.delete(
    `/operations/${id}`
  );

  return response.data;
};