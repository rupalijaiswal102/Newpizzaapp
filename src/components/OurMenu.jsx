import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./OurMenu.css"; // Custom styling

class OurMenu extends Component {
  render() {
    // ✅ Prevent crash if props are missing
    const { sampleMenu = [] } = this.props;

    return (
      <div className="container-fluid mt-5 rounded p-4">
        <h2 className="text-center text-danger fw-bold mb-5 mt-5">
          🍕 Our Menu
        </h2>

        <div className="row justify-content-center">
          {sampleMenu.length > 0 ? (
            sampleMenu.map((item) => (
              <div
                className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex align-items-stretch"
                key={item.id}
              >
                <div
                  className="menu-card shadow-lg position-relative w-100"
                  style={{
                    backgroundImage:
                      "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6NyVMh2hXhL4xlzJILG0IgIH5KCjYBluQwg&s)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "15px",
                    overflow: "hidden",
                  }}
                >
                  {/* Overlay */}
                  <div className="menu-overlay"></div>

                  <div className="menu-content text-center p-3 position-relative">
                    <h4 className="text-white fw-bold mb-2">
                      {item.category}
                    </h4>

                    <img
                      src={item.image}
                      alt={item.name}
                      className="img-fluid rounded menu-img"
                      style={{
                        height: "200px",
                        width: "100%",
                        objectFit: "cover",
                        borderRadius: "10px",
                      }}
                    />

                    <p className="text-light small mt-3">{item.desc}</p>

                    <Link
                      to={item.link}
                      className="btn btn-light w-75 mt-3 text-danger fw-bold"
                    >
                      View All
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-muted fs-5">
              No menu items available 🍽️
            </p>
          )}
        </div>
      </div>
    );
  }
}

export default OurMenu;
