import React from "react";
import { useState, useEffect, useContext, useCallback } from "react";
import items from "./data";

const RoomContext = React.createContext();

export const RoomProvider = ({ children }) => {
  const [rooms, setRooms] = useState([]);
  const [featuredRooms, setFeaturedRooms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filteredRooms, setFilteredRooms] = useState([]);
  const [filters, setFilters] = useState({
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
  });

  const formatData = (items) => {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => {
        return image.fields.file.url;
      });
      return { ...item.fields, id, images };
    });
    return tempItems;
  };

  const getData = useCallback(async () => {
    setLoading(true);
    const rooms = formatData(items);
    const featuredRooms = rooms.filter((room) => room.featured === true);
    let maxPrice = Math.max(...rooms.map((room) => room.price));
    let maxSize = Math.max(...rooms.map((room) => room.size));
    setRooms(rooms);
    setFeaturedRooms(featuredRooms);
    setFilters({ ...filters, maxSize, maxPrice, price: maxPrice });
    setFilteredRooms(rooms);

    setLoading(false);
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  const handleChanges = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    console.log(name, value);

    setFilters({
      ...filters,
      [name]: value,
    });
  };

  useEffect(() => {
    filterRooms();
  }, [filters]);

  const filterRooms = () => {
    let { type, capacity, price, minSize, maxSize, breakfast, pets } = filters;

    if (rooms.length > 0) {
      let tempRooms = rooms;
      capacity = parseInt(capacity);
      price = parseInt(price);
      if (type !== "all") {
        tempRooms = tempRooms.filter((room) => room.type === type);
      }
      if (capacity !== 1) {
        tempRooms = tempRooms.filter((room) => room.capacity === capacity);
      }
      tempRooms = tempRooms.filter((room) => room.price <= price);

      tempRooms = tempRooms.filter(
        (room) => room.size >= minSize && room.size <= maxSize
      );

      if (breakfast) {
        tempRooms = tempRooms.filter((room) => room.breakfast === true);
      }

      if (breakfast) {
        tempRooms = tempRooms.filter((room) => room.pets === true);
      }

      setFilteredRooms(tempRooms);
    }
  };

  return rooms.length > 0 ? (
    <RoomContext.Provider
      value={{
        rooms,
        filters,
        featuredRooms,
        loading,
        filteredRooms,
        handleChanges,
      }}
    >
      {children}
    </RoomContext.Provider>
  ) : (
    <div>Loding</div>
  );
};

export const useGlobalContext = () => {
  return useContext(RoomContext);
};
