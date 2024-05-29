import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Navbar from "../Navbar.jsx";
import "./index.css";
import aboutVisi1 from "./assets/aboutVisi1.png";
import aboutVisi2 from "./assets/aboutVisi2.png";
import aboutVisi3 from "./assets/aboutVisi3.png";

function About() {
  return (
    <>
      <Navbar />
      <section id="about-hero">
        <div class="about">
          <div class="content">
            <h1>About Us</h1>
            <h5>
              Thank you for your concern and support for our mission to protect and preserve the environment. With your donation, you have become part of a global movement to safeguard biodiversity and pass on a greener planet to future
              generations.
            </h5>
            <a href="" class="teksbtn">
              More Information
            </a>
          </div>
        </div>
      </section>

      <section id="about-visi-misi">
        <div className="container">
          <div className="visi">
            <div className="visi-content">
              <h3>Our Vission</h3>
              <p>
                Our vision is to protect and preserve our planet for future generations. We believe in a sustainable future where people live in harmony with nature, and we are committed to promoting environmental awareness, conservation
                efforts, and sustainable practices.
              </p>
            </div>
            <div className="visi-image">
              <tr className="visi-image1">
                <td>
                  <img src={aboutVisi1} alt="" />
                </td>
                <td>
                  <img src={aboutVisi2} alt="" />
                </td>
              </tr>
              <tr>
                <td className="" colSpan={2}>
                  <img src={aboutVisi3} alt="" />
                </td>
              </tr>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
