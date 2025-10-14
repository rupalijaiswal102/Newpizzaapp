import { Link } from "react-router-dom";
import {
  Container,
  Navbar,
  Nav,
  Form,
  InputGroup,
  FormSelect,
} from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./ZomatoHeader.css"; // Custom styling

const Navbar2 = ({ totalQty, getlocations }) => {
  return (
    <Navbar
      expand="lg"
      fixed="top"
      variant="dark"
      className="custom-navbar shadow-sm"
    >
<<<<<<< HEAD
      <Container fluid className="px-3 px-lg-5">
        {/* ===== Brand / Logo ===== */}
        <Navbar.Brand as={Link} to="/Home" className="fw-bold brand-title">
          🍕 My Pizza's
=======
      <Container fluid>
        <Navbar.Brand as={Link} to="/OurMenu" className="fw-bold">
          🍕My Pizza's
>>>>>>> d385d184dfc297be3e3137d3476b737cf2a3c131
        </Navbar.Brand>

        {/* ===== Hamburger toggle ===== */}
        <Navbar.Toggle
          aria-controls="zomato-navbar"
          className="border-0 shadow-none"
        >
          <i className="bi bi-list fs-2 text-white"></i>
        </Navbar.Toggle>

        {/* ===== Collapsible Section ===== */}
        <Navbar.Collapse id="zomato-navbar" className="animated-collapse">
          {/* ===== Location Dropdown ===== */}
          <Form className="d-flex align-items-center mt-3 mt-lg-0 mb-3 mb-lg-0 me-lg-4">
            <InputGroup style={{ maxWidth: "220px" }}>
              <InputGroup.Text>📍</InputGroup.Text>
              <FormSelect className="form-select-sm">
                <option value="">Select location</option>
                {getlocations.map((loc, index) => (
                  <option key={index} value={loc}>
                    {loc}
                  </option>
                ))}
              </FormSelect>
            </InputGroup>
          </Form>

          {/* ===== Center Nav Links ===== */}
          <Nav className="mx-auto text-center nav-links">
            {[
              { to: "/OurMenu", label: "OUR MENU" },
              { to: "/Contact", label: "CONTACT" },
              { to: "/pizza", label: "Veg Pizza" },
              { to: "/nonveg", label: "Non Veg Pizza" },
              { to: "/sideDish", label: "Side Dishes" },
              { to: "/othersItem", label: "Other Items" },
            ].map((link, index) => (
              <Nav.Link
                key={index}
                as={Link}
                to={link.to}
                className="text-white fs-6 fw-semibold px-3 nav-item-link"
              >
                {link.label}
              </Nav.Link>
            ))}
          </Nav>

          {/* ===== Right-side: Sign-in + Cart ===== */}
          <Nav className="ms-auto d-flex align-items-center justify-content-center gap-3 mt-3 mt-lg-0">
            {/* Sign In */}
            <Nav.Link
              as={Link}
              to="/Zomatologin"
              className="text-white fw-semibold d-flex align-items-center"
            >
              <i className="bi bi-person-circle fs-5 me-2"></i>
              Sign In
            </Nav.Link>

            {/* Cart */}
            <Nav.Link
              as={Link}
              to="/CartPage"
              className="position-relative text-white fw-semibold d-flex align-items-center"
            >
              <i className="bi bi-cart-fill fs-5 me-2"></i>
              Cart
              <span className="cart-badge badge rounded-pill bg-danger">
                {totalQty}
              </span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbar2;
