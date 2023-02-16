import React from 'react';
import { NavLink } from 'react-router-dom';
import { RxDashboard } from 'react-icons/rx';
const DashLink = (props) => {
    return (
        <>
            <li className=' h-10 flex justify-center items-center'> <RxDashboard/> <NavLink to='/'>{props.text}</NavLink> </li>
        </>
    );
};

export default DashLink;