import { FeaturedCard, Carousel, Banner } from "../../components";
import haruki from "../../assets/images/haruki.jpeg";
import fiveac from "../../assets/images/fiveac.jpeg";
import "./homepage.css";
import { useEffect } from "react";

const featuredList = [
  {
    id: 1,
    title: "The Classics from Haruki Murakami",
    description:
      "Explore the all time favorites from the Japanese author Haruki Murakami. Kafka on the shore, Norwegian wood and The birthday girl on flat 30% off.",
    image: haruki,
  },
  {
    id: 2,
    title: "Monday Motivation",
    description:
      "Checkout the lastest releases in self-help motivation books from top authors like Robin Sharma and Jordan Peterson.",
    image: fiveac,
  },
];

export const Homepage = () => {
  
  useEffect(() => {
    document.title = "BookStock";
  });

  return (
    <div className="grid-wrapper">
      <Carousel className="carousel" />
      <Banner className="banner" />
      <div className="featured">
        {featuredList.map(({ title, description, image, id }) => (
          <FeaturedCard
            title={title}
            description={description}
            image={image}
            key={id}
          />
        ))}
      </div>
    </div>
  );
};
