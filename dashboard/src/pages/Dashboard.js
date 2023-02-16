import React from 'react';
import logo from '../logo.svg';
import { NavLink } from 'react-router-dom';
import DashLink from '../components/DashLink';
const Dashboard = () => {


    return (
        <div className='dashboard__wrapper flex w-full relative'>
            <div className={` drawer `}>
                <div className="sidebar__logo flex justify-center mt-5">
                    <img className='w-20' src={logo} alt="logo" />
                </div>
                <div className="sidebar__menu ">
                    <ul>
                        <li> Main Menu </li>
                        <DashLink text="Dashboard" />
                        <DashLink text="Dashboard" />
                        <DashLink text="Dashboard" />
                        <DashLink text="Dashboard" />
                        <DashLink text="Dashboard" />

                    </ul>
                </div>
            </div>
            <div className="dashboard__wrapper grow  ">
                <div className="dashboard__header">
                    <div className="dashboard__header_lift">
                        <h1>Dashboard</h1>
                    </div>
                    <div className="dashboard__header_right">
                        <h1>Profile</h1>
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