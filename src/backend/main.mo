import Order "mo:core/Order";
import Array "mo:core/Array";
import Text "mo:core/Text";
import Runtime "mo:core/Runtime";
import Map "mo:core/Map";
import Iter "mo:core/Iter";

actor {
  type Reservation = {
    guestName : Text;
    phoneNumber : Text;
    date : Text;
    time : Text;
    partySize : Nat;
    specialRequests : ?Text;
  };

  module Reservation {
    public func compare(res1 : Reservation, res2 : Reservation) : Order.Order {
      switch (Text.compare(res1.date, res2.date)) {
        case (#equal) { Text.compare(res1.time, res2.time) };
        case (order) { order };
      };
    };
  };

  var nextId = 0;
  let reservations = Map.empty<Nat, Reservation>();

  public shared ({ caller }) func createReservation(reservation : Reservation) : async Nat {
    let id = nextId;
    reservations.add(id, reservation);
    nextId += 1;
    id;
  };

  public shared ({ caller }) func deleteReservation(reservationId : Nat) : async () {
    if (reservationId >= nextId) {
      Runtime.trap("Reservation id does not exist");
    };
    reservations.remove(reservationId);
  };

  public query ({ caller }) func getReservation(id : Nat) : async Reservation {
    switch (reservations.get(id)) {
      case (null) { Runtime.trap("Reservation does not exist") };
      case (?reservation) { reservation };
    };
  };

  public query ({ caller }) func getAllReservations() : async [Reservation] {
    reservations.values().toArray().sort();
  };
};
