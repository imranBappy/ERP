import React, { useState } from 'react';
import Input from '../components/Input';
import TeacherAddField from '../data/teacherAddField';


const TeacherAdd = () => {

    const [inputField, setInputField] = useState(TeacherAddField);

    return (
        <div className='light__component dark:dark__component p-5'>
            <h1 className='page__title'>Add Teacher</h1>

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

export default TeacherAdd;