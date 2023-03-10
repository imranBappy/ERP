import React from 'react';
import InputForm from './inputlist';

import { studentListBody, studentListHead } from '../data/staudentList';
import List from './List';

const StudentsList = ({ body }) => {
    return (
        <>
            <InputForm />
            <List head={studentListHead} body={body} />
        </>
    );
};

export default StudentsList;