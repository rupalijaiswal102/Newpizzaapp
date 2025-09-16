import React, {Component} from "react";
import { Container, Navbar, Nav, Form, FormControl, InputGroup,FormSelect } from 'react-bootstrap';

import { Link } from "react-router-dom";


class Footer extends Component{
    render(){
         return(

<footer className="text-center text-lg-start bg-body-tertiary text-muted">

  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

    <div className="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
    
    <div>
      <a href="#" className="me-4 text-reset">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="#" className="me-4 text-reset">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="#" className="me-4 text-reset">
        <i className="fab fa-google"></i>
      </a>
      <a href="#" className="me-4 text-reset">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="#" className="me-4 text-reset">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="#" className="me-4 text-reset">
        <i className="fab fa-github"></i>
      </a>
    </div>
    
  </section>

  <section>
    <div className="container text-center text-md-start mt-5">
      
      <div className="row mt-3">
        
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          
          <h6 className="text-uppercase fw-bold mb-4">
             <i className="fas fa-pizza-slice"></i> Pizza Slice
  <i className="bi bi-cart"></i> Cart
  <i className="fas fa-utensils"></i> Order

          </h6>
          <p>
            Order your favorite pizzas, customize toppings and crusts, and get them delivered hot and fresh—fast and easy
          </p>
        </div>

        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          
          <h6 className="text-uppercase fw-bold mb-4" style={{ color: '#080808ff', textDecoration: 'none', fontWeight: 'bold' }}>
            Products
          </h6>
          <p>
            <Link className="w3-bar-item w3-button" as={Link} to="/pizza" style={{ color: '#080808ff', textDecoration: 'none', fontWeight: 'bold' }}>Veg Pizza</Link>
        
          </p>
          <p>
            <Link className="w3-bar-item w3-button" as={Link} to="/nonveg" style={{ color: '#080808ff', textDecoration: 'none', fontWeight: 'bold' }}>Non Veg Pizza</Link>
          </p>
          <p>
            <Link className="w3-bar-item w3-button" as={Link} to="/sideDish" style={{ color: '#080808ff', textDecoration: 'none', fontWeight: 'bold' }}>Side Dishes</Link>
          </p>
          <p>
            <Link className="w3-bar-item w3-button" as={Link} to="/othersItem" style={{ color: '#080808ff', textDecoration: 'none', fontWeight: 'bold' }}>Other Items</Link>
          </p>
        </div>

        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          
          <h6 className="text-uppercase fw-bold mb-4" style={{ color: '#080808ff', textDecoration: 'none', fontWeight: 'bold' }}>
            Useful links
          </h6>
          
          <p>
            <Nav.Link className="w3-bar-item w3-button" as={Link} to="/settings" style={{ color: '#080808ff', textDecoration: 'none', fontWeight: 'bold' }}>Settings</Nav.Link>
          </p>
          <p>
           <Nav.Link className="w3-bar-item w3-button" as={Link} to="/ourMenu" style={{ color: '#080808ff', textDecoration: 'none', fontWeight: 'bold' }}>Orders</Nav.Link>
          </p>
          <p>
            <Nav.Link className="w3-bar-item w3-button" as={Link} to="/Contact" style={{ color: '#080808ff', textDecoration: 'none', fontWeight: 'bold' }}>Help</Nav.Link>
          </p>
        </div>

        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i className="fas fa-home me-3"></i> New Delhi, India</p>
          <p>
            <i className="fas fa-envelope me-3"></i>
            info@mypizzaapp.com
          </p>
          <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
        </div>

      </div>
    </div>
  </section>

</footer>

 )
}}
export default Footer