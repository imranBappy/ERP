import React from 'react';
import List from './List';
import teacherListHead from '../data/teacherList';

const TeachersList = (props) => {
    return (
        <div>
            <List head={teacherListHead} body={props.data} />
        </div>
    );
};

export default TeachersList;