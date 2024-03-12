import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header/Header';

const MainPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/chat');
  };
  return (
	<><Header/></>
  );
};

export default MainPage;