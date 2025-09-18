import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav, Form, FormControl, InputGroup,FormSelect } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';


const ZomatoHeader =({ totalQty,getlocations })=>{
  
  return (
    <Navbar expand="lg"  fixed="top " variant="dark" 
          style={{
        backgroundColor:'#006491', 
        color: '#ffffff',
        height: '90px', // increase navbar height
        borderBottom: '2px solid #ccc', // optional border
      }}

    >
      <Container fluid>

        <Nav.Link as={Link} to="/FirstPage" className="navbar-brand fw-bold nav-viewer-header__menu-bg"> 🍕My Pizza's</Nav.Link>



        <Navbar.Toggle aria-controls="zomato-navbar" />


        <Navbar.Collapse id="zomato-navbar" className="justify-content-end pe-5">

        <Form className="d-flex flex-grow-1 mx-4 gap-2 align-items-center " >
      <InputGroup style={{ maxWidth: '200px' }}>
        <InputGroup.Text>📍</InputGroup.Text>
        <FormSelect>
          <option value="">Select location</option>
          {getlocations.map((loc, index) => (
            <option key={index} value={loc}>
              {loc}
            </option>
          ))}
        </FormSelect>
       
      </InputGroup>
    </Form>
    
                 <Nav className="ms-auto nav-item px-3 ">
            <Nav.Link  className="nav-link fs-5 text-white" as={Link} to="/OurMenu">
              OUR MENU
            </Nav.Link>
          </Nav>
          <Nav className="nav-link fs-5">
            <Nav.Link  className="nav-link fs-5 text-white" as={Link} to="/Contact">
              CONTACT
            </Nav.Link>
            </Nav>
          {/* Navigation Links 
          <Nav className="me-auto nav-item px-3">
             <Nav.Link className="nav-link fs-5" as={Link} to="/OurMenu">Our Menu</Nav.Link>
            <Nav.Link className="nav-link fs-5" as={Link} to="/pizza">Veg Pizza</Nav.Link>
            <Nav.Link  className="nav-link fs-5" as={Link} to="/nonveg">Non Veg Pizza</Nav.Link>
            <Nav.Link className="nav-link fs-5" as={Link} to="/sideDish">Side Dishes</Nav.Link>
            <Nav.Link className="nav-link fs-5" as={Link} to="/othersItem">Others Items</Nav.Link>
          </Nav>*/}

          {/* Sign In Button */}
          <Nav className="ms-auto">
            <Nav.Link  className="nav-link fs-5" as={Link} to="/Zomatologin">
              <i className="bi bi-person-fill me-2 text-white"></i>Sign In
            </Nav.Link>
          </Nav>
            
          
         <Nav.Link  as={Link} to="/CartPage" className="position-relative nav-link fs-5">
    <i className="bi bi-cart-fill me-1 fs-5"></i>
    Cart
    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
{ totalQty }
      <span className="visually-hidden">items in cart</span>
    </span>
  </Nav.Link>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default ZomatoHeader;
