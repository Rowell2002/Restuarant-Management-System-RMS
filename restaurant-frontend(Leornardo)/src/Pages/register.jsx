



import React, { useState } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';

const Register = ({ onToggleForm }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contact: '',
    address: '',
    username: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const user = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      contactNumber: formData.contact,
      address: formData.address,
      username: formData.username,
      password: formData.password,
      role: 'USER' // Assuming 'USER' role for registration
    };

    try {
      const response = await fetch('http://localhost:8081/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        throw new Error('Registration failed: ' + response.statusText);
      }

      const result = await response.json();
      console.log('Registration successful:', result);
      navigate('/login');
    } catch (error) {
      console.error('Error:', error);
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <div className="register-page">
      <div className="register-box">
        <h1>Register to Leornado</h1>
        <h2>CUSTOMER REGISTRATION</h2>
        <form id="register-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-column">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                placeholder="Type Your First Name"
                required
                value={formData.firstName}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-column">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                placeholder="Type Your Last Name"
                required
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-column">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Type Your Email"
                required
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-column">
              <label htmlFor="contact">Contact Number</label>
              <input
                type="text"
                id="contact"
                placeholder="Type Your Contact Number"
                required
                value={formData.contact}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-column">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                placeholder="Type Your Address"
                required
                value={formData.address}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-column">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                placeholder="Choose a Username"
                required
                value={formData.username}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-column">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Choose a Password"
                required
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-column">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm Your Password"
                required
                value={formData.confirmPassword}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <input type="submit" value="REGISTER" />
        </form>
        <div className="links">
          <button type="button" onClick={() => navigate('/login')}>
            Already have an account? Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
