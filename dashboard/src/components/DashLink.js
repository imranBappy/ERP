import React from 'react';
import { NavLink } from 'react-router-dom';
import { RxDashboard } from 'react-icons/rx';
import { MdNavigateNext } from 'react-icons/md';
import '../styles/DashLink.css'
const DashLink = (props) => {
    return (
        <>
            <li className='dash__link  h-10 flex justify-center items-center'>
                <RxDashboard />
                <span>
                    <NavLink to='/'>{props.text}</NavLink>
                </span>
                <MdNavigateNext className='nav_next' />
            </li>
        </>
    );
};

export default DashLink;