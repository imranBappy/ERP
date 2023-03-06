import React from 'react';
import { AiOutlineEdit, AiFillEye } from 'react-icons/ai'

import { Link } from 'react-router-dom'
const ActionBtn = (props) => {
    return (
        <td > <Link to={`/profile/${props.id}`}><button className=' shadow-md p-1 rounded-full '><AiFillEye /></button></Link>    <button className='shadow-md p-1 rounded-full '><AiOutlineEdit /></button> </td>
    );
};

export default ActionBtn;