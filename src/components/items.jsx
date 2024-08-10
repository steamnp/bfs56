import React from "react";

import data from "../data/data.json";

const Items = ({ item }) => {
  const { image, name, category, price } = item;
  const { mobile, tablet, desktop } = image;
  return (
    <picture>
      <source media="(width < 640px)" srcSet={getImageURL(mobile)} />
      <source media="(width < 768px)" srcSet={getImageURL(tablet)} />
      <img
        className="card-image rounded-2xl"
        src={getImageURL(desktop)}
        alt={`Image ${name}`}
      />
    </picture>
  );
};

export default Items;
