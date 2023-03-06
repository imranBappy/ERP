import React from 'react';
import Card from '../components/Card';
import Analytics from '../components/Analytics';
<<<<<<< HEAD
import dashboardCard from '../data/dashboardCard';
=======
import StartStudent from '../components/StartStudent';
>>>>>>> imran

const Dashboard = () => {
    return (
        <>
            <h2 className='text-2xl font-semibold'> Welcome Admin!</h2>
<<<<<<< HEAD
            <Card cards={dashboardCard} />
            <Analytics />
=======
            <Card />
            <Analytics />
            {/* <StartStudent /> */}
>>>>>>> imran
        </>
    );
};

export default Dashboard;