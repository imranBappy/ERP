import React from 'react';
import Card from '../components/Card';
import Analytics from '../components/Analytics';
<<<<<<<<< Temporary merge branch 1
import dashboardCard from '../data/dashboardCard';
=========
import StartStudent from '../components/StartStudent';
>>>>>>>>> Temporary merge branch 2

const Dashboard = () => {
    return (
        <>
            <h2 className='text-2xl font-semibold'> Welcome Admin!</h2>
<<<<<<<<< Temporary merge branch 1
            <Card cards={dashboardCard} />
            <Analytics />
=========
            <Card />
            <Analytics />
            {/* <StartStudent /> */}
>>>>>>>>> Temporary merge branch 2
        </>
    );
};

export default Dashboard;