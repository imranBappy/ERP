import React from 'react';
import TableImg from './TableImg';
import ActionBtn from './ActionBtn';

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
                                    return <ActionBtn key={index} />
                                case "name":
                                    return props.img ? <TableImg key={index} name={item[key]} image={item['image']} /> : <td key={index}>{item["name"]}</td>;

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