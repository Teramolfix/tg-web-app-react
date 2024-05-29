import React from 'react';

const Button = (props) => {
	console.log(props);
	return (
		<button {...props} className={'button ' + props.className}/>
	);
};

export default Button;