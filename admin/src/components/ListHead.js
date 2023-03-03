import React from 'react';

const ListHead = (props) => {
    const { head } = props;
    return (
        <thead className="bg-sky-600 text-white-900 h-12">
            <tr className='text-left'>
                {head.map((item, index) => {
                    return <th className={index === 0 && 'pl-2'} key={index}>{item}</th>
                })}
            </tr>
        </thead>
    );
};

export default ListHead;