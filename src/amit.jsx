// this is app.jsx named as amit.jsx

import PropTypes from "prop-types";

//DRY -> Don't Repeat Yourself
//SOC -> Separation of Concerns

function Amit({ age, favNumber }) {
  console.log("test");
  return (
    <h1>
      Hi! This is made using React Component. My age is {age} and my favourite
      number is {favNumber}
    </h1>
  );
}

Amit.propTypes = {
  age: PropTypes.number.isRequired,
  favNumber: PropTypes.number.isRequired,
};

export default Amit;
