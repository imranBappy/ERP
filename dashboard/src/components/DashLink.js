import React from 'react';
import { NavLink } from 'react-router-dom';
import { RxDashboard } from 'react-icons/rx';
import { MdNavigateNext } from 'react-icons/md';
import '../styles/DashLink.css'
const DashLink = (props) => {
    return (
        <>
            <li className='dash__link__active dash__link  mb-1 h-10 flex pl-5 items-center text-lg'>
                <RxDashboard className='active__link' />
                <span className='mx-2  active__link'>
                    <NavLink to='/'>{props.text}</NavLink>
                </span>
                <MdNavigateNext className='nav_next active__link' />
            </li>
        </>
    );
};

export default DashLink;