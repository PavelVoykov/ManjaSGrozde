import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import "./ErrStyle.css";

const Err = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/');
  };
  useEffect(() => {
        const preventScroll = (e) => {
            e.preventDefault();
        };

        // Add event listener
        document.addEventListener('wheel', preventScroll, { passive: false });

        // Cleanup function to remove the event listener when the component unmounts
        return () => {
            document.removeEventListener('wheel', preventScroll);
        };
    }, []);
	return (
		<>
			<div className='Lights'>
				<div className='ErrorBG'>
				
					<div className="ErrorMSGBox">
						<link href="https://fonts.googleapis.com/css2?family=Zeyada&display=swap" rel="stylesheet"></link>
						<link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Zeyada&display=swap" rel="stylesheet"></link>
						<h1>404 - Page Not Found</h1>
						<p>Ah, adventurer, it seems you've stumbled upon a place that doesn't exist. The dungeon master has not yet carved this path into the fabric of the digital realm.</p>
						<p>Perhaps you've taken a wrong turn in the labyrinth of the web. Let's try to find our way back to the safety of the known.</p>
						<br></br>
						<p><a onClick={handleSubmit}>Return to the safety of the homepage</a></p>	
					</div>
					
				</div>
			</div>
		</>
	);
};

export default Err;