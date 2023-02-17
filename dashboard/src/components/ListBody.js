import React from 'react';

const ListBody = (props) => {
    const { body } = props;
    return (
        <tbody className=" student__table__body">
            {
                body.map((item, index) => {
                    return <tr key={index}>
                        {Object.values(item).map((value, index) => {
                            return <td key={index}>{value}</td>
                        })}
                    </tr>
                })
            }

        </tbody>
    );
};

export default ListBody;