import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import "../Style.css"

const BrowserMenu = () => {
  const navigate = useNavigate();
  const menuOptions = [
	{
		name: "About",
		path: "/about"
	},
	{
		name: "Home",
		path: "/"
	},
	{
		name: "My Profile",
		path: "/register"
	},
	{
		name: "Friends",
		path: "/frieinds"
	}
	
  ];
  const handleSubmit = (e) => {
	console.log(e.target.value);
    e.preventDefault();
    navigate(e.target.value);
  };
	
return (
	<div className="navBar">
		<div className='navBarLeftSide'>
			<Link to="/chat"><img className="logo" src="https://images.emojiterra.com/google/noto-emoji/unicode-15/color/512px/1f347.png"></img>
			</Link>
		</div>
		<div className='navBarRightSide'>
				{menuOptions.map((option, index) => ( 
					<button className='navBarBtn' key={index} onClick={handleSubmit} value={option.path}>
						{option.name}
					</button>
				))}
		</div>
		
	</div>
  );
};

export default BrowserMenu;