import React from 'react';
import List from './List';
import { studentListBody, studentListHead } from '../data/staudentList';

const AdmissionApply = () => {
    return (
        <div>
            <List head={studentListHead} body={studentListBody} />
        </div>
    );
};

export default AdmissionApply;