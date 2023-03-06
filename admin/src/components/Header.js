import React, { useEffect, useState } from 'react';
import { GoThreeBars } from 'react-icons/go';
import { MdOutlineDarkMode } from 'react-icons/md';
import { BsSun } from 'react-icons/bs';
import { connect } from 'react-redux';
import { authGetAction } from '../app/actions/authAction'
import { useSearchParams } from 'react-router-dom';
const Header = (props) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [searchParams] = useSearchParams();

    useEffect(() => {
        if (searchParams.get('token')) {
            localStorage.setItem('token', searchParams.get('token'));
        }
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
            setIsDarkMode(true);
        } else {
            document.documentElement.classList.remove('dark')
            setIsDarkMode(false);
        }
        props.authGetAction();
    }, []);
    const handleMode = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove('dark')
        }
        else {
            document.documentElement.classList.add('dark')
        }
        setIsDarkMode(!isDarkMode)
        localStorage.theme === 'dark' ? localStorage.theme = 'light' : localStorage.theme = 'dark'
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
                    <img className=' w-8  h-8 mt-1 ml-2 rounded-full ring-1 ring-offset-2' src={`http://localhost:5000/uploads/${props.auth.data?.url}`} alt="profile-ric" />
                </div>
                <div>
                    <h4 className=' font-semibold  text-base leading-5 '>{props.auth.data?.name}</h4>
                    <p className=' text-sm	dark:text-black-600'>{props.auth.data?.role}</p>
                </div>
            </div>
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
};
export default connect(mapStateToProps, { authGetAction })(Header);
