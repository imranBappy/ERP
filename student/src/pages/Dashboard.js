import React from 'react';
import Card from '../components/Card';
import Analytics from '../components/Analytics';
import StudentDashboardCard from '../data/studentDashboardCard';

const Dashboard = () => {
    return (
        <>
            <h2 className='text-2xl font-semibold'> Welcome Adorable Student!</h2>
            <Card cards={StudentDashboardCard} />
            <Analytics />
        </>
    );
};

export default Dashboard;