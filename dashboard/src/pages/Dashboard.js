import React from 'react';
import logo from '../logo.svg';
import '../styles/dashboard.css';
import student from '../imgs/student.png'
import award from '../imgs/award.png'
import Department from '../imgs/Department.png'
import Revenue from '../imgs/Revenue.png'
import { AiOutlineClose } from 'react-icons/ai';
import { GoThreeBars } from 'react-icons/go';
import Analytics from '../components/Analytics';
import StartStudent from '../components/StartStudent';
import SidebarMenu from '../components/SidebarMenu';


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
                <SidebarMenu />
            </div>
            <div className="dashboard__wrapper grow">
                <div className="dashboard__header flex justify-between  h-14 shadow-md  ">

                    <div className="dashboard__header_lift flex gap-6">
                        <div className='close-btn'>
                            <button onClick={handleOpen} className='bg-sky-600 px-2 py-1 rounded-md m-2'>
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
                <div className="dashboard__content  bg-gray-100 p-5 ">
                    <h2 className=' text-2xl font-semibold mb-5'> Welcome Admin!</h2>
                    <div className="dashboard__card_wrapper flex  t-5 gap-5  flex-wrap  justify-between">
                        <div className=" flex-grow info_card flex bg-white  basis-80 justify-between p-5 rounded-md shawdow-md">
                            <div className="card__left">
                                <p className='text-gray-500 text-lg  font-semibold'>students</p>
                                <p className=' font-bold text-2xl'>50055</p>
                            </div>
                            <div className="card__right">
                                <img width="50" src={student} alt="" />
                            </div>
                        </div>

                        <div className=" flex-grow info_card flex bg-white  basis-80 justify-between p-5 rounded-md shawdow-md">
                            <div className="card__left">
                                <p className='text-gray-500 text-lg  font-semibold'>award</p>
                                <p className=' font-bold text-2xl'>50+</p>
                            </div>
                            <div className="card__right">
                                <img width="50" src={award} alt="" />
                            </div>
                        </div>
                        <div className=" flex-grow info_card flex bg-white  basis-80 justify-between p-5 rounded-md shawdow-md">
                            <div className="card__left">
                                <p className='text-gray-500 text-lg  font-semibold'>Department</p>
                                <p className=' font-bold text-2xl'>30+</p>
                            </div>
                            <div className="card__right">
                                <img width="50" src={Department} alt="" />
                            </div>
                        </div>

                        <div className="flex-grow info_card flex bg-white  basis-80 justify-between p-5 rounded-md shawdow-md">
                            <div className="card__left">
                                <p className='text-gray-500 text-lg  font-semibold'>Revenue</p>
                                <p className=' font-bold text-2xl'>$505</p>
                            </div>
                            <div className="card__right">
                                <img width="50" src={Revenue} alt="" />
                            </div>
                        </div>
                    </div>
                    <Analytics />
                    <StartStudent />
                </div>

            </div>
        </div >
    );
};

export default Dashboard;