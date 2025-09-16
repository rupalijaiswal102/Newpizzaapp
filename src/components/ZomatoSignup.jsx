import React, { useState } from 'react';
import { Container, Form, Button, Card, Row, Col } from 'react-bootstrap';

const ZomatoSignup = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    password: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign Up Data:', form);
    // Add your sign-up logic here
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <Card className="p-4 shadow-sm" style={{ width: '100%', maxWidth: '450px' }}>
        <h3 className="text-center text-danger mb-4">Create your Zomato Account</h3>

        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName" className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formEmail" className="mb-3">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formPhone" className="mb-3">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Enter your phone number"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formPassword" className="mb-4">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Create a password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Button type="submit" variant="danger" className="w-100">
            Sign Up
          </Button>
        </Form>

        <div className="text-center mt-3">
          <small>
            Already have an account? <a href="#">Log in</a>
          </small>
        </div>

        <div className="text-center my-3 text-muted">or</div>

        <Row className="gap-2">
          <Col>
            <Button variant="outline-primary" className="w-100">
              Sign Up with Facebook
            </Button>
          </Col>
          <Col>
            <Button variant="outline-dark" className="w-100">
              Sign Up with Google
            </Button>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default ZomatoSignup;
