// src/components/ActivateAccount.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useLocation } from 'react-router-dom';
import { SERVER_URL } from './configs/Config';
import './ActivateAccount.css';

const ActivateAccount: React.FC = () => {
  const { username } = useParams<{ username: string }>();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get('token');

  const [message, setMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  useEffect(() => {
    const activateAccount = async () => {
      if (!token) {
        setMessage('Token is missing.');
        setIsSuccess(false);
        return;
      }

      try {
        const response = await axios.post(`${SERVER_URL}/users/${username}/activate?token=${token}`);
        setMessage(response.data.message || 'Account activated successfully!');
        setIsSuccess(true);
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          setMessage(error.response.data.message || 'Activation failed.');
        } else {
          setMessage('An unknown error occurred.');
        }
        setIsSuccess(false);
      }
    };

    activateAccount();
  }, [username, token]);

  return (
    <div className="activate-account-container">
      <h2>Activate Account</h2>
      {message && (
        <p className={isSuccess === true ? 'success-message' : 'error-message'}>
          {message}
        </p>
      )}
    </div>
  );
};

export default ActivateAccount;
