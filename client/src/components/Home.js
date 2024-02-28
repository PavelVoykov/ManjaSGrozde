import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/chat');
  };
  return (
    <form onSubmit={handleSubmit}>
      <button>SIGN IN</button>
    </form>
  );
};

export default Home;