import React from 'react';
import StudentsList from '../components/StudentsList';

const Students = () => {
    return (
        <div>
            <h1 className='page__title'>Students</h1>
            <StudentsList />
        </div>
    );
};

export default Students;