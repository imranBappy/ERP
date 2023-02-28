import React from 'react';
import AdmissionApply from '../components/AdmissionList';
import { useGetStudentQuery } from '../app/services/admissionApi';
const Admission = () => {
    const data = useGetStudentQuery()
    const post = () => {

        console.log({ data });
    }

    return (
        <div>
            <AdmissionApply />
            <button onClick={post}>POst</button>
        </div>
    );
};

export default Admission;