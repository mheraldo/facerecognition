import React from 'react';
import Tilt from 'react-parallax-tilt';
import robot from './robot.png';
import './Logo.css';

const Logo = () => {
	return(
		<div className='FrontLogo'>
			<Tilt className='Tilt'>
		      <div>
		        <img className='TiltItem' alt='logo' src={robot} />
		      </div>
		    </Tilt>
		</div>
	)
}

export default Logo;