import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const pathname = location.pathname;

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
                <Link to="/" className="nav-link" aria-current="page" style={pathname == "/" || pathname == "/artikel" || pathname == "/artikeldetail" || pathname == "/komunitas" ? { color: "black", fontWeight: "500" } : null}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link" style={pathname == "/about" ? { color: "black", fontWeight: "500" } : null}>
                  About
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="donasi.html"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={
                    pathname == "/Donasi" || pathname == "/ListAksi" || pathname == "/aksidetail1" || pathname == "/aksidetail2" || pathname == "/Membership" || pathname == "/Satukali" || pathname == "/MetodePembayaran"
                      ? { color: "black", fontWeight: "500" }
                      : null
                  }
                >
                  Donation
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/ListAksi" className="dropdown-item" style={pathname == "/ListAksi" || pathname == "/aksidetail1" || pathname == "/aksidetail2" ? { color: "black", fontWeight: "500" } : null}>
                      Aksi
                    </Link>
                  </li>
                  <li>
                    <Link to="/Donasi" className="dropdown-item" style={pathname == "/Donasi" || pathname == "/Membership" || pathname == "/Satukali" || pathname == "/MetodePembayaran" ? { color: "black", fontWeight: "500" } : null}>
                      Donation
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/Market" className="nav-link" style={pathname == "/Market" || pathname == "/DetailMarket" ? { color: "black", fontWeight: "500" } : null}>
                  Shop
                </Link>
              </li>
            </ul>

            <div className="search-bar">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input type="search" placeholder="Search" className="input" />
            </div>

            <div className="button">
              <Link to="/signin" className="btn">
                Log In
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
