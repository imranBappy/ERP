import React, { useEffect, useState } from 'react';
import Input from '../components/Input';
import accountInput from '../data/accountInput';
import { useForm } from "react-hook-form";
import { connect } from 'react-redux';
import { accountPostAction } from '../app/actions/accountAction';

import SubmitBtn from '../components/SubmitBtn';
const AddAccount = (props) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const formData = new FormData()
    const onSubmit = ({ url, ...rest }) => {
        const data = { ...rest, url: url[0] }
        Object.keys(data).forEach(key => {
            formData.append(key, data[key])
        });
        props.accountPostAction(formData)
    };
    const [file, setFile] = useState(null);
    useEffect(() => {
        const subscription = watch((value, { name, type }) => {
            if (name === 'url') {
                setFile(URL.createObjectURL(value.url[0]));
            }
        });
        return () => subscription.unsubscribe();
    }, [watch]);
    return (
        <div className='light__component dark:dark__component p-5 max-w-5xl m-auto'>
            <h1 className='page__title'>Add Admin</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='max-w-3xl m-auto'>
                {
                    accountInput.map((input, index) =>
                        <Input errors={errors} register={register} {...input}
                            key={index} file={file}
                        />
                    )
                }
                <SubmitBtn disabled={false} value="Submit" />
            </form>
        </div>
    );
};

export default connect(null, { accountPostAction })(AddAccount);