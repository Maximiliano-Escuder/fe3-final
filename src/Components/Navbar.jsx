import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";

const Navbar = () => {

  const { state, dispatch } = useContext(ContextGlobal);

  return (
    <header className="sticky-top dark">
      <nav
        className={`navbar navbar-expand-sm navbar-${state.theme === "light" ? "light" : "dark"} bg-${state.theme === "light" ? "light" : "dark"}`}
        aria-label="Third navbar example"
      >
        <div className="container">
          <Link className={`navbar-brand ${styles.navbarBrand}`} to={"/home"}>
            DH Odonto
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample03"
            aria-controls="navbarsExample03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarsExample03"
          >
            <ul className="navbar-nav mb-2 mb-sm-0">
              <li className={`nav-item ${styles.navBarLink}`}>
                <Link className="nav-link" to={"/home"}>
                  Home
                </Link>
              </li>
              <li className={`nav-item ${styles.navBarLink}`}>
                <Link className="nav-link" to={"/contacto"}>
                  Contact
                </Link>
              </li>
              <li className={`nav-item ${styles.navBarLink}`}>
                <Link className="nav-link" to={"/favs"}>
                  Favs
                </Link>
              </li>
              <li className={`nav-item`}>
                <button
                  className={`btn ${styles.btnStyle
                    } ${state.theme === "light" ? "btn-dark dark" : "btn-light light"}`} onClick={() => dispatch(state.theme === "light" ? { type: "light"} : { type: "dark"})}
                >
                  {state.theme === "light" ? "🌙" : "☀"}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
