import {BrowserView, MobileView} from 'react-device-detect';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Style.css"
import BrowserMenu from './components/BrowserMenu';

const Header = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/chat');
  };
  return (
	<BrowserMenu/>
  );
};

export default Header;