import React from 'react';
import Card from '../components/Card';
import dashboardCard from '../data/dashboardCard';

const Departments = () => {
    return (
        <div>
            <h1 className='page__title'>Welcome To Departments Page !</h1>
            <Card cards={dashboardCard} />
        </div>
    );
};

export default Departments;