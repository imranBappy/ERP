import React, { useEffect, useState } from 'react';
import List from './List';
import { studentListBody, studentListHead } from '../data/staudentList';
import axios from 'axios';

const AdmissionApply = () => {
    const [std, setStd] = useState([])
    console.log('admission');
    useEffect(() => {
        axios.get('/admission')
            .then(res => {
                console.log(res.data);
            })
            .catch(err => { console.log(err) })
    }, [])
    return (
        <div>
            <List head={studentListHead} body={studentListBody} />
        </div>
    );
};

export default AdmissionApply;