import api from "./axiosInstance";

export const getClientById = async ({ id }: { id: string }) => {
  const response = await api.get(`/clients/${id}`);
  return response.data;
};

export const addClient = async (data: object) => {
  const response = await api.post(`/clients`, data);
  return response.data;
};
