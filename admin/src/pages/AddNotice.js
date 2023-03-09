

import React, { useEffect, useState } from 'react';
import Input from '../components/Input';
import TeacherAddField from '../data/noticeAdd';
import { useForm } from 'react-hook-form';
import SubmitBtn from '../components/SubmitBtn';


const TeacherAdd = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [file, setFile] = useState(null);

    const formData = new FormData()
    const onSubmit = ({ url, ...rest }) => {
        const data = { ...rest, url: url[0] }
        Object.keys(data).forEach(key => {
            if (key === 'pdf') {
                formData.append(key, data[key][0])
            } else {
                formData.append(key, data[key])
            }
        });

    };
    return (
        <div className='light__component dark:dark__component p-5 max-w-5xl m-auto'>
            <h1 className='page__title'>Add Notice</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                {
                    TeacherAddField.map((input, i) => {
                        return (
                            <Input
                                file={file}
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
