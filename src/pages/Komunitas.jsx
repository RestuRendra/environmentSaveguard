import Navbar from "./../Navbar.jsx";
import "./../index.css";
import Footer from "../Footer";
import { Link } from "react-router-dom";

function Komunitas() {
  return (
    <>
      <Navbar />
      <section id="komunitas-card">
        <div class="container mb-3">
          <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
              <div class="card">
                <img src="komunitas/Pandu Laut Nusantara.png" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5>Pandu Laut Nusantara</h5>
                  <h6>Eco Community</h6>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src="komunitas/Diet-Kantong-Plastik-6-Daftar-Komunitas-Peduli-Lingkungan.png" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5>Youth for Climate Change Indonesia (YFCC Indonesia)</h5>
                  <h6>Eco Community</h6>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src="komunitas/Kampung juang 1.png" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5>Kampung Djoeang Surabaya</h5>
                  <h6>Eco Community</h6>
                </div>
              </div>
            </div>
          </div>
          <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
              <div class="card">
                <img src="komunitas/image5.png" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5>Zero Waste Indonesia</h5>
                  <h6>Eco Community</h6>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src="komunitas/image6.png" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5>Sustaination</h5>
                  <h6>Eco Community</h6>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src="komunitas/KeMangteer.png" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5>KeMANGTEER</h5>
                  <h6>Eco Community</h6>
                </div>
              </div>
            </div>
          </div>
          <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
              <div class="card">
                <img src="komunitas/image 12.png" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5>Yayasan Konservasi Laut Indonesia</h5>
                  <h6>Eco Community</h6>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src="komunitas/image 8.png" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5>Pepelingasih</h5>
                  <h6>Eco Community</h6>
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

export default Komunitas;
