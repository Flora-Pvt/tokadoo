import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <Link to="/" aria-label="link to home with the new lists">
        <p>Lists</p>
      </Link>
      <Link to="/users" aria-label="link to users page">
        <p>See my friends</p>
      </Link>
    </>
  )
}

export default Navbar