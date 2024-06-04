import Navbar from "./../Navbar.jsx";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Footer from "../Footer.jsx";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Navbar />
      <section id="carrousel-home">
        <div id="hero-carousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active c-item">
              <img src="/Home/HeroHome1.png" className="d-block w-100 c-img" alt="Slide 1" />
              <div className="carousel-caption top-0 mt-4">
                <h1>YOUNG PEOPLE'S VOICES FOR A SUSTAINABLE FUTURE</h1>
                <p>Join Us in Being Part of a Global Movement to Inspire, Mobilize, and Deliver the Change Our Planet and Our Children Need. Let's Build a Better Future Together!"</p>
                <a href="/#about-home" className="button-getstarted">
                  Get Started
                </a>
              </div>
            </div>
            <div className="carousel-item c-item">
              <img src="/Home/HeroHome2.png" className="d-block w-100 c-img" alt="Slide 2" />
              <div className="carousel-caption top-0 mt-4">
                <h1>PLANTING A THOUSAND TRESS </h1>
                <p>Join Us in Being Part of a Movement planting a thousand trees becomes part of a larger movement. Let's Build a Better Future Together!</p>
                <a href="/#about-home" className="button-getstarted">
                  Get Started
                </a>
              </div>
            </div>
            <div className="carousel-item c-item">
              <img src="/Home/HeroHome3.png" className="d-block w-100 c-img" alt="Slide 3" />
              <div className="carousel-caption top-0 mt-4">
                <h1>PLANTING A THOUSAND TRESS </h1>
                <p>A Green Future in Our Hands Together Towards Sustainable Planting a Thousand Trees for Life</p>
                <a href="/#about-home" className="button-getstarted">
                  Get Started
                </a>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#hero-carousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#hero-carousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      <section id="about-home">
        <div className="container">
          <div className="about-home">
            <p>Who we are?</p>
            <h1>Nature Conservation Program</h1>
            <p>
              Exploitation of environment rin the world make us being sad to see it. We try to make movement with a lot of conservation program that we initiate. Our program was made for better environment around us. We Try to reach a lot
              of environment to change it become better place to live. Let’s join our program to give contribution to your environment.
            </p>
            <Link to="/listaksi" className="btn-about">
              Learn More
            </Link>
          </div>
          <div className="container-image">
            <tr>
              <td rowSpan={2} className="img-about-home">
                <div className="card">
                  <img src="/Home/aboutHome2.png" alt="" className="card-img-top" />
                  <div className="card-body">
                    <h5>Planting a Thousand Trees</h5>
                    <p>From its medieval origins to the digital era, learn everything there is to know about the ubiquitous lorem ipsum passage.</p>
                    <Link to="">Read More</Link>
                  </div>
                </div>
              </td>
              <td>
                <div className="card">
                  <img src="/Home/aboutHome1.png" alt="" className="card-img-top" />
                  <div className="card-body">
                    <h5>Planting a Thousand Trees</h5>
                    <p>From its medieval origins to the digital era, learn everything there is to know about the ubiquitous lorem ipsum passage.</p>
                    <Link to="">Read More</Link>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="card">
                  <img src="/Home/aboutHome1.png" alt="" className="card-img-top" />
                  <div className="card-body">
                    <h5>Planting a Thousand Trees</h5>
                    <p>From its medieval origins to the digital era, learn everything there is to know about the ubiquitous lorem ipsum passage.</p>
                    <Link to="">Read More</Link>
                  </div>
                </div>
              </td>
            </tr>
          </div>
        </div>
      </section>

      <section id="donation-home">
        <div className="container">
          <h1>Donation</h1>
          <div className="donation1">
            <div className="img-description">
              <img src="/Home/donationHome1.png" alt="" />
            </div>
            <div className="donation-home-description">
              <h5>Proceeds Will Be Used To Conserve Endangered Animals</h5>
              <p>A lot of animal in the wild that in danger because irresponsible human that always try to hunt illegal animal. From your help we can save a lot of endangered animal outside there vanished from this world.</p>
            </div>
          </div>
          <div className="donation2">
            <div className="donation-home-description">
              <h5>Proceeds Will Be Used To Conserve Endangered Animals</h5>
              <p>A lot of animal in the wild that in danger because irresponsible human that always try to hunt illegal animal. From your help we can save a lot of endangered animal outside there vanished from this world.</p>
            </div>
            <div className="img-description">
              <img src="/Home/donationHome2.png" alt="" />
            </div>
          </div>
          <div className="donation1">
            <div className="img-description">
              <img src="/Home/donationHome3.png" alt="" />
            </div>
            <div className="donation-home-description">
              <h5>Proceeds Will Be Used To Conserve Endangered Animals</h5>
              <p>A lot of animal in the wild that in danger because irresponsible human that always try to hunt illegal animal. From your help we can save a lot of endangered animal outside there vanished from this world.</p>
            </div>
          </div>
          <div className="donation2">
            <div className="donation-home-description">
              <h5>Proceeds Will Be Used To Conserve Endangered Animals</h5>
              <p>A lot of animal in the wild that in danger because irresponsible human that always try to hunt illegal animal. From your help we can save a lot of endangered animal outside there vanished from this world.</p>
            </div>
            <div className="img-description">
              <img src="/Home/donationHome4.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section id="article-home">
        <div className="container">
          <div className="article-home-detail">
            <h3>Lastest Article</h3>
            <Link to="/artikel" href="">
              See All
            </Link>
          </div>
          <div className="articles-container">
            <div className="card">
              <img src="/Home/articleHome1.png" alt="Article 1" />
              <div className="article-info">
                <h3>Vaguely in the Spotlight: Environmental Issues that are Always Overlooked</h3>
                <Link to="#" className="read-more">
                  Read More
                </Link>
              </div>
            </div>
            <div className="card">
              <img src="/Home/articleHome2.png" alt="Article 1" />
              <div className="article-info">
                <h3>Dare to Change: Becoming an Urban Citizen Sustainable with Public Transportation</h3>
                <Link to="#" className="read-more">
                  Read More
                </Link>
              </div>
            </div>
            <div className="card">
              <img src="/Home/articleHome3.png" alt="Article 1" />
              <div className="article-info">
                <h3>TAPMI: Migrant Seafarers are Migrant Workers who play an important role</h3>
                <Link to="#" className="read-more">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="comunity-home">
        <div className="container">
          <div className="comunity-home-detail">
            <h3>Comunity List</h3>
            <Link to="/komunitas">See All</Link>
          </div>
          <div className="comunity-container">
            <div className="card">
              <img src="/Home/comunityHome1.png" alt="Comunity1 1" />
              <div className="comunity-info">
                <h3>Pandu Laut Nusantara</h3>
                <p>Eco Comunity</p>
              </div>
            </div>
            <div className="card">
              <img src="/Home/comunityHome2.png" alt="Comunity 1" />
              <div className="comunity-info">
                <h3>Youth for Climate Change Indonesia (YFCC Indonesia)</h3>
                <p>Eco Comunity</p>
              </div>
            </div>
            <div className="card">
              <img src="/Home/comunityHome3.png" alt="Comunity 1" />
              <div className="comunity-info">
                <h3>Kampoeng Djoeang</h3>
                <p>Eco Comunity</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
