import { useMutation, useQuery } from "react-query";
import { addClient, getClientById } from "../endpoints";

export const useGetClientById = (id: string) => {
  return useQuery(["client", id], () => getClientById({ id }), {
    enabled: !!id,
    staleTime: 5 * 60 * 1000,
    onError: (error) => {
      console.error("Error fetching client:", error);
    },
  });
};

export const useAddClient = () => {
  return useMutation(addClient, {
    onSuccess: (data) => {
      console.log("Client added successfully:", data);
    },
    onError: (error) => {
      console.error("Error adding client:", error);
    },
  });
};
