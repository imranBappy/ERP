import React from 'react';
import Card from '../components/Card';
import Analytics from '../components/Analytics';
<<<<<<< HEAD
import dashboardCard from '../data/dashboardCard';
=======
import StudentDashboardCard from '../data/studentDashboardCard';
=========
import dashboardCard from '../data/dashboardCard';
>>>>>>>>> Temporary merge branch 2

const Dashboard = () => {
    return (
        <>
<<<<<<<<< Temporary merge branch 1
            <h2 className='text-2xl font-semibold'> Welcome Adorable Student!</h2>
            <Card cards={StudentDashboardCard} />
=========
            <h2 className='text-2xl font-semibold'> Welcome Admin!</h2>
            <Card cards={dashboardCard} />
>>>>>>>>> Temporary merge branch 2
            <Analytics />
        </>
    );
};

export default Dashboard;