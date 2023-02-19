import React from "react";
import copyImg from "../images/Copy.png";

const Navbar = (props) => {
	return (
		<nav className='w-full flex py-6 justify-between items-center navbar'>
			<img src={copyImg} alt='logo' width={20} />
			<h1>Paystack</h1>
		</nav>
	);
};

export default Navbar;
