import React, { useState } from 'react';
import Input from '../components/Input';
import TeacherAddField from '../data/teacherAddField';
import { useForm } from 'react-hook-form';


const TeacherAdd = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [inputField, setInputField] = useState(TeacherAddField);
    const onSubmit = (data) => { 
        console.log(data);
    }
    return (
        <div className='light__component dark:dark__component p-5'>
            <h1 className='page__title'>Add Teacher</h1>

            {
                inputField.map((curEle, i) => {
                    return (
                        <form  onSubmit={handleSubmit(onSubmit)}>
                            <Input
                                errors={errors} register={register}
                                key={i}
                                label={curEle.label} type={curEle.type} name={curEle.name} placeholder={curEle.placeholder} />
                            
                            <input type="submit" value="submit"/>
                        </form>
                    )
                })
            }

        </div>
    );
};

export default TeacherAdd;