import React from 'react';
import Card from '../components/Card';
import departmentCard from '../data/departmentCard';

const Departments = () => {
    return (
        <div>
            <h1 className='page__title'>Welcome To Departments Page !</h1>
            <Card cards={departmentCard} />
        </div>
    );
};

export default Departments;