import React from "react";
import SubtractIcon from "../components/subtractIcon";
import AddIcon from "../components/addIcon";

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
