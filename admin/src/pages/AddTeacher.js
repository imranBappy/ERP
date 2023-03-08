import React, { useState } from 'react';
import Input from '../components/Input';
import TeacherAddField from '../data/teacherAddField';
import { useForm } from 'react-hook-form';
import SubmitBtn from '../components/SubmitBtn';


const TeacherAdd = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [inputField, setInputField] = useState(TeacherAddField);
    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <div className='light__component dark:dark__component p-5 max-w-5xl m-auto'>
            <h1 className='page__title'>Add Teacher</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                {
                    inputField.map((input, i) => {
                        return (

                            <Input
                                errors={errors} register={register}
                                key={i}
                                {...input}
                            />

                        )
                    })
                }
                <SubmitBtn value="Add Teacher" />

            </form>

        </div>
    );
};

export default TeacherAdd;