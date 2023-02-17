import React from 'react';
import TableImg from './TableImg';

const ListBody = (props) => {
    const { body } = props;
    console.log(props.img);
    return (
        <tbody className=" student__table__body">
            {
                body.map((item, index) => {
                    return <tr key={index}>
                        {Object.keys(item).map((key, index) => {
                            console.log(key);
                            switch (key) {
                                case "image":
                                    break;
                                case "check":
                                    return <td key={index}><input type="checkbox" /></td>
                                case "action":
                                    return <td key={index}> <button className='mr-3'>View</button>   <button>Edit</button> </td>
                                case "name":
                                    return <TableImg key={index} name={item[key]} image={item['image']} />
                                default:
                                    return <td key={index}>{item[key]}</td>
                            }
                        })}
                    </tr>
                })
            }

        </tbody>
    );
};

export default ListBody;