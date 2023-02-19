import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import SidebarMenu from './SidebarMenu';
import logo from '../logo.svg';

const Drawer = (props) => {
    const [open, setOpen] = props.handleOpen;
    const handleOpen = () => setOpen(!open)
    return (
        <div className={`drawer ${open ? "drawer__open" : "drawer-close"} bg-white-900 dark:text-white-900 dark:bg-black-700 `}>
            <div className='close__btn close__btn__ops '>
                <button onClick={handleOpen} className='ring-2 bg-sky-600 rounded-full ring-sky-600 shadow-lg' >
                    <AiOutlineClose className=' text-3xl text-slate-50 ' />
                </button>
            </div>
            <div className="sidebar__logo flex justify-center mt-5">
                <img className='w-20' src={logo} alt="logo" />
            </div>
            <SidebarMenu />
        </div>
    );
};

export default Drawer;