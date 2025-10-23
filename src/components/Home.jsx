import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import AOS from "aos";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  const [showButton, setShowButton] = useState(false);

  // Initialize AOS + Back to Top Scroll Behavior
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const handleScroll = () => {
      if (window.scrollY > 300) setShowButton(true);
      else setShowButton(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>

      {/* ===== Image Slider Section ===== */}
      <div 
      
  id="foodCarousel"
  className="carousel slide mt-5"
  data-bs-ride="false"
>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://cdn.jflimages.co.in/nextgen-catalog/media/prod/Dominos/WebHomeProductV1/7ed9c325-2b42-4824-a25a-367bb48332be_double_margherita_side.webp?ver=V0.0.1"
              className="d-block w-100"
              alt="Pizza"
            />
            <div className="carousel-caption d-none d-md-block">
              <h1 className="fw-bold text-shadow">Delicious Pizza</h1>
              <p>Hot. Cheesy. Perfectly baked.</p>
                <Link as={Link} to="/ourMenu" className="btn btn-success btn-lg mt-2">
                           Order Now
                                </Link>

            </div>
          </div>

          <div className="carousel-item">
            <img
              src="https://i.ibb.co/Xtx43fT/Burger-Pizza-Veg-423-X420-Pixel1.png"
                   className="d-block w-100"
              alt="Burger"
            />
            <div className="carousel-caption d-none d-md-block">
              <h1 className="fw-bold text-shadow">Juicy Burgers</h1>
              <p>Grilled to perfection, made fresh just for you.</p>
                <Link as={Link} to="/ourMenu" className="btn btn-success btn-lg mt-2">
                           Order Now
                                </Link>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="https://i.ibb.co/mv8RFbk/White-Pasta-Veg.png"        
              className="d-block w-100"
              
              alt="Pasta"
            />
            <div className="carousel-caption d-none d-md-block">
              <h1 className="fw-bold text-shadow">Creamy Pasta</h1>
              <p>Rich sauces. Fresh herbs. Italian love.</p>
              <Link as={Link} to="/ourMenu" className="btn btn-success btn-lg mt-2">
                           Order Now
                                </Link>
            </div>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#foodCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#foodCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* ===== Rounded Items Section ===== */}
      <section className="py-5 bg-light" id="menu">
        <div className="container text-center">
          <h2 className="mb-4 fw-bold" data-aos="fade-down">Our Popular Dishes</h2>
          <div className="row justify-content-center">
            {[
              { img: "https://cdn.jflimages.co.in/nextgen-catalog/media/prod/Dominos/CategoriesV1/5ee24e9d-bfae-47c0-ad1e-5fb6bb79879e_cheeseburst.jpg?ver=V0.0.1", title: "Cheese Burst Pizza",link:"/pizza" },
              { img: "https://cdn.jflimages.co.in/nextgen-catalog/media/prod/Dominos/CategoriesV1/76ea3002-6964-4834-9d90-bb602184577c_garlicbread.jpg?ver=V0.0.1", title: "Garlic Bread",link:"/sideDish" },
              { img: "data:image/jpeg;base64,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", title: "White Sauce Pasta",link:"/sideDish" },
              { img: "https://s7d1.scene7.com/is/image/mcdonalds/DC_202411_6050_SmallFrenchFries_Standing_McValue_1564x1564:nutrition-calculator-tile", title: "Crispy Fries",link:"/othersItem" },
              { img: "https://cdn.jflimages.co.in/nextgen-catalog/media/prod/Dominos/HomeProductV1/5a1f3759-25ec-4b71-96e4-2150f6c44d09_HomeProductV1.jpg?ver=V0.0.1", title: "Desert",link:"/othersItem" },
            ].map((item, i) => (
              <div
                key={i}
                className="col-6 col-sm-4 col-md-3 mb-4"
                data-aos="zoom-in"
                data-aos-delay={i * 100}
              >
                <div className="food-item" >
                  <Link to={item.link}>
                  <img src={item.img} alt={item.title} />
                  <p>{item.title}</p>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Back to Top Button ===== */}
      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          ↑
        </button>
      )}
    </div>
  );
}

export default Home;
