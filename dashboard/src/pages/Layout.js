import React from 'react';
import '../styles/dashboard.css';
import Drawer from '../components/Drawer';
import Header from '../components/Header';
import { Outlet } from "react-router-dom";
const Layout = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(!open);

    return (
        <div className='dashboard__wrapper flex w-full relative'>
            <Drawer handleOpen={[open, setOpen]} />
            <div className="dashboard__wrapper grow">
                <Header handleOpen={handleOpen} />
                <div className="dashboard__content  bg-gray-100 p-5 ">
                    <Outlet />
                </div>

            </div>
        </div >
    );
};

export default Layout;