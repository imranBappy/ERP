import React from 'react';
import "./NavTop.css";


const NavTop = () => {
    return (
        <div className='nav_top_container sm:hidden'>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 nav_top_body'>
                <div className="left_nav_top lg:mr-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                    <p className='mr-4 have_ques'>Have any quesitons?</p>
                    <p><i className="fa-solid fa-blender-phone"></i> (+880)171000001</p>
                </div>
                <div className="right_nav_top lg:ml-32">
                    <p><i className="fa-regular fa-clock"></i> Mon - Fri : 9.00AM - 06.00PM </p>
                </div>
            </div>

        </div>
    );
};

export default NavTop;