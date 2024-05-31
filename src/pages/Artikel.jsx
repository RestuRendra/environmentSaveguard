import Footer from "./../Footer.jsx";
import Navbar from "./../Navbar.jsx";
import "./../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function Artikel() {
  return (
    <>
      <Navbar />
      <div className="artikel-hero">
        <div className="image-wrapper">
          <img
            src="/Artikel/Happy friends chatting together, stock image in botanical garden.png"
            alt="Gambar 5"
            className="additional-image"
          />
          <div className="grid-2x2">
            <img src="/Artikel/Rectangle 27.png" alt="Gambar 1" />
            <img src="/Artikel/Rectangle 24.png" alt="Gambar 2" />
            <img src="/Artikel/Rectangle 28.png" alt="Gambar 3" />
            <img src="/Artikel/Rectangle 26.png" alt="Gambar 4" />
          </div>
        </div>
      </div>

      <section id="artikel-card">
        <div className="container mb-3">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card">
                <img
                  src="/Artikel/Rectangle 1831.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5>
                    Mourning Flowers to Police Arrests: Everything about Papuan
                    Youth's Support for Awyu Tribe
                  </h5>
                  <p>
                    In various places in Papua, support continues to pour in for
                    the Awyu tribe's struggle. Papuan youths held rallies from
                    Jayapura to Manokwari-even facing repressive actions from
                    the authorities.
                  </p>
                  <a href="artikel-detail.html" className="btn">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src="/Artikel/Rectangle 1837.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5>
                    Playing with Deforestation: The Talk of Climate Commitment
                    Through FOLU Net Sink 2030
                  </h5>
                  <p>
                    FOLU Net Sink 2030 strategy risks perpetuating
                    deforestation. Dangerous for saving forests and climate
                    action
                  </p>
                  <a href="#" className="btn">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src="/Artikel/Rectangle 1823.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5>
                    Civil Society's Call for 2024 Elections: Choose to Recover
                    from Climate Crisis and Devastation Democracy and Human
                    Rights
                  </h5>
                  <p>
                    The 2024 elections are taking place in the midst of a
                    difficult situation; the climate crisis is increasingly
                    threatening the lives of citizens, the democratic space is
                    narrowing, and the future for the younger generation is
                    uncertain - for example regarding access to education and
                    employment.
                  </p>
                  <a href="#" className="btn">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card">
                <img
                  src="/Artikel/Rectangle 1841.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5>
                    Stop Talking to the Earth, Stories of Food Loss and Damage
                    due to Climate Crisis
                  </h5>
                  <p>
                    Loss and damage from the climate crisis will be increasingly
                    experienced by those who rely on livelihoods from food
                    commodities such as farmers and fishermen.
                  </p>
                  <a href="#" className="btn">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src="/Artikel/Playing an Important Role Like Coral Reefs.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5>Playing an Important Role Like Coral Reefs</h5>
                  <p>
                    Coral reefs, with all their beauty and rich biota, are not
                    only a stunning tourism attraction, but also the foundation
                    of life for millions of marine creatures around the world.
                  </p>
                  <a href="artikel-detail.html" className="btn">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src="/Artikel/Rectangle 1835.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5>
                    Pisang Kepok, Flores' Endangered Rice Support and Source of
                    Income for Farmers
                  </h5>
                  <p>"Now bananas are just a memory," she said softly.</p>
                  <a href="#" className="btn">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Artikel
