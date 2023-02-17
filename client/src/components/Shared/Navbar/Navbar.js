import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
    const menuItems= <>
        <li className='nav_li'><Link to ="/" >Home</Link></li>
        <li className='nav_li'><Link to ="/" >About Us</Link></li>
        <li className='nav_li'><Link to ="/" >Admission</Link></li>
        <li className='nav_li'><Link to ="/" >Contact</Link></li>
        <li className='nav_li'><Link to ="/login" >Login</Link></li>
    </>

    return (
        <div className="navbar bg-base-100 max-w-screen-xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl nav_icon_re sm:text-sm lg:text-xl"> <img className='sm : hidden lg:inline' src="https://i.ibb.co/BtsJtmg/logo.png" alt="" /> Return <span className='zero'> Zero; </span>University</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>

        </div>
    );
};

export default Navbar;