import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Reservation {
    date: string;
    specialRequests?: string;
    time: string;
    guestName: string;
    partySize: bigint;
    phoneNumber: string;
}
export interface backendInterface {
    createReservation(reservation: Reservation): Promise<bigint>;
    deleteReservation(reservationId: bigint): Promise<void>;
    getAllReservations(): Promise<Array<Reservation>>;
    getReservation(id: bigint): Promise<Reservation>;
}
