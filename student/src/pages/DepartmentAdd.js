<<<<<<<<< Temporary merge branch 1
import React, { useState } from 'react';
import Input from '../components/Input';
import DepartmentAddField from '../data/DepartmentAdd';



const DepartmentAdd = () => {

    const [inputField, setInputField] = useState(DepartmentAddField);

    return (
        <div className='light__component dark:dark__component p-5'>
            <h1 className='page__title'>Add Admin</h1>

            {
                inputField.map((curEle)=>{
                return(
                    <form action="">
                <Input label={curEle.label} type={curEle.type} name={curEle.name} placeholder={curEle.placeholder} />
                 </form>
                )
                })
            }

=========
import React from 'react';

const DepartmentAdd = () => {
    return (
        <div>
            <h1>Department Add</h1>
>>>>>>>>> Temporary merge branch 2
        </div>
    );
};

export default DepartmentAdd;