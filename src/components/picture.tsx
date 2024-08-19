import React from "react";

function Picture() {
  return (
    <div>
      {" "}
      <picture>
        <source media="(width < 640px)" srcSet={mobile} />
        <source media="(width < 768px)" srcSet={tablet} />
        <img
          className="card-image rounded-2xl"
          src={desktop}
          alt={`Image ${name}`}
        />
      </picture>
    </div>
  );
}

export default Picture;
