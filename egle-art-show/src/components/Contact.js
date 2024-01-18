import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('http://localhost:3001/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Email sent successfully');
        setFormData({ name: '', email: '', message: '' });
        setError('');
        setSuccess(true); // Set success state to true
      } else {
        console.error('Error sending email');
        setError('There was an error sending your message. Please try again.');
        setSuccess(false);
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setError('There was an unexpected error. Please try again later.');
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="carousel-container">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="/pics/pic12.jpg" alt="Background" />
        </Carousel.Item>
      </Carousel>

      {/* Contact Form */}
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <div>
            <h4>CONTACT US</h4>
          </div>
          <input
            type="text"
            placeholder="NAME"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="EMAIL"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            placeholder="MESSAGE"
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit" disabled={loading}>
            {loading ? 'Submitting...' : 'Submit'}
          </button>
          {error && <div className="error-message">{error}</div>}
          {success && <div className="success-message">Email sent successfully!</div>}
        </form>
      </div>
    </div>
  );
};

export default Contact;

