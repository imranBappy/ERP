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

        </div>
    );
};

export default DepartmentAdd;