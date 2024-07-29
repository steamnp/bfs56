import PropTypes from "prop-types";

function Ronisha({ age, favNumber }) {
  console.log("hello");
  console.log(age);
  console.log(favNumber);
  return (
    <h1>
      Hi, I'm Ronisha. My age is {age} and my favorite number is {favNumber}.
    </h1>
  );
}

Ronisha.propTypes = {
  age: PropTypes.number.isRequired,
  favNumber: PropTypes.number.isRequired,
};

export default Ronisha;
