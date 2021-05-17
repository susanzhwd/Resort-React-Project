import React from "react";
import { useGlobalContext } from "../context";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
import Loading from "./Loading";

const RoomsContainer = () => {
  const { loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <RoomsFilter />
      <RoomsList />
    </>
  );
};

export default RoomsContainer;
