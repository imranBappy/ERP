import React from 'react';
import TableImg from './TableImg';
import ActionBtn from './ActionBtn';

const ListBody = (props) => {
    const { body } = props;
    return (
        <tbody className=" student__table__body">
            {
                body.map((item, index) => {
                    return <tr key={index} className='even:bg-white-800 dark:even:bg-black-800'>
                        {Object.keys(item).map((key, index2) => {

                            switch (key) {
                                case "image":
                                    return null;
                                case "check":
                                    return <td className={index2 === 0 && 'pl-2'} key={index2}>
                                        <input type="checkbox" />
                                    </td>
                                case "action":
                                    return <ActionBtn id={index} key={index2} />
                                case "name":
                                    return props.img ? <TableImg key={index2} name={item[key]} image={item['image']} />
                                        : <td key={index2}>{item["name"]}</td>;
                                default:
                                    return <td key={index2}>{item[key]}</td>
                            }
                        })}
                    </tr>
                })
            }

        </tbody>
    );
};

export default ListBody;