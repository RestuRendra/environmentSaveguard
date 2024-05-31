import Navbar from "./../Navbar.jsx";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Footer from "../Footer.jsx";

function ArtikelDetail() {
  return (
    <>
      <Navbar />
      <div className="detail-artikel">
        <img
          src="Artikel/Artikel Detail/Rectangle 7.png"
          className="img-fluid"
          alt="Responsive image"
        />
        <div className="text-overlay">
          <h1>Playing an Important Role Like Coral Reefs</h1>
        </div>
      </div>

      <div id="detail">
        <div className="content">
            <h5>Writer | January 20, 2024</h5>
            <div className="first-letter-big">
            <span className="big-letter">C</span>
            <h6>oral reefs, with all their beauty and rich biota, are not only a stunning tourism attraction, but also the foundation of life for millions of marine creatures around the world. As the most productive ecosystems in the ocean, coral reefs provide intricate and useful habitats for many species of fish, mollusks, crustaceans and other organisms. However, coral reefs are facing serious challenges due to human activities that damage the marine environment.</h6>
            </div>
            <h6>Climate change, including global warming and rising sea surface temperatures, has caused mass bleaching and mass mortality of coral reefs around the world. Marine pollution by plastic waste, hazardous chemicals, and organic waste also threatens the sustainability of coral reefs by poisoning and disrupting their ecosystems. In addition, unsustainable fishing practices, including the use of explosives and destructive fishing lines, have led to declining fish populations and habitat destruction around coral reefs.</h6>
            <div className="container mb-3">
                <div className="row">
                    <div className="col-md-6 order-md-1 order-2">
                    <h6>
                        However, all hope is not lost. With concerted efforts from governments, non-profit organizations, scientists, and civil society, there is still a chance to restore threatened coral reefs. Effective conservation measures, such as the establishment of marine parks, protection zones, and bans on destructive fishing, have proven successful in preserving coral reefs in some locations. In addition, public education and awareness also play an important role in coral reef conservation efforts. 
                    </h6>
                    </div>
                    <div className="col-md-6 order-md-2 order-1">
                    <div className="image_container">
                        <div className="imgbox">
                        <img src="Artikel/Artikel Detail/Young activist taking action.jpg" alt="picture" className="img-fluid" />
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <h6>By increasing understanding of the importance of coral reefs to the balance of marine ecosystems and human well-being, we can mobilize broader support for protecting and restoring coral reefs. We, as members of the global community, have a responsibility to sustain the marine environment, including protecting coral reefs. By understanding the critical role that coral reefs play in maintaining biodiversity and the balance of marine ecosystems, let's unite in efforts to ensure that these natural wonders remain sustainable for future generations. bundled the text with their software. Today it's seen all around the web; on templates, websites, and stock designs.</h6>
        </div>
        <div className="detail">
            <img src="Artikel/Artikel Detail/Kids having fun as boy scouts.jpg" className="img-fluids" alt="Responsive image" />
        </div>
        <div id="detail">
            <div className="content">
            <h6>In addition, ongoing scientific research needs to be supported to better understand the challenges faced by coral reefs and create innovative solutions to address these issues. New technologies and recovery methods, such as coral reef restoration through fragment removal, creation of artificial structures, and coral cultivation techniques, promise hope for the recovery of threatened coral reefs. With strong commitment and concrete actions from all parties, we can play a significant role in safeguarding coral reefs and ensuring their survival as important and valuable marine ecosystems. In addition, cross-border cooperation between countries is also needed to maintain the sustainability of coral reefs around the world. Because coral reefs recognize no national borders, efforts to conserve them must also involve international cooperation in management, research, and protection. Through international forums and multilateral agreements, countries can come together to address common threats and take concrete steps to protect coral reefs holistically. By doing so, we can ensure that the beauty and diversity of coral reefs will continue to be an invaluable natural heritage for all of humanity.</h6>
            </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ArtikelDetail;
