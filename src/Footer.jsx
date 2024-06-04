import { Link } from "react-router-dom";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
function Footer() {
  return (
    <section id="footer">
      <div className="container">
        <div className="footer">
          <div className="row">
            <div className="footer-col">
              <img src="logo.png" className="footer" />
              <div className="social-links">
                <Link to="#">
                  <i className="fa-brands fa-facebook"></i>
                </Link>
                <Link to="#">
                  <i className="fa-brands fa-instagram"></i>
                </Link>
                <Link to="#">
                  <i className="fa-brands fa-youtube"></i>
                </Link>
              </div>
            </div>
            <div className="footer-col">
              <div className="social-links">
                <li>
                  <Link to="/">HOME</Link>
                </li>
                <li>
                  <Link to="/about">ABOUT</Link>
                </li>
                <li>
                  <Link to="/artikel">ARTICLE</Link>
                </li>
                <li>
                  <Link to="/donasi">DONATION</Link>
                </li>
                <li>
                  <Link to="/market">MARKETPLACE</Link>
                </li>
              </div>
            </div>
            <div className="footer-col">
              <div className="social-links">
                <li>
                  <Link to="#">CONTACT US</Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fa-brands fa-whatsapp"></i>
                  </Link>
                  <span>08123456789</span>
                </li>
                <li>
                  <Link to="#">
                    <i className="fa-regular fa-envelope"></i>
                  </Link>
                  <span>greenguardians@gmail.com</span>
                </li>
              </div>
            </div>
          </div>
          <hr />
          <p className="copyright">Copyright 2024 Environtment Safeguard. All Rights Reserved.</p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
