//DRY -> Don't Repeat Yourself
//SOC -> Separation of Concerns
import PropTypes from "prop-types";
function Sandeeb({ age, favNumber }) {
  return (
    <h1>
      {/* Hi, I am Sandeeb. My age is {props.age} and my favourite number is {props.favNumber}. */}
      Hi, I am Sandeeb. My age is {age} and my favourite number is {favNumber}.
    </h1>
  );
}

Sandeeb.prototype = {
  age: PropTypes.number,
  favNumber: PropTypes.number,
};
export default Sandeeb;
