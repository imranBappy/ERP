import React from 'react';
import logo from '../logo.svg';
import '../styles/dashboard.css';
import DashLink from '../components/DashLink';

import { AiOutlineClose } from 'react-icons/ai';
import { GoThreeBars } from 'react-icons/go';


const Dashboard = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(!open)
    }
    return (
        <div className='dashboard__wrapper flex w-full relative'>
            <div className={`drawer ${open ? "drawer-open" : "drawer-close"}  `}>
                <div className='close-btn close-btn-ops '>
                    <button onClick={handleOpen} className='ring-2 bg-sky-600 rounded-full ring-sky-600 shadow-lg' >
                        <AiOutlineClose className=' text-3xl text-slate-50 ' />
                    </button>
                </div>

                <div className="sidebar__logo flex justify-center mt-5">
                    <img className='w-20' src={logo} alt="logo" />
                </div>
                <div className="sidebar__menu ">
                    <ul>
                        <li className=' text-gray-400 ml-5 text-sm font-mono'> Main Menu </li>
                        <DashLink text="Dashboard" />
                        <DashLink text="Dashboard" />
                        <DashLink text="Dashboard" />
                        <DashLink text="Dashboard" />
                        <DashLink text="Dashboard" />
                    </ul>
                </div>
            </div>
            <div className="dashboard__wrapper grow  ">
                <div className="dashboard__header flex justify-between h-14 shadow-md mb-5 ">

                    <div className="dashboard__header_lift flex gap-6">
                        <div className='close-btn'>
                            <button onClick={handleOpen} className='bg-sky-600 px-2 py-1 rounded-md m-2'>
                                <GoThreeBars className='  text-3xl text-slate-50' />
                            </button>
                        </div>
                    </div>
                    <div className="dashboard__header_right flex gap-2 mr-4 mt-2">
                        <div>
                            <img className=' w-10 rounded-full ring-1 ring-offset-2' src="https://preschool.dreamguystech.com/template/assets/img/profiles/avatar-01.jpg" alt="profile-ric" />
                        </div>
                        <div>
                            <h4 className=' font-medium text-lg leading-5'>Imran Hossen</h4>
                            <p className=' font-semibold text-sm	text-gray-500'>Admin</p>
                        </div>
                    </div>
                </div>
                <div className="dashboard__content  bg-slate-100 ">
                    <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores, odit!</h1>

                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque pariatur nihil nam voluptates corrupti magnam, facilis magni voluptatum. Officiis, eum.</p>


                    <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores, odit!</h1>

                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque pariatur nihil nam voluptates corrupti magnam, facilis magni voluptatum. Officiis, eum.</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;