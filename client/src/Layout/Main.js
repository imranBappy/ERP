import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../components/Shared/Footer/Footer';
// import Navbar from '../components/Shared/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;