import React from 'react';
import './Button.css';

const Button = (props) => {
	console.log(props);
	return (
		<button {...props} className={'button ' + props.className}/>
	);
};

export default Button;