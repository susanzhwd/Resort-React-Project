import React from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";

const services = [
  {
    icon: <FaCocktail />,
    title: "Free Cocktails",
    info:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?",
  },
  {
    icon: <FaHiking />,
    title: "Endless Hiking",
    info:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?",
  },
  {
    icon: <FaShuttleVan />,
    title: "Free Shuttle",
    info:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?",
  },
  {
    icon: <FaBeer />,
    title: "Strongest Beer",
    info:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?",
  },
];

const Services = () => {
  const [serviceItems, setServiceItems] = React.useState(services);
  return (
    <section className="services">
      <Title title="services" />
      <div className="services-center">
        {serviceItems.map((item) => {
          const { icon, title, info } = item;
          return (
            <article key={`service-${title}`} className="service">
              <span>{icon}</span>
              <h6>{title}</h6>
              <p>{info}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
