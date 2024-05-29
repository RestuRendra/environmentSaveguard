import React, { useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";

const MetodePembayaran = () => {
  const [firstName, setFirstName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [nominal, setNominal] = useState("");
  const [periode, setPeriode] = useState("");
  const [metode, setMetode] = useState("");

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
  };

  const handleNominalChange = (e) => {
    let value = e.target.value.replace(/[^\d]/g, "");
    if (value) {
      value = parseInt(value).toLocaleString("id-ID");
      setNominal(`Rp. ${value}`);
    } else {
      setNominal("");
    }
  };

  const toggleTransparentText = (value) => (value !== "" ? "none" : "inline");

  return (
    <div>
      <section id="metode">
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
                <h1>Metode Pembayaran</h1>
                <form className="info">
                  <div className="dropdown">
                    <label>Pentunjuk Transfer mBangking</label>
                    <span>
                      <i className="fa-solid fa-caret-down"></i>
                    </span>
                    <div className="dropdown-content">
                      <a href="#">1. Pilih m-Transfer BCA Virtual Account.</a>
                      <a href="#">2. Masukkan nomor Virtual Account 123 45678456 dan pilih Send.</a>
                      <a href="#">3. Periksa informasu yang tertera di layar. Pastiikan Merchant adalah Enviroment Safeguard dan username kamu green guardian. Jika benar, pilih Ya!</a>
                      <a href="#">4. Masukkan PIN m-BCA Anda dan pilih OK.</a>
                      <a href="#">5. Jika muncul notifikasi “Transaksi Gagal. Nominal melebihi limit harian”. mohon ulangi transaksi menggunakan klikBCA (ibangking ) atau ATM.</a>
                    </div>
                  </div>
                  <div className="dropdown">
                    <label>Pentujuk Transfer iBangking</label>
                    <span>
                      <i className="fa-solid fa-caret-down"></i>
                    </span>
                    <div className="dropdown-content">
                      <a href="#">1. Pilih Transfer Dana Transfer ke BCA Virtual Account.</a>
                      <a href="#">2. Masukkan nomor Virtual Account 123 45678456 dan pilih Lanjutkan.</a>
                      <a href="#">3. Periksa informasi yang tertera di layar. Pastikan Merchant Environment Safeguard, Total tagihan sudah benar dan username green guardian. Jika benar, pilih Lanjutkan.</a>
                      <a href="#">4. Masukkan respon keyBCA Anda dan klik kirim Klik untuk buka iBangking.</a>
                    </div>
                  </div>
                  <div className="dropdown">
                    <label>Pentujuk Transfer ATM</label>
                    <span>
                      <i className="fa-solid fa-caret-down"></i>
                    </span>
                    <div className="dropdown-content">
                      <a href="#">1. Pilih Transaksi lainnya Transfer ke Rek BCA Virtual Account.</a>
                      <a href="#">2. Masukkan nomor Virtual Account 123 45678456 dan pilih Lanjutkan.</a>
                      <a href="#">3. Periksa informasi yang tertera di layar. Pastikan Merchant Environment Safeguard, Total tagihan sudah benar dan username green guardian. Jika benar, pilih Ya.</a>
                    </div>
                  </div>
                </form>
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
                  <label>Donasimu mendanai 5 hal ini :</label>
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
                  <label>Krisis iklim dan kehidupan kita :</label>
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
                  <label>Solusi krisis iklim :</label>
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
    </div>
  );
};

export default MetodePembayaran;
