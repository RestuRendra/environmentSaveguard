import Navbar from "./../Navbar.jsx";
import "../index.css";
import { Link } from "react-router-dom";
import Footer from "../Footer.jsx";
import React, { useState, useEffect } from "react";

const AksiDetail2 = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const loadingBar = document.querySelector(".loading-bar");
    loadingBar.style.width = "70%";
  }, []);

  const handlePopup = () => {
    setShowPopup(true);
  };

  return (
    <>
      <Navbar />
      <section id="aksi-detail2">
        <div className="container mb-3">
          <div className="row">
            <div className="col-md-6 order-md-1 order-2">
              <h2>I'm with the Papua Forest</h2>
              <h6>Flora and fauna have a home in the forest. This means that by clearing the forest for land use, not only the trees are lost but the continuity of the flora and fauna in it is threatened.</h6>
              <img src="aksi/Deforestation threatens tree kangaroo habitat in Papua New Guinea 1.png" className="picture-aksi2" alt="Deforestation threatens tree kangaroo habitat in Papua New Guinea" />
              <h6>
                Flora that takes a long time to grow is simply destroyed. Fauna will lose their homes and ecosystems that support their survival, for those that can survive we may still be able to see them but it is possible that forest
                destruction can make some animals end up almost extinct or even extinct.
              </h6>
            </div>
            <div className="col-md-6 order-md-2 order-1">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Tambahkan namamu di bawah ini, dan bersama, kita bisa lindungi hutan Papua!</h4>
                  <p>11,717 telah menandatangani petisi ini</p>
                  <div className="loading-bar-container">
                    <div className="loading-bar"></div>
                  </div>
                  <p>8283 masih dibutuhkan untuk menuju 20,000</p>
                  <form className="form-container aksi2">
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <div className="input-wrapper">
                        <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <span className={`transparent-text ${email ? "hide" : ""}`}>
                          <i className="fa-regular fa-envelope"></i>Email Example
                        </span>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="first-name">Nama Depan</label>
                      <div className="input-wrapper">
                        <input type="text" id="first-name" name="first-name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                        <span className={`transparent-text ${firstName ? "hide" : ""}`}>Nama Depan</span>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="last-name">Nama Belakang</label>
                      <div className="input-wrapper">
                        <input type="text" id="last-name" name="last-name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                        <span className={`transparent-text ${lastName ? "hide" : ""}`}>Nama Belakang</span>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Nomor Telepon</label>
                      <div className="input-wrapper">
                        <input type="tel" id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                        <span className={`transparent-text ${phone ? "hide" : ""}`}>Nomor Telepon</span>
                      </div>
                    </div>
                  </form>
                  <h6>
                    Environment Safeguard memerlukan informasi kontak yang Anda berikan kepada kami untuk menghubungi Anda tentang produk dan layanan kami. Anda dapat berhenti berlangganan dari komunikasi ini kapan pun. Untuk informasi
                    tentang cara berhenti berlangganan, serta praktik privasi dan komitmen kami untuk melindungi privasi Anda, tinjau Kebijakan Privasi kami.
                  </h6>
                  <button className="btn" onClick={handlePopup}>
                    Action List
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
      <Footer />
    </>
  );
};

export default AksiDetail2;
