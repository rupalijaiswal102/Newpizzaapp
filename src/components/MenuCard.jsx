import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MenuCard.css";

class MenuCard extends Component {
  render() {
    const { title, items, cart, filterTypes, onAdd, onSub, onAddToCart } = this.props;

    return (
      <div className="container mt-5 p-3 p-md-5">
        <h2 className="text-center text-danger fw-bold mb-4 mb-md-5">
          {title}
        </h2>

        <div className="row justify-content-center">
          {items
            .filter((item) => filterTypes.includes(item.type))
            .map((d1, index) => (
              <div
                className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
                key={d1.id}
              >
                <div
                  className="text-center border rounded-4 p-3 shadow-sm h-100 d-flex flex-column justify-content-between menu-card"
                  style={{
                    transition: "transform 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.03)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                >
                  <img
                    width="100%"
                    height="200"
                    className="rounded-3 mb-3"
                    style={{
                      objectFit: "cover",
                      border: "2px solid white",
                    }}
                    src={d1.image}
                    alt={d1.name}
                  />

                  <div>
                    <h5 className="fw-bold">{d1.name}</h5>
                    <p
                      className="small menu-desc"
                      style={{ minHeight: "50px" }}
                    >
                      {d1.desc}
                    </p>
                    <h6 className="fw-semibold mb-3">Price: ₹{d1.price}</h6>
                  </div>

                  {cart.find((c1) => c1.id === d1.id && c1.qty >= 1) ? (
                    <div className="d-flex justify-content-center align-items-center gap-2 mt-2">
                      <button
                        className="btn btn-light btn-sm rounded-circle fw-bold"
                        onClick={() => onSub(d1.id)}
                      >
                        −
                      </button>
                      <button className="btn btn-secondary btn-sm fw-bold">
                        {cart.find((c1) => c1.id === d1.id)?.qty || 1}
                      </button>
                      <button
                        className="btn btn-success btn-sm rounded-circle fw-bold"
                        onClick={() => onAdd(d1.id)}
                      >
                        +
                      </button>
                    </div>
                  ) : (
                    <button
                      className="btn btn-light text-danger fw-semibold mt-3"
                      onClick={() => onAddToCart(index)}
                    >
                      ORDER NOW
                    </button>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default MenuCard;
