// src/components/Register.tsx
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock, faSignature } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import './Register.css';
import { SERVER_URL } from './configs/Config';
import { Link } from 'react-router-dom';

interface RegisterFormState {
  username: string;
  password: string;
  email: string;
  displayName: string;
}

const Register: React.FC = () => {
  const [formState, setFormState] = useState<RegisterFormState>({
    username: '',
    password: '',
    email: '',
    displayName: '',
  });

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    try {
      const response = await axios.post(`${SERVER_URL}/users/register`, formState);
      setSuccessMessage('Registration successful!');
      console.log('Registration successful', response.data);
    } catch (error) { 
      if (axios.isAxiosError(error) && error.response) {
        setErrorMessage(error.response.data.message || 'Registration failed.');
      } else {
        setErrorMessage('An unknown error occurred.');
      }
      console.error('Registration failed', error);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="register-form">
        <div className="input-group">
          <FontAwesomeIcon icon={faUser} className="icon" />
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formState.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <FontAwesomeIcon icon={faSignature} className="icon" />
          <input
            type="text"
            name="displayName"
            placeholder="Display Name"
            value={formState.displayName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formState.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <FontAwesomeIcon icon={faLock} className="icon" />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formState.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Register</button>

        {/* Display success or error messages */}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
        <p className="login-link">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
