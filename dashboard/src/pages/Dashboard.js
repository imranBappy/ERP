import React from 'react';
import Card from '../components/Card';
import Analytics from '../components/Analytics';
import StartStudent from '../components/StartStudent';

const Dashboard = () => {
    return (
        <>
            <h2 className=' text-2xl font-semibold mb-5'> Welcome Admin!</h2>
            <Card />
            <Analytics />
            <StartStudent />
        </>
    );
};

export default Dashboard;