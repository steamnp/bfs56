// Sandeep is a component in React
import PropTypes from 'prop-types'

// {
//   age: 30,
//   favNumber: 7
// }

// value which is javascript -> expression

// DRY -> Do not Repeat Yourself
// SOC -> Separation of Concern

function Sandeeb({ favNumber, age }) {
  return (
    <h1>
      Hi, I am Sandeeb. My age is {age} and my favourite number is {favNumber}
    </h1>
  )
}

Sandeeb.propTypes = {
  age: PropTypes.number.isRequired,
  favNumber: PropTypes.number.isRequired,
  test: PropTypes.string,
}

export default Sandeeb
