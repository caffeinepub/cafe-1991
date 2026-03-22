import { useMutation } from "@tanstack/react-query";
import type { Reservation } from "../backend.d";
import { useActor } from "./useActor";

export function useCreateReservation() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (reservation: Reservation) => {
      if (!actor) throw new Error("Not connected");
      return actor.createReservation(reservation);
    },
  });
}
