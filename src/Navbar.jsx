import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" to="/">
              <img src="/logo.png" alt="EnvironmentSafeguard" width="135" height="auto" className="d-inline-block align-top" />
            </a>
          </div>
          <div className="collapse navbar-collapse" id="navbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="donasi.html" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Donation
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/ListAksi" className="dropdown-item">
                      Aksi
                    </Link>
                  </li>
                  <li>
                    <Link to="/Donasi" className="dropdown-item">
                      Donation
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/Market" className="nav-link">
                  Shop
                </Link>
              </li>
            </ul>

            <div className="search-bar">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input type="search" placeholder="Search" className="input" />
            </div>

            <div className="button">
              <a href="signin.html" className="btn">
                Log In
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
