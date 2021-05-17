import React from "react";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";
const Home = () => {
  return (
    <>
      <Hero>
        <Banner title="luxuriou rooms" subtitle="deluxe rooms starting at $299">
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  );
};

export default Home;
