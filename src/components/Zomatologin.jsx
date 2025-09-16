import React, { useState } from 'react';
import ZomatoHome from "./ZomatoHome";
import "./Login.css";
import { Container, Form, Button, Card, Row, Col } from 'react-bootstrap';

const Zomatologin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login attempted:', { email, password });
    // Add your login logic here (API call, validation, etc.)
  };
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!/^[6-9]\d{9}$/.test(phone)) {
      alert("Please enter a valid 10-digit Indian phone number");
    } else {
      console.log('Login attempted:', { phone });
      alert("Login successful");
      <ZomatoHome/>
    
      // Add your login logic here (API call, validation, etc.)
    }
  };

  return (
    <div className="login-container d-flex">
      
      {/* Left side with background image or video */}
 <div className="login-left d-none d-md-flex">
        <div className="overlay-text">
          <h1>Welcome to Zomato</h1>
          <p>Discover the best food near you</p>
        </div>
      </div>

      {/* Right side with login card */}
      <div className="login-right d-flex align-items-center justify-content-center">
        <div className="card p-4 shadow-lg" style={{ width: "350px" }}>

                 <h3 className="text-center text-primary mb-4">🍕Login Here</h3>

          <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-bold">Phone Number</label>
            <input
              type="tel"
              className="form-control"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              maxLength="10"
            />
          </div>
          <button type="submit" className="btn btn-primary w-100" onClick={handleSubmit}>
            Login
          </button>
        </form>
        <p className="mt-3 text-center text-muted" style={{ fontSize: "14px" }}>
          By continuing, you agree to Domino's Terms of Service & Privacy Policy.
        </p>

        </div>
      </div>
    </div>

  );
};

export default Zomatologin;
