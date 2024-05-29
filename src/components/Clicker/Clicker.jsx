import React from 'react';

const Clicker = (props) => {
	console.log(props);
	return (
		<button {...props} className={'clicker-btn ' + props.className}>
			Click on me!
		</button>
	);
};

export default Clicker;