import React from 'react';
import '../styles/dashboard.css';
import Drawer from '../components/Drawer';
import Header from '../components/Header';
import { Navigate, Outlet } from "react-router-dom";
const Layout = (props) => {
    console.log({ props });
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(!open);
    const isLoggedIn = true;
    return isLoggedIn ?
        <div className='flex w-full relative'>
            <Drawer handleOpen={[open, setOpen]} />
            <div className="dashboard__wrapper grow">
                <Header handleOpen={handleOpen} />
                <div className="dashboard__content  bg-white-800 dark:bg-black-800 dark:text-white-900 p-5 ">
                    <Outlet />
                </div>
            </div>
        </div > :
        <Navigate to="/login" />;
    ;
};

export default Layout;