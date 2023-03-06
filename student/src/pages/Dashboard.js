import React from 'react';
import Card from '../components/Card';
import Analytics from '../components/Analytics';
<<<<<<< HEAD
import dashboardCard from '../data/dashboardCard';
=======
import StudentDashboardCard from '../data/studentDashboardCard';
>>>>>>> mehedi

const Dashboard = () => {
    return (
        <>
<<<<<<< HEAD
            <h2 className='text-2xl font-semibold'> Welcome Admin!</h2>
            <Card cards={dashboardCard} />
=======
            <h2 className='text-2xl font-semibold'> Welcome Adorable Student!</h2>
            <Card cards={StudentDashboardCard} />
>>>>>>> mehedi
            <Analytics />
        </>
    );
};

export default Dashboard;