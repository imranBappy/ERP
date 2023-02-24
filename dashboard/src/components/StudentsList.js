import React from 'react';
import InputForm from './inputlist';

import { studentListBody, studentListHead } from '../data/staudentList';
import List from './List';

const StudentsList = () => {
    return (
        <>
             <InputForm/>
        <List head={studentListHead} body={studentListBody} />
        </>
    );
};

export default StudentsList;