import React from "react";
import copyImg from "../images/Copy.png";

const Navbar = (props) => {
	return (
		<nav className='w-full flex py-4 justify-between items-center navbar'>
			<div className='flex ml-12'>
				<img src={copyImg} alt='logo' width={28} className='mr-1 mt-1.5' />
				<h1 className='text-2xl font-bold'>paystack</h1>

				<ul className='flex px-6 mt-1.5 font-semibold' key={""}>
					<div className='flex'>
						<li className='font-semibold'>Why Paystack</li>
						<img src='' alt='i' />
					</div>
					<li>Customers</li>
					<li>Pricing</li>
					<div className='flex'>
						<li>Learn</li>
						<img src='' alt='i' />
					</div>
				</ul>
			</div>
			<div>
				<ul className='flex px-6 mt-1.5 font-semibold' key={""}>
					<div className='flex'>
						<li>Developers</li>
						<img src='' alt='icon' />
					</div>
					<div className='flex'>
						<li>Support</li>
						<img src='' alt='icon' />
					</div>
					<li>Login</li>
					<button>Create free account</button>
					<img src='' alt='flg' />
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
