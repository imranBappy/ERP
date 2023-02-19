import React, { useEffect, useState } from 'react';
import { GoThreeBars } from 'react-icons/go';
import { MdOutlineDarkMode } from 'react-icons/md';
import { BsSun } from 'react-icons/bs';

const Header = (props) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
            setIsDarkMode(true);
        } else {
            document.documentElement.classList.remove('dark')
            setIsDarkMode(false);
        }
    }, []);
    const handleMode = () => {
        setIsDarkMode(!isDarkMode)
        if (isDarkMode)
            document.documentElement.classList.remove('dark')
        else
            document.documentElement.classList.add('dark')
    }

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
                    <div className='p-2 cursor-pointer bg-white-800 dark:bg-black-800 rounded-full' onClick={handleMode}>
                        {isDarkMode ? <BsSun className='text-2xl' /> : <MdOutlineDarkMode className='text-2xl' />}
                    </div>
                </div>
                <div>
                    <img className=' w-8 mt-1 ml-2 rounded-full ring-1 ring-offset-2' src="https://avatars.githubusercontent.com/u/61227100?v=4" alt="profile-ric" />
                </div>
                <div>
                    <h4 className=' font-semibold  text-base leading-5 '>Imran Hossen</h4>
                    <p className=' text-sm	dark:text-black-600'>Admin</p>
                </div>
            </div>
        </div>
    );
};

export default Header;