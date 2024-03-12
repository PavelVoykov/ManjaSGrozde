import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import "./SecretStyle.css";

const SS = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/');
  };
	return (
		<>
			<div className='Secret'>
				<div className='ErrorBG'>
				
					<div className="ErrorMSGBox">
						<link href="https://fonts.googleapis.com/css2?family=Zeyada&display=swap" rel="stylesheet"></link>
						<link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Zeyada&display=swap" rel="stylesheet"></link>
						<h1 onClick={handleSubmit}>NIG</h1>
						<h1 onClick={handleSubmit}>GER 8===D</h1>
					</div>
					
				</div>
			</div>
		</>
	);
};

export default SS;