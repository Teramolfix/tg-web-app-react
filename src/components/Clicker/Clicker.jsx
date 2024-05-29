import React, { useState } from 'react';

const Clicker = () => {
	const [count, setCount] = useState(0);

	return (
		<div className='flex flex-col justify-center items-center'>
			<div className='w-[200px] h-[200px] bg-gradient-to-b from-[#585ffa] via-[#262e4b] to-[#1c2025] my-[5vh] mx-auto p-[10px] rounded-full'>
				<button onClick={() => setCount(count + 1)} className={'w-full h-full rounded-full bg-indigo-400  hover:bg-indigo-700 text-sm text-slate-100 clicker-btn transition duration-300 ease-in-out'}>
					Tap
				</button>
			</div>
			<p className={'text-sm'}>Вы кликнули <span className='text-base font-bold'>{count}</span> раз(а)</p>
		</div>
	);
};

export default Clicker;