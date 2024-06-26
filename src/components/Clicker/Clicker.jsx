import React, { useState } from 'react';

const Clicker = () => {
	const [count, setCount] = useState(0);

	return (
		<div className='flex flex-col justify-center items-center'>
			<div className='w-[200px] h-[200px] bg-gradient-to-b from-[#585ffa] via-[#262e4b] to-[#1c2025] my-[5vh] mx-auto p-[10px] rounded-full'>
				<button onClick={() => setCount(count + 1)} className={'w-full h-full rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#4671b1] via-[70%] via-[#282e3e] to-[#282e3e] hover:from-[#4671aa] hover:via-[#111] hover:to[#000] text-sm text-slate-100 clicker-btn'}>
					Tap
				</button>
			</div>
			<p className={'text-sm'}>Вы кликнули <span className='text-base font-bold'>{count}</span> раз(а)</p>
		</div>
	);
};

export default Clicker;