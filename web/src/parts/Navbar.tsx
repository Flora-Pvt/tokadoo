import { Link } from "react-router-dom";
// import { useLoggedUserQuery } from "../generated/graphql";

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = () => {
  // const [{ data, fetching }] = useLoggedUserQuery();
    // console.log(data?.loggedUser);

  const data = localStorage.getItem("qid");

  return (
    <nav className="navbar">
      <Link to="/" aria-label="link to home">
        <h1 className="navbar__title">TOKADOO</h1>
      </Link>

      <section className="navbar__links">
        {!data ? (
          <>
            {" "}
            <Link to="/signup" aria-label="link to signup">
              <p className="navbar__links__oneLink">S'enregistrer</p>
            </Link>
            <Link to="/login" aria-label="link to login">
              <p className="navbar__links__oneLink">Se connecter</p>
            </Link>
          </>
        ) : (
          <>
            <Link to="/lists" aria-label="link to the new lists">
              <p className="navbar__links__oneLink">Voir mes listes</p>
            </Link>
            <Link
              to={"/profil/" + data}
              aria-label="link to my page"
            >
              <p className="navbar__links__oneLink">Mon profil</p>
            </Link>
          </>
        )}
      </section>
    </nav>
  );
};

export default NavBar;
