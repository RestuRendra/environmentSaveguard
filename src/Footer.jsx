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
                <a href="#">
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </div>
            </div>
            <div className="footer-col">
              <div className="social-links">
                <li>
                  <a href="home.html">HOME</a>
                </li>
                <li>
                  <a href="about.html">ABOUT</a>
                </li>
                <li>
                  <a href="artikel.html">ARTICLE</a>
                </li>
                <li>
                  <a href="donasi.html">DONATION</a>
                </li>
                <li>
                  <a href="market.html">MARKETPLACE</a>
                </li>
              </div>
            </div>
            <div className="footer-col">
              <div className="social-links">
                <li>
                  <a href="#">CONTACT US</a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-whatsapp"></i>
                  </a>
                  <span>08123456789</span>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-regular fa-envelope"></i>
                  </a>
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
