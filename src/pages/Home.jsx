import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import HeroHome1 from "./assets/HeroHome1.png";
import HeroHome2 from "./assets/HeroHome2.png";
import HeroHome3 from "./assets/HeroHome3.png";
import aboutHome1 from "./assets/aboutHome1.png";
import aboutHome2 from "./assets/aboutHome2.png";
import donationHome1 from "./assets/donationHome1.png";
import articleHome1 from "./assets/articleHome1.png";
import comunityHome1 from "./assets/comunityHome1.png";
import "./index.css";

function Home() {
  return (
    <>
      <div id="hero-carousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active c-item">
            <img src={HeroHome1} className="d-block w-100 c-img" alt="Slide 1" />
            <div className="carousel-caption top-0 mt-4">
              <h1>YOUNG PEOPLE'S VOICES FOR A SUSTAINABLE FUTURE</h1>
              <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
              <button className="btn btn-primary px-4 py-2 fs-5 mt-5">Get Started</button>
            </div>
          </div>
          <div className="carousel-item c-item">
            <img src={HeroHome2} className="d-block w-100 c-img" alt="Slide 2" />
            <div className="carousel-caption top-0 mt-4">
              <h1>PLANTING A THOUSAND TRESS </h1>
              <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
            </div>
          </div>
          <div className="carousel-item c-item">
            <img src={HeroHome3} className="d-block w-100 c-img" alt="Slide 3" />
            <div className="carousel-caption top-0 mt-4">
              <h1>PLANTING A THOUSAND TRESS </h1>
              <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
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

      <section id="about-home">
        <div className="container">
          <div className="about-home">
            <p>Who we are?</p>
            <h1>Nature Conservation Program</h1>
            <p>
              Exploitation of environment rin the world make us being sad to see it. We try to make movement with a lot of conservation program that we initiate. Our program was made for better environment around us. We Try to reach a lot
              of environment to change it become better place to live. Let’s join our program to give contribution to your environment.
            </p>
            <button className="btn px-4 py-2 fs-5 mt-5 btn-about">Learn More</button>
          </div>
          <div className="container-image">
            <tr>
              <td rowSpan={2} className="img-about-home">
                <div class="card">
                  <img src={aboutHome2} alt="" class="card-img-top" />
                  <div class="card-body">
                    <h5>Planting a Thousand Trees</h5>
                    <p>From its medieval origins to the digital era, learn everything there is to know about the ubiquitous lorem ipsum passage.</p>
                    <a href="">Read More</a>
                  </div>
                </div>
              </td>
              <td>
                <div class="card">
                  <img src={aboutHome1} alt="" class="card-img-top" />
                  <div class="card-body">
                    <h5>Planting a Thousand Trees</h5>
                    <p>From its medieval origins to the digital era, learn everything there is to know about the ubiquitous lorem ipsum passage.</p>
                    <a href="">Read More</a>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="card">
                  <img src={aboutHome2} alt="" class="card-img-top" />
                  <div class="card-body">
                    <h5>Planting a Thousand Trees</h5>
                    <p>From its medieval origins to the digital era, learn everything there is to know about the ubiquitous lorem ipsum passage.</p>
                    <a href="">Read More</a>
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
              <img src={donationHome1} alt="" />
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
              <img src={donationHome1} alt="" />
            </div>
          </div>
          <div className="donation1">
            <div className="img-description">
              <img src={donationHome1} alt="" />
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
              <img src={donationHome1} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section id="article-home">
        <div className="container">
          <div className="article-home-detail">
            <h3>Lastest Article</h3>
            <a href="">See All</a>
          </div>
          <div class="articles-container">
            <div class="card">
              <img src={articleHome1} alt="Article 1" />
              <div class="article-info">
                <h3>Vaguely in the Spotlight: Environmental Issues that are Always Overlooked</h3>
                <a href="#" class="read-more">
                  Read More
                </a>
              </div>
            </div>
            <div class="card">
              <img src={articleHome1} alt="Article 1" />
              <div class="article-info">
                <h3>Dare to Change: Becoming an Urban Citizen Sustainable with Public Transportation</h3>
                <a href="#" class="read-more">
                  Read More
                </a>
              </div>
            </div>
            <div class="card">
              <img src={articleHome1} alt="Article 1" />
              <div class="article-info">
                <h3>TAPMI: Migrant Seafarers are Migrant Workers who play an important role</h3>
                <a href="#" class="read-more">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="comunity-home">
        <div className="container">
          <div className="comunity-home-detail">
            <h3>Comunity List</h3>
            <a href="">See All</a>
          </div>
          <div class="comunity-container">
            <div class="card">
              <img src={comunityHome1} alt="Comunity1 1" />
              <div class="comunity-info">
                <h3>Pandu Laut Nusantara</h3>
                <p>Eco Comunity</p>
              </div>
            </div>
            <div class="card">
              <img src={comunityHome1} alt="Comunity 1" />
              <div class="comunity-info">
                <h3>Youth for Climate Change Indonesia (YFCC Indonesia)</h3>
                <p>Eco Comunity</p>
              </div>
            </div>
            <div class="card">
              <img src={comunityHome1} alt="Comunity 1" />
              <div class="comunity-info">
                <h3>Kampoeng Djoeang</h3>
                <p>Eco Comunity</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
