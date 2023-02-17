import React from 'react';
import '../styles/dashboard.css';
import Analytics from '../components/Analytics';
import Drawer from '../components/Drawer';
import Header from '../components/Header';
import Card from '../components/Card';
import StartStudent from '../components/StartStudent'

const Dashboard = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(!open);

    return (
        <div className='dashboard__wrapper flex w-full relative'>
            <Drawer handleOpen={[open, setOpen]} />
            <div className="dashboard__wrapper grow">
                <Header handleOpen={handleOpen} />
                <div className="dashboard__content  bg-gray-100 p-5 ">
                    <h2 className=' text-2xl font-semibold mb-5'> Welcome Admin!</h2>
                    <Card />
                    <Analytics />

                    <StartStudent />
                </div>

            </div>
        </div >
    );
};

export default Dashboard;