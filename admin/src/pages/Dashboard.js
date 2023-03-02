import React from 'react';
import Card from '../components/Card';
import Analytics from '../components/Analytics';
import dashboardCard from '../data/dashboardCard';

const Dashboard = () => {
    return (
        <>
            <h2 className='text-2xl font-semibold'> Welcome Admin!</h2>
            <Card cards={dashboardCard} />
            <Analytics />
        </>
    );
};

export default Dashboard;