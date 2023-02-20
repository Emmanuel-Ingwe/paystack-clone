import React from "react";
import copyImg from "../images/Copy.png";
import dropArrow from "../images/drop-down-arrow.svg";

const Navbar = (props) => {
	return (
		<nav className='w-full flex py-4 justify-between items-center navbar'>
			<div className='flex ml-12'>
				<img src={copyImg} alt='logo' width={28} className='mr-1 mt-1.5' />
				<h1 className='text-2xl font-bold'>paystack</h1>

				<ul className='flex px-5 mt-1.5 font-semibold ' key={""}>
					<div className='flex'>
						<li className='font-semibold'>Why Paystack</li>
						<img src={dropArrow} width={20} alt='i' />
					</div>
					<li className='px-4'>Customers</li>
					<li>Pricing</li>
					<div className='flex px-4'>
						<li>Learn</li>
						<img src={dropArrow} width={20} alt='i' />
					</div>
				</ul>
			</div>
			<div>
				<ul className='flex px-6 mt-1.5 font-semibold' key={""}>
					<div className='flex px-2'>
						<li>Developers</li>
						<img src={dropArrow} width={20} alt='i' />
					</div>
					<div className='flex px-2'>
						<li>Support</li>
						<img src={dropArrow} width={20} alt='i' />
					</div>
					<li className=''>Login</li>
					<button className='px-4'>Create free account</button>
					<img src='' alt='flg' />
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
