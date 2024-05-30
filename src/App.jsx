import "./App.css";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Donasi from "./pages/Donasi.jsx";
import ListAksi from "./pages/ListAksi.jsx";
import Market from "./pages/Market.jsx";
import DetailMarket from "./pages/DetailMarket.jsx";
import Membership from "./pages/Membership.jsx";
import Satukali from "./pages/Satukali.jsx";
import MetodePembayaran from "./pages/MetodePembayaran.jsx";
import AksiDetail1 from "./pages/AksiDetail1.jsx";
import Komunitas from "./pages/Komunitas.jsx";
import Footer from "./Footer.jsx";
import AksiDetail2 from "./pages/AksiDetail2.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/donasi" element={<Donasi />} />
          <Route path="/listaksi" element={<ListAksi />} />
          <Route path="/market" element={<Market />} />
          <Route path="/detailmarket" element={<DetailMarket />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/satukali" element={<Satukali />} />
          <Route path="/metodepembayaran" element={<MetodePembayaran />} />
          <Route path="/aksidetail1" element={<AksiDetail1 />} />
          <Route path="/aksidetail2" element={<AksiDetail2 />} />
          <Route path="/komunitas" element={<Komunitas />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
