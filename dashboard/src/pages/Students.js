import React from 'react';
import StudentsList from '../components/StudentsList';
import AdmissionApply from '../components/AdmissionList';

const Students = () => {
    return (
        <div>
            <h1 className='page__title'>Students</h1>
            {/* <StudentsList /> */}
            <AdmissionApply />
        </div>
    );
};

export default Students;