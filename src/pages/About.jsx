import Navbar from "./../Navbar.jsx";
import "./../index.css";

function About() {
  return (
    <>
      <Navbar />
      <section id="about-hero">
        <div className="about">
          <div className="content">
            <h1>About Us</h1>
            <h5>
              Thank you for your concern and support for our mission to protect
              and preserve the environment. With your donation, you have become
              part of a global movement to safeguard biodiversity and pass on a
              greener planet to future generations.
            </h5>
            <a href="" className="teksbtn">
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
                Our vision is to protect and preserve our planet for future
                generations. We believe in a sustainable future where people
                live in harmony with nature, and we are committed to promoting
                environmental awareness, conservation efforts, and sustainable
                practices.
              </p>
            </div>
            <div className="visi-image">
              <tr className="visi-image1">
                <td>
                  <img src="/About/aboutVisi1.png" alt="" />
                </td>
                <td>
                  <img src="/About/aboutVisi2.png" alt="" />
                </td>
              </tr>
              <tr>
                <td className="" colSpan={2}>
                  <img src="/About/aboutVisi3.png" alt="" />
                </td>
              </tr>
            </div>
          </div>
          <div className="visi">
            <div className="visi-image">
              <tr className="visi-image1">
                <td>
                  <img src="/About/aboutVisi1.png" alt="" />
                </td>
                <td>
                  <img src="/About/aboutVisi2.png" alt="" />
                </td>
              </tr>
              <tr>
                <td className="" colSpan={2}>
                  <img src="/About/aboutVisi3.png" alt="" />
                </td>
              </tr>
            </div>
            <div className="misi-content">
              <h3>Our Vission</h3>
              <ol>
                <li>Protecting Biodiversity</li>
                <li>Reducing Carbon Footprint</li>
                <li>Educating and Driving Action</li>
                <li>Promoting Environmental Justice</li>
                <li>Developing Collaborative Partnerships</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
