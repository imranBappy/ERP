import React from 'react';
import TableImg from './TableImg';
import ActionBtn from './ActionBtn';
const URL_PREFIX = 'http://localhost:5000/uploads/'
const ListBody = (props) => {
    const { body } = props;
<<<<<<< HEAD
    console.log(body);
=======
>>>>>>> mehedi
    return (
        <tbody className="student__table__body">
            {
                body.map((item, index) => {
                    return <tr key={index} className='even:bg-white-800 dark:even:bg-black-800'>
                        <td className={'pl-2'} >
                            <input type="checkbox" />
                        </td>
                        <td >{item['profile']['studentId']}</td>
                        <TableImg name={item['name']} image={`${URL_PREFIX}${item['url']}`} />
                        <td >{item['profile']['phone']}</td>
                        <td >{item['email']}</td>
                        <td >{item['profile']['address']}</td>

                        {/* {Object.keys(item).map((key, index2) => {
                            if (key !== 'profile') {
                                
                                switch (key) {
                                    case "_id":
                                        return null;
                                    case "url":
                                        return null;
                                    // case "check":
                                    //     return <td className={index2 === 0 && 'pl-2'} key={index2}>
                                    //         <input type="checkbox" />
                                    //     </td>
                                    // case "action":
                                    //     return <ActionBtn id={index} key={index2} />
                                    case "name":
                                        return <TableImg key={index2} name={item[key]} image={`${URL_PREFIX}${item['url']}`} />
                                    default:
                                        return <td key={index2}>{item[key]}</td>
                                }
                            }
                        })} */}
                        <ActionBtn id={item['_id']} />
                    </tr>
                })
            }

        </tbody>
    );
};

export default ListBody;