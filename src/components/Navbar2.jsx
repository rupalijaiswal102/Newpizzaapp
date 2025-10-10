import { Link } from "react-router-dom";
import { Container, Navbar, Nav, Form, InputGroup, FormSelect } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './ZomatoHeader.css'; // We'll add animation CSS here

const Navbar2 = ({ totalQty, getlocations }) => {
  return (
    <Navbar expand="lg" fixed="top" variant="dark"
      style={{
        backgroundColor: '#006491',
        color: '#ffffff',
        height: '90px',
        borderBottom: '2px solid #ccc',
      }}
    >
      <Container fluid>
        <Navbar.Brand as={Link} to="/OurMenu" className="fw-bold">
          🍕My Pizza's
        </Navbar.Brand>

        {/* Hamburger toggle */}
        <Navbar.Toggle aria-controls="zomato-navbar" />

        <Navbar.Collapse id="zomato-navbar" className="animated-collapse">
          {/* Left-side items: location selector */}
          <Form className="d-flex flex-grow-1 mb-2 mb-lg-0">
            <InputGroup style={{ maxWidth: '200px' }}>
              <InputGroup.Text>📍</InputGroup.Text>
              <FormSelect>
                <option value="">Select location</option>
                {getlocations.map((loc, index) => (
                  <option key={index} value={loc}>{loc}</option>
                ))}
              </FormSelect>
            </InputGroup>
          </Form>

          {/* Center nav links */}
          <Nav className="mx-auto flex-column flex-lg-row text-center">
            <Nav.Link as={Link} to="/OurMenu" className="text-white fs-5 px-2">OUR MENU</Nav.Link>
            <Nav.Link as={Link} to="/Contact" className="text-white fs-5 px-2">CONTACT</Nav.Link>
            <Nav.Link as={Link} to="/pizza" className="text-white fs-5 px-2">Veg Pizza</Nav.Link>
            <Nav.Link as={Link} to="/nonveg" className="text-white fs-5 px-2">Non Veg Pizza</Nav.Link>
            <Nav.Link as={Link} to="/sideDish" className="text-white fs-5 px-2">Side Dishes</Nav.Link>
            <Nav.Link as={Link} to="/othersItem" className="text-white fs-5 px-2">Other Items</Nav.Link>
          </Nav>

          {/* Right-side items: Sign-in and Cart */}
          <Nav className="ms-auto flex-column flex-lg-row align-items-center mt-2 mt-lg-0 text-center">
            <Nav.Link as={Link} to="/Zomatologin" className="text-white fs-5 px-2">
              <i className="bi bi-person-fill me-2"></i>Sign In
            </Nav.Link>

            <Nav.Link as={Link} to="/CartPage" className="position-relative text-white fs-4 px-1">
              <i className="bi bi-cart-fill me-1"></i>Cart
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {totalQty}
                <span className="visually-hidden">items in cart</span>
              </span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbar2;
