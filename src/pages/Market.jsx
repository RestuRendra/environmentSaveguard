import Gambar1 from "./assets/market/HeroMarket1.png";
import Gambar2 from "./assets/market/HeroMarket2.png";
import Gambar3 from "./assets/market/PiringDaurUlang.jpg";
import Gambar4 from "./assets/market/Tas Godie Bag.jpg";
import Gambar5 from "./assets/market/Souvenir Candle Lilin.jpg";
import Gambar6 from "./assets/market/Tas Karung Bekas.jpg";
import Gambar7 from "./assets/market/Gantungan Kunci.jpg";
import Gambar8 from "./assets/market/Tas Belanja Daur Ulang.jpg";
import Gambar9 from "./assets/market/PiringDaurUlang.jpg";
import Gambar10 from "./assets/market/Tas Minyak Daur Ulang.jpg";
import Gambar11 from "./assets/market/Tempat Pensil Daur Ulang.jpg";
import Gambar12 from "./assets/market/Tempat Pencil Kaleng Rokok dan Sedotan.png";
import Gambar13 from "./assets/market/Tempat Pensil Daur Ulang Bekas.jpg";
import Gambar14 from "./assets/market/Kipas Tangan.jpg";
import "./index.css";
import { Link } from "react-router-dom";
function Market() {
  return (
    <>
      <section id="market-hero">
        <div className="image-wrapper">
          <img src={Gambar1} alt="Gambar 1" className="additional-image large-image" />
          <img src={Gambar2} alt="Gambar 2" className="additional-image" />
        </div>
      </section>

      <section id="toko">
        <div class="card1">
          <div class="card-body">
            <h5 class="card-title">Butik Daur Ulang</h5>
            <p class="card-text">Merupakan ritel layanan produk daur ulang sampah plastik di daerah Kecamatan Depok, Sleman, Indonesia.</p>
            <Link to="/DetailMarket" class="card-link">
              More Detail
            </Link>
          </div>
        </div>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card">
              <img src={Gambar3} class="card-img-top" alt="..." />
              <div class="card-body">
                <h6>Piring Daur Ulang</h6>
                <p>Rp.22.000</p>
                <div class="btn-container">
                  <a class="btn-left">
                    <i class="fa-solid fa-star"></i> 4.9
                  </a>
                  <a href="#" class="btn">
                    Detail
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src={Gambar4} class="card-img-top" alt="..." />
              <div class="card-body">
                <h6>Tas GodieBag</h6>
                <p>Rp.30.000</p>
                <div class="btn-container">
                  <a class="btn-left">
                    <i class="fa-solid fa-star"></i> 4.9
                  </a>
                  <a href="#" class="btn">
                    Detail
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src={Gambar5} class="card-img-top" alt="..." />
              <div class="card-body">
                <h6>Souvenir Candle Lilin</h6>
                <p>Rp.12.000</p>
                <div class="btn-container">
                  <a class="btn-left">
                    <i class="fa-solid fa-star"></i> 4.2
                  </a>
                  <a href="#" class="btn">
                    Detail
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="toko">
        <div class="card1">
          <div class="card-body">
            <h5 class="card-title">Revaldi.Store</h5>
            <p class="card-text">Merupakan ritel layanan produk kerajinan daur ulang di Kota Jakarta Barat Indonesia.</p>
            <a href="detail-market.html" class="card-link">
              More Detail
            </a>
          </div>
        </div>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card">
              <img src={Gambar6} class="card-img-top" alt="..." />
              <div class="card-body">
                <h6>Tas Dari Karung Bekas</h6>
                <p>Rp.6.500</p>
                <div class="btn-container">
                  <a class="btn-left">
                    <i class="fa-solid fa-star"></i> 4.1
                  </a>
                  <a href="#" class="btn">
                    Detail
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src={Gambar7} class="card-img-top" alt="..." />
              <div class="card-body">
                <h6>Gantungan Kunci </h6>
                <p>Rp.3.300</p>
                <div class="btn-container">
                  <a class="btn-left">
                    <i class="fa-solid fa-star"></i> 4.9
                  </a>
                  <a href="#" class="btn">
                    Detail
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src={Gambar8} class="card-img-top" alt="..." />
              <div class="card-body">
                <h6>Tas Belanja Daur Ulang</h6>
                <p>Rp.13.000</p>
                <div class="btn-container">
                  <a class="btn-left">
                    <i class="fa-solid fa-star"></i> 4.8
                  </a>
                  <a href="#" class="btn">
                    Detail
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="rekomendasi">
        <div class="container mb-3">
          <h1>Rekomendasi</h1>
          <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
              <div class="card">
                <img src={Gambar9} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h6>Piring Daur Ulang</h6>
                  <p>Rp.22.000</p>
                  <div class="btn-container">
                    <a class="btn-left">
                      <i class="fa-solid fa-star"></i> 4.9
                    </a>
                    <a href="#" class="btn">
                      Detail
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src={Gambar10} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h6>Tas Totebag Kemasan Minyak Daur Ulang</h6>
                  <p>Rp.25.000 - 30.000</p>
                  <div class="btn-container">
                    <a class="btn-left">
                      <i class="fa-solid fa-star"></i> 5.0
                    </a>
                    <a href="#" class="btn">
                      Detail
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src={Gambar11} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h6>Tempat Pensil Daur Ulang Kotak Pencil Case</h6>
                  <p>Rp.27.000</p>
                  <div class="btn-container">
                    <a class="btn-left">
                      <i class="fa-solid fa-star"></i> 5.0
                    </a>
                    <a href="#" class="btn">
                      Detail
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
              <div class="card">
                <img src={Gambar12} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h6>Tempat pensil dari kaleng rokok bekas dan sedotan</h6>
                  <p>Rp.18.000</p>
                  <div class="btn-container">
                    <a class="btn-left">
                      <i class="fa-solid fa-star"></i> 4.9
                    </a>
                    <a href="#" class="btn">
                      Detail
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src={Gambar13} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h6>Tempat pensil / vas bunga dari botol bekas</h6>
                  <p>Rp.15.500</p>
                  <div class="btn-container">
                    <a class="btn-left">
                      <i class="fa-solid fa-star"></i> 4.9
                    </a>
                    <a href="#" class="btn">
                      Detail
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src={Gambar14} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h6>Kipas tangan dari sedotan</h6>
                  <p>Rp.16.000</p>
                  <div class="btn-container">
                    <a class="btn-left">
                      <i class="fa-solid fa-star"></i> 4.8
                    </a>
                    <a href="#" class="btn">
                      Detail
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Market;
