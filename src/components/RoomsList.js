import React from "react";
import Room from "./Room";
import { useGlobalContext } from "../context";
const RoomsList = () => {
  const { filteredRooms } = useGlobalContext();
  if (filteredRooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>unfortunately no rooms matched your search parameters</h3>
      </div>
    );
  }
  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {filteredRooms.map((item) => {
          return <Room key={item.id} room={item} />;
        })}
      </div>
    </section>
  );
};

export default RoomsList;
