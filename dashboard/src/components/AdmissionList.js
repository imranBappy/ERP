import React, { useEffect, useState } from 'react';
import List from './List';
import { studentListHead } from '../data/staudentList';
import axios from 'axios';

const AdmissionApply = () => {
    const [std, setStd] = useState([])
    console.log('admission');
    useEffect(() => {
        axios.get('/admission')
            .then(res => {
                setStd(res.data)
            })
            .catch(err => { console.log(err) })
    }, [])
    console.log(std);
    return (
        <div>
            <List head={studentListHead} body={std} />
        </div>
    );
};

export default AdmissionApply;