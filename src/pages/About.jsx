import Footer from "./../Footer.jsx";
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
              Thank you for your concern and support for our mission to protect and preserve the environment. With your donation, you have become part of a global movement to safeguard biodiversity and pass on a greener planet to future
              generations.
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
                Our vision is to protect and preserve our planet for future generations. We believe in a sustainable future where people live in harmony with nature, and we are committed to promoting environmental awareness, conservation
                efforts, and sustainable practices.
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
                  <img src="/About/aboutMisi1.png" alt="" />
                </td>
                <td>
                  <img src="/About/aboutMisi2.png" alt="" />
                </td>
              </tr>
              <tr>
                <td className="" colSpan={2}>
                  <img src="/About/aboutMisi3.png" alt="" />
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

      <section id="team">
        <div class="container mb-3">
          <h2>Meet Our Team</h2>
          <h4>Our People</h4>
          <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
              <div class="card">
                <img src="About/team/Restu.jpg" class="card-img-top" alt="Restu" />
              </div>
              <div class="card-body">
                <h5>Restu Rendra Andresawara</h5>
                <h6>PM</h6>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src="About/team/Adinda .jpg" class="card-img-top" alt="Dinda" />
              </div>
              <div class="card-body">
                <h5>Adinda Dyahrestu Putri</h5>
                <h6>Hipster/Designer</h6>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src="About/team/Artika.jpg" class="card-img-top" alt="Artika" />
              </div>
              <div class="card-body">
                <h5>Artika Widy</h5>
                <h6>Hipster/Designer</h6>
              </div>
            </div>
          </div>
          <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
              <div class="card">
                <img src="About/team/Awang.jpg" class="card-img-top" alt="Awang" />
              </div>
              <div class="card-body">
                <h5>Awang Dwi Afrizal</h5>
                <h6>Hacker/Programmer</h6>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src="About/team/Nabilla.jpg" class="card-img-top" alt="Billa" />
              </div>
              <div class="card-body">
                <h5>Nabilla Nur Eka Fitriani</h5>
                <h6>Hacker/Programmer</h6>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src="About/team/Tasya.jpg" class="card-img-top" alt="Tasya" />
              </div>
              <div class="card-body">
                <h5>Tasya Oktaviani</h5>
                <h6>Hacker/Programmer</h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features">
        <div class="container mb-3">
          <h2>Our Features</h2>
          <h4>These Are Some Of The Features We Provide</h4>
          <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
              <div class="card">
                <img src="About/fitur artikel.jpg" class="card-img-top" alt="Artikel" />
                <div class="centered">Artikel</div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src="About/fitur donasi.jpg" class="card-img-top" alt="Donasi" />
                <div class="centered">Donation</div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src="About/fitur aksi.jpg" class="card-img-top" alt="Aksi" />
                <div class="centered">Aksi</div>
              </div>
            </div>
          </div>
          <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="cols">
              <div class="card">
                <img src="About/fitur diskusi.jpg" class="card-img-top" alt="Forum Discussion" />
                <div class="centered">Forum Discussion</div>
              </div>
            </div>
            <div class="cols">
              <div class="card">
                <img src="About/fitur olshop.jpg" class="card-img-top" alt="Market Place" />
                <div class="centered">Shop</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default About;
