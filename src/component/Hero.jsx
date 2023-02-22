import React from "react";

const Hero = () => {
	return (
		<div className='m-40 mt-40'>
			<h1 className='color text-5xl font-bold leading-tight'>
				Modern online and offline <br /> payments for Africa
			</h1>
			<p className='text-xl mt-5'>
				Paystack helps businesses in Africa get paid by anyone, <br /> anywhere
				in the world
			</p>

			<div className='mt-8'>
				<button className='px-9 p-1.5 bg-green-500 text-white rounded-lg leading-10 font-semibold'>
					Create a free account
				</button>
				<button className='px-8 text-green-500 font-semibold'>
					or Contact Sales
				</button>
			</div>

			<div className='flex w-full  mt-36 justify-between justify-items-center items-center'>
				<div>
					<p className='font-semibold'>Trusted by over 70,000 business</p>
					<div className='flex justify-around'>
						<img src='' alt='..' />
						<img src='' alt='..' />
						<img src='' alt='..' />
						<img src='' alt='..' />
					</div>
				</div>
				<div>
					<p>
						Watch MTN Chief Transformation Officer, Olubayo Adekanmbi, discuss
						working with Paystack
					</p>
					<img src='' alt=',,' />
				</div>
			</div>
		</div>
	);
};

export default Hero;
