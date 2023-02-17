import React from 'react';
import { GoThreeBars } from 'react-icons/go';

const Header = (props) => {
    return (
        <div className="dashboard__header flex justify-between  h-14 shadow-md  ">
            <div className="dashboard__header_lift flex gap-6">
                <div className='close__btn'>
                    <button onClick={props.handleOpen} className='bg-sky-600 px-2 py-1 rounded-md m-2'>
                        <GoThreeBars className='  text-3xl text-slate-50' />
                    </button>
                </div>
            </div>
            <div className="dashboard__header_right flex gap-2 mr-4 mt-2">
                <div>
                    <img className=' w-10 rounded-full ring-1 ring-offset-2' src="https://avatars.githubusercontent.com/u/61227100?v=4" alt="profile-ric" />
                </div>
                <div>
                    <h4 className=' font-medium text-lg leading-5'>Imran Hossen</h4>
                    <p className=' font-semibold text-sm	text-gray-500'>Admin</p>
                </div>
            </div>
        </div>
    );
};

export default Header;