import { Link } from "react-router-dom";

function Navbar() {
  const currentUserId = 1;

  return (
    <nav className="navbar">

      <Link to="/" aria-label="link to home">
        <h1 className="navbar__title" >TOKADOO</h1>
      </Link>

      <section className="navbar__links" >
        <Link to="/lists" aria-label="link to the new lists">
          <p className="navbar__links__oneLink">Voir ma liste</p>
        </Link>
        <Link to={"/profil/" + currentUserId} aria-label="link to my page">
          <p className="navbar__links__oneLink">Mon profil</p>
        </Link>
      </section>

    </nav>
  )
}

export default Navbar