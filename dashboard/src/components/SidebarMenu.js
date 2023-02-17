import React from 'react';
import navLinks from '../data/navLink';
import DashLink from '../components/DashLink';

const SidebarMenu = () => {
    return (
        <div className="sidebar__menu">
            <ul className=' overflow-y-auto ' style={{ height: "92vh" }}>
                <li className='my-3 text-gray-400 ml-5 text-sm  font-mono'> Main Menu </li>
                {
                    navLinks.map((link) => (<DashLink link={link} />))
                }
            </ul>
        </div>
    );
};

export default SidebarMenu;