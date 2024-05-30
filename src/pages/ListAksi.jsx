import { Link } from "react-router-dom";
import "./../index.css";
import Navbar from "./../Navbar.jsx";
import Footer from "../Footer.jsx";

function ListAksi() {
  return (
    <>
      <Navbar />
      <section id="aksi-card">
        <div className="container mb-3">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card">
                <img src="aksi/Deforestation threatens tree kangaroo habitat in Papua New Guinea 1.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4>I'm with the Papua Forest</h4>
                  <h6>
                    Through sustainable conservation efforts, we not only protect habitats for rare and endemic species, but also strengthen the protection of natural resources essential to human well-being. By understanding the ecological,
                    social and cultural value of Papua's forests, together we are building a greener and more sustainable future for all living things on this planet.
                  </h6>
                  <Link to="/aksidetail1" className="btn">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src="aksi/Rectangle 6.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4>A Beautiful Mountain Covered In Trash</h4>
                  <h6>
                    Across the world, mountains that were once icons of natural beauty are now threatened by the accumulation of plastic waste littering their slopes. Aside from spoiling the stunning scenery, these build-ups also threaten
                    the natural ecosystems around them and pose health risks to the creatures that depend on them.
                  </h6>
                  <a href="#" className="btn">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src="aksi/Rectangle 6 (1).png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4>Garbage Flows With Water</h4>
                  <h6>
                    From small rivers to vast oceans, plastic pollution and other wastes continue to flow, polluting the environment and endangering aquatic life and the people who depend on it. Greater efforts are needed to tackle this
                    problem, including increased public awareness, strict policy implementation, and the innovation of environmentally friendly solutions to reduce and clean up litter littering waterways.
                  </h6>
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
                <img src="aksi/Rectangle 6 (2).png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4>Let's be animal protectors</h4>
                  <h6>
                    Amidst the threat of extinction and loss of their natural habitats, active participation from the public in conservation efforts is becoming increasingly important. By supporting threatened habitats, stopping illegal
                    trade, and promoting awareness of the importance of biodiversity, we can all become animal protectors and contribute to maintaining the beauty and sustainability of the universe.
                  </h6>
                  <a href="#" className="btn">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src="aksi/Rectangle 6 (3).png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4>Growing Up with the Trees</h4>
                  <h6>
                    Growing Up with Trees "Growing Up with Trees" is a rallying cry to appreciate the important role trees play in maintaining ecosystem balance and air quality. With each tree planting, we not only create a greener and
                    healthier environment, but also make a significant contribution in addressing climate change.
                  </h6>
                  <a href="#" className="btn">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src="aksi/Rectangle 6 (4).png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4>Playing an Important Role Like Coral Reefs</h4>
                  <h6>
                    Coral reefs play an important role in maintaining biodiversity and the balance of marine ecosystems. Home to thousands of species of fish and other marine organisms, coral reefs provide food resources and livelihoods for
                    millions of people around the world. However, pressures brought about by climate change, pollution and human activities threaten the sustainability of these reefs.
                  </h6>
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

export default ListAksi;
