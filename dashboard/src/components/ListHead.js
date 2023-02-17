import React from 'react';

const ListHead = (props) => {
    const { head } = props;
    return (
        <thead className="bg-sky-800 rounded-md  text-white h-10">
            <tr className='text-left'>
                {head.map((item, index) => {
                    return <th className={index == 0 && 'pl-2'} key={index}>{item}</th>
                })}
            </tr>
        </thead>
    );
};

export default ListHead;