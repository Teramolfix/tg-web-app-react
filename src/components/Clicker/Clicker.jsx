import React from 'react';
import './Clicker.css';

const Clicker = () => {
	let count = 0
	const onClickerClick = () => {
    count++;
		console.log(count);
  };

	return (
		<div className='clicker-div'>
			<button onClick={onClickerClick} className={'clicker-btn '}>
				Click on me!
			</button>
			<h1>{count}</h1>
		</div>
	);
};

export default Clicker;