import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserLogout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logoutUser = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/captains/logout`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        if (response.status === 200 || response.status === 201) {
          localStorage.removeItem('token');
          navigate('/captain-login');
        }
      } catch (error) {
        console.error('Logout failed:', error);
        // Even if logout fails, remove token and redirect
        localStorage.removeItem('token');
        navigate('/captain-login');
      }
    };

    logoutUser();
  }, [navigate]);

  return <div>Logging out...</div>;
};

export default UserLogout;
