import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you for contacting us!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center text-primary mb-4">Contact Us</h2>
      <div className="row">
        {/* Contact Form */}
        <div className="col-md-6">

          <form onSubmit={handleSubmit} className="shadow p-4 rounded bg-light mt-4">
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-control"
                rows="4"
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-100" onClick={handleSubmit}>
              Send Message
            </button>
          </form>
        </div>

        {/* Google Map */}
        <div className="col-md-6 mt-4">
          <h5>MyPizza's Customer Care Number</h5>
          <br /> <p>1800-208-1234</p>

          <h5>🍕My Pizza's Contact Address</h5>
          <p>My Pizza's India,<br />
            Tower-D, Plot No. 5,<br />
            5th Floor, Logix Techno Park,<br />
Sector 127, Noida - 201304, U.P.</p>


            
          <div className="shadow rounded overflow-hidden mt-5">
            <h5 className="text-center">Our Location</h5>
            <iframe
              title="MyPizzaApp's Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.009387485306!2d80.94278917543935!3d26.86294257667257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd0df63a5d85%3A0x6eabed1cd0a5371c!2sDomino's%20Pizza!5e0!3m2!1sen!2sin!4v1696151973776!5m2!1sen!2sin"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
