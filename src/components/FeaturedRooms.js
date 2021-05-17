import React from "react";
import { useGlobalContext } from "../context";
import Loading from "./Loading";
import Room from "./Room";
import Title from "./Title";
const FeaturedRooms = () => {
  const { featuredRooms: rooms, loading } = useGlobalContext();
  const roomItems = rooms.map((room) => {
    return <Room key={room.id} room={room} />;
  });
  return (
    <section className="featured-rooms">
      <Title title="featured rooms" />
      <div className="featured-rooms-center">
        {loading ? <Loading /> : roomItems}
      </div>
    </section>
  );
};

export default FeaturedRooms;
