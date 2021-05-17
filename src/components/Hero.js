import React from "react";
import PropTypes from "prop-types";

const Hero = ({ hero, children }) => {
  return <header className={hero}>{children}</header>;
};

Hero.defaultProps = {
  hero: "defaultHero",
};

export default Hero;
