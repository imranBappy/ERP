import React from 'react';
import Card from '../components/Card';
import Analytics from '../components/Analytics';
<<<<<<< HEAD
import StudentDashboardCard from '../data/studentDashboardCard';
=======
import dashboardCard from '../data/dashboardCard';
>>>>>>> imran

const Dashboard = () => {
    return (
        <>
<<<<<<< HEAD
            <h2 className='text-2xl font-semibold'> Welcome Adorable Student!</h2>
            <Card cards={StudentDashboardCard} />
=======
            <h2 className='text-2xl font-semibold'> Welcome Admin!</h2>
            <Card cards={dashboardCard} />
>>>>>>> imran
            <Analytics />
        </>
    );
};

export default Dashboard;