import React, { useState, useEffect } from "react";
import "./../index.css";
import Navbar from "./../Navbar.jsx";
import { Link } from "react-router-dom";
import Footer from "../Footer";

const Satukali = () => {
  const [nominal, setNominal] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handlePopup = (event) => {
    event.preventDefault();
    setShowPopup(true);
  };

  const handleInputChange = (setter) => (event) => {
    setter(event.target.value);
  };

  useEffect(() => {
    const inputs = document.querySelectorAll(".input-wrapper input, .input-wrapper select");
    inputs.forEach((input) => {
      input.addEventListener("input", function () {
        if (input.value.trim() !== "") {
          input.nextElementSibling.style.display = "none";
        } else {
          input.nextElementSibling.style.display = "inline";
        }
      });
    });

    const nominalInput = document.getElementById("nominal");
    const formatNominalInput = (e) => {
      let value = e.target.value.replace(/[^\d]/g, ""); // Remove all non-digit characters
      if (value) {
        value = parseInt(value).toLocaleString("id-ID"); // Format the number with thousand separators
        e.target.value = "Rp. " + value;
      } else {
        e.target.value = "";
      }
    };
    nominalInput.addEventListener("input", formatNominalInput);

    // Cleanup the event listeners on component unmount
    return () => {
      inputs.forEach((input) => {
        input.removeEventListener("input", () => {});
      });
      nominalInput.removeEventListener("input", formatNominalInput);
    };
  }, []);

  return (
    <>
      <Navbar />
      <section id="satukali">
        <div className="card">
          <div className="card-body">
            <div className="container">
              <div className="text-container">
                <Link to="/Membership" className="monthly-link">
                  <p className="monthly-text">Membership</p>
                </Link>
              </div>
              <div className="text-container">
                <Link to="/Satukali" className="one-time-link">
                  <p className="one-time-text">Satu Kali</p>
                </Link>
              </div>
              <div className="text-container">
                <Link to="/MetodePembayaran" className="tutor-link">
                  <p className="tutor-text">Metode Pembayaran</p>
                </Link>
              </div>
            </div>
            <hr />
            <div className="container mb-3">
              <div className="row">
                <div className="col-md-6 order-md-1 order-2">
                  <div className="image_container">
                    <div className="imgbox">
                      <img src="donasi/card.png" alt="user picture" className="img-fluid" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6 order-md-2 order-1">
                  <h2>Payment Detail</h2>
                  <form>
                    <div className="form-group">
                      <label htmlFor="nominal">Masukkan Nominal</label>
                      <div className="form-control-container">
                        <input type="text" id="nominal" name="nominal" className="form-control" placeholder="Rp. 0" value={nominal} onChange={handleInputChange(setNominal)} required />
                      </div>
                    </div>
                  </form>
                  <button className="btn" onClick={handlePopup}>
                    Donasi Sekarang
                  </button>
                  {showPopup && (
                    <div className="overlay" id="popupOverlay">
                      <div className="popup">
                        <div className="icon-container">
                          <img src="Pop.png" alt="pop up" className="icon" />
                          <p className="message">Maaf Anda Harus</p>
                          <p className="message">Login Terlebih Dahulu!</p>
                          <button className="close-button" onClick={() => setShowPopup(false)}>
                            &times;
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="detail-donasi">
        <div className="container mb-3">
          <div className="row align-items-center">
            <div className="col-md-6 order-md-1 order-2">
              <div className="image_container">
                <div className="imgbox">
                  <img src="donasi/Chris Hemsworth, educates fans on how plastic is damaging our oceans 1.png" alt="user picture" className="img-fluid" />
                </div>
              </div>
            </div>
            <div className="col-md-6 order-md-2 order-1">
              <h2>Berdonasi sekarang untuk mewujudkan lingkungan yang lebih hijau dan damai!</h2>
              <form className="info">
                <div className="dropdown">
                  <label htmlFor="text">Donasimu mendanai 5 hal ini :</label>
                  <span>
                    <i className="fa-solid fa-caret-down"></i>
                  </span>
                  <div className="dropdown-content">
                    <p>Donasimu akan digunakan langsung mendanai kampanye kami:</p>
                    <a href="#">Mengungkap kerusakan lingkungan.</a>
                    <a href="#">Melakukan riset berdasar sains.</a>
                    <a href="#">Mengambil tindakan langsung menggunakan aksi konfrontatif, kreatif dan tanpa kekerasan.</a>
                    <a href="#">Mendesak pemerintah dan industri untuk menyadari tanggung jawab dan peran mereka untuk ikut mengatasi masalah lingkungan.</a>
                    <a href="#">Menyatukan kekuatan masyarakat dan mengadvokasi kebijakan dan solusi ramah lingkungan.</a>
                  </div>
                </div>
              </form>
              <form className="info">
                <div className="dropdown">
                  <label htmlFor="text">Krisis iklim dan kehidupan kita :</label>
                  <span>
                    <i className="fa-solid fa-caret-down"></i>
                  </span>
                  <div className="dropdown-content">
                    <p>Krisis iklim yang sudah hadir di depan mata kita dan kamu bisa membantu mendorong solusi!</p>
                    <a href="#">
                      Dampak krisis iklim di Indonesia semakin dekat. Mulai dari bencana banjir bandang, gelombang panas, kebakaran hutan, tanah longsor, naiknya permukaan air laut, pemutihan karang di laut, krisis air bersih, polusi udara
                      yang merenggut nyawa, sampai ancaman kepunahan flora dan fauna.
                    </a>
                  </div>
                </div>
              </form>
              <form className="info">
                <div className="dropdown">
                  <label htmlFor="text">Solusi krisis iklim :</label>
                  <span>
                    <i className="fa-solid fa-caret-down"></i>
                  </span>
                  <div className="dropdown-content">
                    <a href="#">
                      Dengan dukungan donasi darimu, Greenpeace dapat memiliki lebih banyak sumber daya dan kekuatan untuk mendorong solusi krisis iklim agar kondisi bumi dapat lebih lestari dan damai untuk kehidupan sekarang dan masa depan
                      yang lebih baik.
                    </a>
                  </div>
                </div>
              </form>
              <h6>Terima kasih atas dukunganmu yang sangat berarti bagi Bumi.</h6>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Satukali;
