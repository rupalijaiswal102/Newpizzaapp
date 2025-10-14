import React, { Component } from "react";
import { Container, Row, Col, Nav, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <footer className="premium-footer text-light pt-5 position-relative overflow-hidden">
        {/* Particle / Toppings Background */}
        <div className="particle-bg">
          <span className="topping pizza"></span>
          <span className="topping olive"></span>
          <span className="topping cheese"></span>
          <span className="topping pepper"></span>
        </div>

        {/* Social Section */}
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom bg-dark bg-opacity-80">
          <div className="me-5 d-none d-lg-block">
            <span>Connect with us on social networks:</span>
          </div>

          <div>
            {["facebook", "twitter", "google", "instagram", "linkedin", "github"].map(
              (icon) => (
                <a
                  key={icon}
                  href="#"
                  className={`me-3 social-icon fab fa-${icon}`}
                />
              )
            )}
          </div>
        </section>

        {/* Main Content */}
        <section className="bg-gradient p-5 rounded-4 mt-3 shadow-lg">
          <Container>
            <Row className="g-4">
              {/* About */}
              <Col xs={12} md={4}>
                <h6 className="text-uppercase fw-bold mb-3">
                  <i className="fas fa-pizza-slice pizza-icon me-2"></i>Pizza Slice
                </h6>
                <p className="text-white-50">
                  Order your favorite pizzas, customize toppings and crusts,
                  and get them delivered hot and fresh—fast and easy.
                </p>
              </Col>

              {/* Products */}
              <Col xs={12} md={2}>
                <h6 className="text-uppercase fw-bold mb-3">Products</h6>
                <Nav className="flex-column">
                  <Nav.Link as={Link} to="/pizza" className="footer-link">
                    Veg Pizza <Badge bg="warning">Hot</Badge>
                  </Nav.Link>
                  <Nav.Link as={Link} to="/nonveg" className="footer-link">
                    Non Veg Pizza <Badge bg="danger">Spicy</Badge>
                  </Nav.Link>
                  <Nav.Link as={Link} to="/sideDish" className="footer-link">
                    Side Dishes <Badge bg="info">New</Badge>
                  </Nav.Link>
                  <Nav.Link as={Link} to="/othersItem" className="footer-link">
                    Other Items <Badge bg="success">Top</Badge>
                  </Nav.Link>
                </Nav>
              </Col>

              {/* Useful Links */}
              <Col xs={12} md={3}>
                <h6 className="text-uppercase fw-bold mb-3">Useful Links</h6>
                <Nav className="flex-column">
                  <Nav.Link as={Link} to="/settings" className="footer-link">
                    Settings
                  </Nav.Link>
                  <Nav.Link as={Link} to="/ourMenu" className="footer-link">
                    Orders
                  </Nav.Link>
                  <Nav.Link as={Link} to="/Contact" className="footer-link">
                    Help
                  </Nav.Link>
                </Nav>
              </Col>

              {/* Contact */}
              <Col xs={12} md={3}>
                <h6 className="text-uppercase fw-bold mb-3">Contact</h6>
                <p>
                  <i className="fas fa-home me-2"></i>New Delhi, India
                </p>
                <p>
                  <i className="fas fa-envelope me-2"></i>
                  info@mypizzaapp.com
                </p>
                <p>
                  <i className="fas fa-phone me-2"></i> +01 234 567 88
                </p>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Bottom */}
        <div className="text-center p-3 bg-dark bg-opacity-80 mt-3 rounded-3">
          © 2025 Pizza Slice. All rights reserved.
        </div>

        {/* Custom CSS */}
        <style jsx="true">{`
          .premium-footer {
            background-color: #111;
          }

          .bg-gradient {
            background: linear-gradient(135deg, #ff4d4f 0%, #ff7a45 100%);
          }

          .footer-link {
            color: #fff;
            text-decoration: none;
            margin-bottom: 0.5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            transition: 0.3s;
          }

          .footer-link:hover {
            color: #ffdd57;
            text-decoration: underline;
          }

          .pizza-icon {
            transition: 0.3s;
          }
          .pizza-icon:hover {
            transform: rotate(-20deg) rotateY(15deg);
          }

          .social-icon {
            color: #fff;
            font-size: 1.3rem;
            margin-right: 10px;
            transition: 0.3s;
          }

          .social-icon:hover {
            color: #ffdd57;
            transform: scale(1.3) rotate(10deg);
          }

          /* Particle / topping effects */
          .particle-bg {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            pointer-events: none;
            overflow: hidden;
            z-index: 0;
          }
          .particle-bg .topping {
            position: absolute;
            width: 20px;
            height: 20px;
            background-size: cover;
            opacity: 0.3;
            animation: float 10s linear infinite;
          }
          .particle-bg .pizza {
            background-image: url('https://cdn-icons-png.flaticon.com/512/809/809019.png');
            top: 10%;
            left: 5%;
          }
          .particle-bg .olive {
            background-image: url('https://cdn-icons-png.flaticon.com/512/3080/3080912.png');
            top: 30%;
            left: 80%;
          }
          .particle-bg .cheese {
            background-image: url('https://cdn-icons-png.flaticon.com/512/135/135621.png');
            top: 70%;
            left: 40%;
          }
          .particle-bg .pepper {
            background-image: url('https://cdn-icons-png.flaticon.com/512/125/125022.png');
            top: 50%;
            left: 20%;
          }

          @keyframes float {
            0% {
              transform: translateY(0) rotate(0deg);
            }
            50% {
              transform: translateY(-20px) rotate(180deg);
            }
            100% {
              transform: translateY(0) rotate(360deg);
            }
          }

          @media (max-width: 768px) {
            .bg-gradient {
              padding: 2rem !important;
            }
            .footer-link {
              font-size: 0.9rem;
              flex-direction: column;
              align-items: flex-start;
            }
          }
        `}</style>
      </footer>
    );
  }
}

export default Footer;
