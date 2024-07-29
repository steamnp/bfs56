import PropTypes from 'prop-types'

function Gorakh({ age }) {
  return <h1>Hi! I am Gorakh. {age}</h1>
}

Gorakh.propTypes = {
  age: PropTypes.number,
}

export default Gorakh
