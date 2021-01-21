import { Link } from "react-router-dom";

function Navbar() {
  const currentUserId = 1;

  return (
    <nav className="navbar">

      <h1 className="navbar_title" >TOKADOO</h1>

      <section className="navbar_links" >
        <Link to="/" aria-label="link to home with the new lists">
          <p className="navbar_links_oneLink">Lists</p>
        </Link>
        <Link to="/users" aria-label="link to users page">
          <p className="navbar_links_oneLink">See my friends</p>
        </Link>
        <Link to={"/profil/" + currentUserId} aria-label="link to my page">
          <p className="navbar_links_oneLink">Check my profil</p>
        </Link>
      </section>

    </nav>
  )
}

export default Navbar