import PropTypes from "prop-types";

function Manish({ age, favColor, favNum }) {
  return (
    <div>
      <h1>Hi I am Manish.</h1>
      <h2>
        {age}
        <br />
        {favColor}
        <br />

        {favNum}
      </h2>
    </div>
  );
}

Manish.prototype = {
  age: PropTypes.number.isRequired,
  favColor: PropTypes.string,
  favNum: PropTypes.number.isRequired,
};

export default Manish;
