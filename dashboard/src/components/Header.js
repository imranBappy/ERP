import React from 'react';
import { GoThreeBars } from 'react-icons/go';
import { MdOutlineDarkMode } from 'react-icons/md';
import { BsSun } from 'react-icons/bs';

const Header = (props) => {
    
    return (
        <div className="dashboard__header flex justify-between h-14 shadow-md dark:bg-black-700 dark:text-white-900 ">
            <div className="dashboard__header_lift flex gap-6">
                <div className='close__btn'>
                    <button onClick={props.handleOpen} className='bg-sky-600 px-2 py-1 rounded-md m-2'>
                        <GoThreeBars className='  text-3xl text-slate-50' />
                    </button>
                </div>
            </div>
            <div className="dashboard__header_right flex gap-2 mr-4 mt-2">
                <div className='mr-4'>
                    <div className='p-2 pointer bg-black-800 rounded-full'><MdOutlineDarkMode className='text-2xl' /></div>
                </div>
                <div>
                    <img className=' w-8 mt-1 ml-2 rounded-full ring-1 ring-offset-2' src="https://avatars.githubusercontent.com/u/61227100?v=4" alt="profile-ric" />
                </div>
                <div>
                    <h4 className=' font-medium text-lg leading-5'>Imran Hossen</h4>
                    <p className=' font-semibold text-sm	text-black-600'>Admin</p>
                </div>
            </div>
        </div>
    );
};

export default Header;