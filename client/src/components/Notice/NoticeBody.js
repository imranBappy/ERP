import React from 'react';

const NoticeBody = ({ dt }) => {
    const { id, pb_date, data, icon } = dt;

    return (

        <tr className='nt_row'>
            <td>{id}</td>
            <td>{pb_date}</td>
            <td className='nt_data'>{data}</td>
            <td className='nt_pdf'>{icon}</td>
        </tr>


    );
};

export default NoticeBody;