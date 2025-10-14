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
              { img: "https://cdn.jflimages.co.in/nextgen-catalog/media/prod/Dominos/CategoriesV1/76ea3002-6964-4834-9d90-bb602184577c_garlicbread.jpg?ver=V0.0.1", title: "Garlic Bread",link:"/othersItem" },
              { img: "https://cdn.jflimages.co.in/nextgen-catalog/media/prod/Dominos/CategoriesV1/23bced69-47ec-48ea-89d7-1b5a68d29bb6_VegPizza.png?ver=V0.0.1", title: "White Sauce Pasta",link:"/othersItem" },
              { img: "https://s7d1.scene7.com/is/image/mcdonalds/DC_202411_6050_SmallFrenchFries_Standing_McValue_1564x1564:nutrition-calculator-tile", title: "Crispy Fries",link:"/othersItem" },
              { img: "https://cdn.jflimages.co.in/nextgen-catalog/media/prod/Dominos/HomeProductV1/5a1f3759-25ec-4b71-96e4-2150f6c44d09_HomeProductV1.jpg?ver=V0.0.1", title: "Desert",link:"/sideDish" },
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
