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
      <Link to="/profil" aria-label="link to my page">
        <p>Check my profil</p>
      </Link>
    </>
  )
}

export default Navbar