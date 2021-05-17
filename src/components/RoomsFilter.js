import React from "react";
import Title from "./Title";
import { useGlobalContext } from "../context";

const RoomsFilter = () => {
  const { rooms, filters, handleChanges } = useGlobalContext();

  const {
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = filters;

  const getUnique = (items, value) => {
    return [...new Set(items.map((item) => item[value]))];
  };

  let roomTypes = getUnique(rooms, "type");
  roomTypes = ["all", ...roomTypes];
  const types = roomTypes.map((roomType, index) => {
    return (
      <option value={roomType} key={index}>
        {roomType}
      </option>
    );
  });

  const roomCapacity = getUnique(rooms, "capacity");
  const people = roomCapacity.map((capacity, index) => {
    return (
      <option value={capacity} key={index}>
        {capacity}
      </option>
    );
  });

  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            onChange={handleChanges}
            className="form-control"
            value={type}
          >
            {types}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="capacity">Guests</label>
          <select
            name="capacity"
            id="capacity"
            onChange={handleChanges}
            className="form-control"
            value={capacity}
          >
            {people}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="price">room price ${price}</label>
          <input
            type="range"
            name="price"
            id="price"
            min={minPrice}
            max={maxPrice}
            value={price}
            onChange={handleChanges}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="size">room size</label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              value={minSize}
              onChange={handleChanges}
              className="size-input"
            />
            <input
              type="number"
              name="maxSize"
              value={maxSize}
              onChange={handleChanges}
              className="size-input"
            />
          </div>
        </div>

        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handleChanges}
            />
            <label htmlFor="breakfast">breakfast</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              checked={pets}
              onChange={handleChanges}
            />
            <label htmlFor="breakfast">pets</label>
          </div>
        </div>
      </form>
    </section>
  );
};

export default RoomsFilter;
