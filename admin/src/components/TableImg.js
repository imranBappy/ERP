import React from 'react';

const TableImg = (props) => {
    return (
        <td className='flex items-center gap-4' >
            <img className=' rounded-full p-1' width="45" height="45" style={{ height: "45px" }} src={props.image} alt={props.name} />
            <h6>{props.name}</h6>
        </td>
    );
};

export default TableImg;