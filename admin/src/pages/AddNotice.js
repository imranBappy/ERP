

import React, { useEffect, useState } from 'react';
import Input from '../components/Input';
import TeacherAddField from '../data/noticeAdd';
import { useForm } from 'react-hook-form';
import SubmitBtn from '../components/SubmitBtn';
import { connect } from 'react-redux';
import { noticePostAction } from '../app/actions/noticeAction';
import { useNavigate } from "react-router-dom";

const AddNotice = (props) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [file, setFile] = useState(null);

    const formData = new FormData()
    let navigate = useNavigate();
    const onSubmit = ({ notice, ...rest }) => {
        const data = { ...rest, notice: notice[0] }
        Object.keys(data).forEach(key => {
            formData.append(key, data[key])
        });
        props.noticePostAction(formData);
        return navigate("/notice");
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

// export default AddNotice;
export default connect(null, { noticePostAction })(AddNotice);

