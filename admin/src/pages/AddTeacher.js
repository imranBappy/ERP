import React, { useEffect, useState } from 'react';
import Input from '../components/Input';
import TeacherAddField from '../data/teacherAddField';
import { useForm } from 'react-hook-form';
import SubmitBtn from '../components/SubmitBtn';
import { connect } from 'react-redux'
import { teacherPostAction } from '../app/actions/teacherAction'
import { useNavigate } from "react-router-dom";
const TeacherAdd = (props) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [file, setFile] = useState(null);
    let navigate = useNavigate();

    useEffect(() => {
        const subscription = watch((value, { name, type }) => {
            if (name === 'url') {
                setFile(URL.createObjectURL(value.url[0]));
            }
        });
        return () => subscription.unsubscribe();
    }, [watch]);

    const formData = new FormData()
    const onSubmit = ({ url, cv, ...rest }) => {
        const data = { ...rest, url: url[0], cv: url[0] }
        Object.keys(data).forEach(key => {
            formData.append(key, data[key])
        });
        console.log(data);
        props.teacherPostAction(formData)

        return navigate("/teachers");
    };
    return (
        <div className='light__component dark:dark__component p-5 max-w-5xl m-auto'>
            <h1 className='page__title'>Add Teacher</h1>
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

export default connect(null, { teacherPostAction })(TeacherAdd);