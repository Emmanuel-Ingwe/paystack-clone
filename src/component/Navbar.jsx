import React from "react";
import copyImg from "../images/Copy.png";
import dropArrow from "../images/drop-down-arrow.svg";
import flag from "../images/ng.svg";

const Navbar = (props) => {
	return (
		<nav className='w-full flex mt-2 justify-between justify-items-center items-center navbar'>
			<div className='flex ml-12'>
				<img src={copyImg} alt='logo' width={28} className='mr-1 mt-1.5' />
				<h1 className='text-2xl font-bold'>paystack</h1>

				<ul className='flex px-5 mt-1.5 font-semibold ' key={""}>
					<div className='flex'>
						<li className='mr-2'>Why Paystack</li>
						<img src={dropArrow} width={8} alt='i' />
					</div>
					<li className='px-4'>Customers</li>
					<li>Pricing</li>
					<div className='flex px-4'>
						<li className='mr-2'>Learn</li>
						<img src={dropArrow} width={8} alt='i' />
					</div>
				</ul>
			</div>
			<div className='mr-12'>
				<ul className='flex px-6 font-semibold' key={""}>
					<div className='flex px-2'>
						<li className='mt-3 mr-2'>Developers</li>
						<img src={dropArrow} width={8} alt='i' />
					</div>
					<div className='flex px-2'>
						<li className='mr-2 mt-3'>Support</li>
						<img src={dropArrow} width={8} className='mr-3.5' alt='i' />
					</div>
					<li className='mt-3'>Login</li>
					<button className='px-4 bg-green-500 text-white rounded-lg leading-10 mt-3 mr-4 ml-4'>
						Create free account
					</button>
					<img src={flag} width={18} className='h-3 mt-5' alt='flg' />
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
