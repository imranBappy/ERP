import React, { useEffect, useState } from 'react';
import Input from '../components/Input';
import accountInput from '../data/accountInput';
import { useForm } from "react-hook-form";
import axios from 'axios';
const AddAccount = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const formData = new FormData()
    const onSubmit = ({ url, ...rest }) => {
        const data = { ...rest, url: url[0] }
        Object.keys(data).forEach(key => {
            formData.append(key, data[key])
        });
        // formData.append('xxx', data['url'])
        // console.log(data, formData);

        axios.post('/admin', formData)
            .then(res => {
                alert(res.data.message)
            })
            .catch(err => { console.log(err); })
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
                <div className='my-5'>
                    <input type='submit' className="bg-sky-600 cursor-pointer text-white-800 border border-black- text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5 dark:bg-black-800 dark:border-black-600 dark: dark:text-white-900 dark:focus:ring-sky-600 dark:focus:border-sky-600" />
                </div>
            </form>
        </div>
    );
};

export default AddAccount;