import React from 'react';
<<<<<<<<< Temporary merge branch 1
import Card from '../components/Card';
import departmentCard from '../data/departmentCard';
=========
>>>>>>>>> Temporary merge branch 2

const Departments = () => {
    return (
        <div>
            <h1 className='page__title'>Welcome To Departments Page !</h1>
<<<<<<<<< Temporary merge branch 1
            <Card cards={departmentCard} />
=========
>>>>>>>>> Temporary merge branch 2
        </div>
    );
};

export default Departments;