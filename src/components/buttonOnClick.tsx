import React from "react";
import SubtractIcon from "./subtractIcon";
import AddIcon from "./addIcon";

const ButtonOnClick = () => {
  return (
    <div>
      <button className="card-button-active">
        <SubtractIcon />
        <AddIcon />
      </button>
    </div>
  );
};

export default ButtonOnClick;
