import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
	return(
		<div>
			<p>
				This will detect faces
			</p>
			<div className='center'>
				<div className='form center InputContainer'>
					<input className='ImageInputBox' type='text' onChange={onInputChange}/>
					<button className='ImageButton grow link' onClick={onButtonSubmit}>DETECT</button>
				</div>
			</div>
		</div>
	)
}

export default ImageLinkForm;