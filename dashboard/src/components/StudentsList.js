import React from 'react';

import { studentListBody, studentListHead } from '../data/staudentList';
import List from './List';

const StudentsList = () => {
    return (
        <List head={studentListHead} body={studentListBody} />
    );
};

export default StudentsList;