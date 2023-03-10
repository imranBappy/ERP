import React from 'react';
import "./NavTop.css";

const NavTop = () => {
    return (
        <div className='nav_top_container hidden md:inline lg:block '>

            <div className='nav_top_body w-4/5 mx-auto'>
                <p className=' have_ques '>Have any quesitons?</p>
                <p><i className="fa-solid fa-blender-phone "></i> (+880)171000001</p>
                <p><i className="fa-regular fa-clock "></i> Mon - Fri : 9.00AM - 06.00PM </p>
            </div>

        </div>
    );
};

export default NavTop;