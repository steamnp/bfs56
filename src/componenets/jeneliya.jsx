import PropTypes from "prop-types";

function App({ favNumber, age }) {
  return (
    <h1>
      Hi, I am Jeneliya. my age is {age} and my favourite number is {favNumber}
    </h1>
  );
}

App.propTypes = {
  age: PropTypes.number.isRequired,
  favNumber: PropTypes.number.isRequired,
};
export default App;
