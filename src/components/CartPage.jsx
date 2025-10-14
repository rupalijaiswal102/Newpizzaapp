import React, { Component } from "react";
import { Container, Row, Col, Button, Card, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import CountUp from "react-countup"; // Install with: npm i react-countup

class Pizza extends Component {
  state = {
    data: this.props.data,
    animate: false,
  };

  componentDidMount() {
    // Trigger animation on mount
    this.setState({ animate: true });
  }

  handelChange = (e) => {
    const { currentTarget: input } = e;
    let s1 = { ...this.state };
    s1.data[input.name] = input.value;
    this.setState(s1);
  };

  add = (id) => this.props.onAdd(id);
  sub = (id) => this.props.onSub(id);

  render() {
    const { cart } = this.props;
    const { animate } = this.state;
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

    return (
      <Container className="my-5" >
        {/* Page Heading */}
        <h2 className="text-center  text-danger fw-bold animate__animated animate__fadeInDown " style={{marginTop:"100px"}}>
          🍕 Your Pizza Cart 🍕
        </h2>
        <Row className="g-4">
          {/* Cart Items */}
          <Col xs={12} md={7}>
            {cart.length === 0 ? (
              <Card className="p-3 text-center shadow-sm">
                <h4>Your cart is empty!</h4>
                <Link to="/ourmenu" className="btn btn-danger mt-3">
                  Browse Menu
                </Link>
              </Card>
            ) : (
              cart.map((item, index) => (
                <Card
                  key={item.id}
                  className={`mb-3 shadow-sm p-3 pizza-card d-flex flex-column flex-md-row justify-content-between align-items-center ${
                    animate ? "slide-in" : ""
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Pizza Info */}
                  <div className="d-flex align-items-center mb-2 mb-md-0">
                    <img
                      src={
                        item.img ||
                        item.image}           
                      alt={item.name}
                      className="me-3 rounded-circle pizza-thumb"
                    />
                    <div>
                      <h5 className="mb-1 fw-bold text-dark">{item.name}</h5>
                      {item.type === "Pizza" && (
                        <div className="d-flex flex-wrap gap-2">
                          <Badge bg="warning" text="dark" className="pop-badge">
                            {item.size} Size
                          </Badge>
                          <Badge bg="info" text="dark" className="pop-badge">
                            {item.crust} Crust
                          </Badge>
                          {item.toppings && (
                            <Badge bg="success" className="pop-badge">
                              {item.toppings.join(", ")}
                            </Badge>
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Quantity and Price */}
                  <div className="d-flex align-items-center mt-2 mt-md-0">
                    <Button
                      size="sm"
                      variant="outline-danger"
                      onClick={() => this.sub(item.id)}
                    >
                      -
                    </Button>
                    <span className="mx-2 fw-bold">{item.qty}</span>
                    <Button
                      size="sm"
                      variant="outline-success"
                      onClick={() => this.add(item.id)}
                    >
                      +
                    </Button>
                    <span className="ms-3 fw-bold text-danger">
                      ₹{item.price * item.qty}
                    </span>
                  </div>
                </Card>
              ))
            )}
            {cart.length > 0 && (
              <div className="text-center mt-4">
                <Link to="/ourmenu" className="btn btn-outline-danger">
                  + Add More Pizzas
                </Link>
              </div>
            )}
          </Col>

          {/* Bill Details */}
          <Col xs={12} md={5}>
            <Card className="p-0 shadow-sm border-danger">
              {/* Amazing Banner */}
              <div
                className="bill-banner text-center text-white d-flex flex-column justify-content-center align-items-center"
                style={{
                  background:
                    "linear-gradient(135deg, #ff4d4f 0%, #ff7a45 100%)",
                  height: "180px",
                  borderTopLeftRadius: "0.25rem",
                  borderTopRightRadius: "0.25rem",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                }}
              >
                <h3 className="fw-bold mb-2">💰 Bill Summary</h3>
                <p className="mb-0">Review your order before checkout</p>
              </div>

              <Card.Body>
                <div className="d-flex justify-content-between mb-2">
                  <span>Item Total</span>
                  <span>
                    <CountUp end={totalPrice} duration={1.5} prefix="₹" />
                  </span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>Taxes & Charges</span>
                  <span>₹0</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>Delivery Charges</span>
                  <span>₹0</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between fw-bold fs-5 text-danger">
                  <span>Grand Total</span>
                  <span>
                    <CountUp end={totalPrice} duration={2} prefix="₹" />
                  </span>
                </div>
                <Button variant="danger" className="w-100 mt-3">
                  Checkout Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Animations */}
        <style jsx="true">{`
          .pizza-card {
            opacity: 0;
            transform: translateX(-50px);
            animation: slideIn 0.5s forwards;
          }
          .slide-in {
            opacity: 1;
            transform: translateX(0);
          }
          @keyframes slideIn {
            0% {
              opacity: 0;
              transform: translateX(-50px);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }
          .pop-badge {
            animation: pop 0.3s ease;
          }
          @keyframes pop {
            0% {
              transform: scale(0.8);
            }
            100% {
              transform: scale(1);
            }
          }
          .pizza-thumb {
            width: 70px;
            height: 70px;
            object-fit: cover;
            border: 2px solid #ff4d4f;
          }
          @media (max-width: 768px) {
            .pizza-card {
              flex-direction: column !important;
              text-align: center;
            }
            .pizza-card .d-flex {
              justify-content: center !important;
            }
          }
        `}</style>
      </Container>
    );
  }
}

export default Pizza;
