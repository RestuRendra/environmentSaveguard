import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@fortawesome/fontawesome-free/attribution.js";
function Footer() {
  return (
    <section id="footer">
      <div class="container">
        <div class="footer">
          <div class="row">
            <div class="footer-col">
              <img src="logo.png" class="footer" />
              <div class="social-links">
                <a href="#">
                  <i class="fa-brands fa-facebook"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-youtube"></i>
                </a>
              </div>
            </div>
            <div class="footer-col">
              <div class="social-links">
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
            <div class="footer-col">
              <div class="social-links">
                <li>
                  <a href="#">CONTACT US</a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa-brands fa-whatsapp"></i>
                  </a>
                  <span>08123456789</span>
                </li>
                <li>
                  <a href="#">
                    <i class="fa-regular fa-envelope"></i>
                  </a>
                  <span>greenguardians@gmail.com</span>
                </li>
              </div>
            </div>
          </div>
          <hr />
          <p class="copyright">Copyright 2024 Environtment Safeguard. All Rights Reserved.</p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
