import React, { useEffect, useState } from 'react';
import "./Notice.css";
import NoticeBody from './NoticeBody';

const Notice = () => {
    const notice_data = [
        {
            id: 1,
            pb_date: "February 28, 2023",
            data: "2020 degree 3rd year final exam result release.",
            icon: <i className="fa-solid fa-file-pdf"></i>
        },
        {
            id: 2,
            pb_date: "February 28, 2023",
            data: "2023 power to power routine change.  In 2023 academic year",
            icon: <i className="fa-solid fa-file-pdf"></i>
        },
        {
            id: 3,
            pb_date: "February 28, 2023",
            data: "Admission to Masters Professional Course in 2023 academic year has started.",
            icon: <i className="fa-solid fa-file-pdf"></i>
        },
        {
            id: 4,
            pb_date: "February 28, 2023",
            data: "2023 LLB first and last phase exam routine release.",
            icon: <i className="fa-solid fa-file-pdf"></i>
        },
        {
            id: 5,
            pb_date: "February 28, 2023",
            data: "Degree 1st Year Admission Result (2nd Merit List) Publication.",
            icon: <i className="fa-solid fa-file-pdf"></i>
        },
        {
            id: 6,
            pb_date: "February 28, 2023",
            data: "2020 degree 3rd year final exam result release.",
            icon: <i className="fa-solid fa-file-pdf"></i>
        },
        {
            id: 7,
            pb_date: "February 28, 2023",
            data: "2023 power to power routine change.  In 2023 academic year",
            icon: <i className="fa-solid fa-file-pdf"></i>
        },
        {
            id: 8,
            pb_date: "February 28, 2023",
            data: "Admission to Masters Professional Course in 2023 academic year has started.",
            icon: <i className="fa-solid fa-file-pdf"></i>
        },
        {
            id: 9,
            pb_date: "February 28, 2023",
            data: "2023 LLB first and last phase exam routine release.",
            icon: <i className="fa-solid fa-file-pdf"></i>
        },
        {
            id: 10,
            pb_date: "February 28, 2023",
            data: "Degree 1st Year Admission Result (2nd Merit List) Publication.",
            icon: <i className="fa-solid fa-file-pdf"></i>
        },
    ]

    const [notice,setNotice]= useState([]);
    console.log(notice[0]);
    useEffect(()=>{
        fetch("http://localhost:5000/notice")
        .then((res)=>res.json())
        .then((data)=>setNotice(data))
    },[]);

    return (
        <div className='bg-slate-50 pt-16 pb-32'>
            <div className="overflow-x-auto w-4/5 mx-auto notice_height">
                <div className='text-center notice_head'>
                    <h2><i className="fa-solid fa-thumbtack mr-2"></i> NOTICE BOARD</h2>
                </div>
                <table className="table w-full">
                    {/* head*/}
                    <thead>
                        <tr>
                            <th></th>
                            <th className='nt_head'>Pblish Date</th>
                            <th className='nt_head'>Notice</th>
                            <th className='nt_head'><i className="fa-solid fa-download"></i></th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        
                    {
                        notice_data.map((dt) => (<NoticeBody
                            key={dt.id}
                            dt = {dt}
                        ></NoticeBody>))
                    }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Notice;