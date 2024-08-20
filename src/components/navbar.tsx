import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className="bg-blue-300 p-4 flex justify-center gap-4">
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/service">Service</Link>
    </div>
  )
}

export default NavBar
