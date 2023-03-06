import React from 'react';
import Card from '../components/Card';
import Analytics from '../components/Analytics';
<<<<<<< HEAD
import StartStudent from '../components/StartStudent';
=======
import dashboardCard from '../data/dashboardCard';
>>>>>>> mehedi

const Dashboard = () => {
    return (
        <>
            <h2 className='text-2xl font-semibold'> Welcome Admin!</h2>
<<<<<<< HEAD
            <Card />
            <Analytics />
            {/* <StartStudent /> */}
=======
            <Card cards={dashboardCard} />
            <Analytics />
>>>>>>> mehedi
        </>
    );
};

export default Dashboard;